import { StartFunc as ToLocalStorage } from "../../../../../ToLocalStorage/AllOrders.js";

let StartFunc = (inData) => {
    let jVarLocalData = inData.JsonData;

    ToLocalStorage({ inOrdersArray: jVarLocalData });

    let today = new Date().toISOString().split("T")[0];

    let jVarLocalFilteredData = jVarLocalData.filter(order => {

        let orderDate = new Date(order.DateTime).toISOString().split("T")[0];

        return orderDate === today;
    });

    let jVarLocalOrdered = jVarLocalFilteredData.sort((x, y) => ((x.pk === y.pk) ? 0 : ((x.pk < y.pk) ? 1 : -1)));
    let jVarLocalWithAggValues = jFLocalInsertAggValues({ inData: jVarLocalOrdered });

    var $table = $('#table');

    $table.bootstrapTable("load", jVarLocalWithAggValues);
};

let jFLocalInsertAggValues = ({ inData }) => {
    let jVarLocalData = inData;
    let jVarLocalReturnObject = [];

    jVarLocalReturnObject = jVarLocalData.map(element => {
        element.AggValues = {};
        element.AggValues.ItemDetails = `${Object.keys(element.ItemsInOrder).length} / ${Object.values(element.ItemsInOrder).map(p => p.Pcs).reduce((acc, val) => acc + parseInt(val), 0)}`;

        element.AggValues.SettlementAmount = "";

        if (Object.values(element.CheckOutData)[0]) {
            element.AggValues.SettlementAmount = Object.values(element.CheckOutData)[0].CardAmount + Object.values(element.CheckOutData)[0].CashAmount + Object.values(element.CheckOutData)[0].UPIAmount;
            element.IsSettled = false;
        }

        if (Object.keys(element.CheckOutData).length > 0) {
            element.IsSettled = true;
        }

        let jVarLocalAddOnArray = Object.values(element.AddOnData);

        element.AggValues.ItemsArray = Object.values(element.ItemsInOrder).map(item => {
            item.AddOnDataAsArray = jVarLocalAddOnArray.filter(addOn => addOn.AddOnItemSerial === item.ItemSerial);
            return item;
        });

        return element;
    });

    return jVarLocalReturnObject;
};

export { StartFunc };

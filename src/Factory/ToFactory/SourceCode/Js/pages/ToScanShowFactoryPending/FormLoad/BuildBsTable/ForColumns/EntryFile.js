import { StartFunc as ColumnOperate } from "./ColumnSerial/entryFile.js";
import { StartFunc as ItemsDetails } from "./ItemsDetails/entryFile.js";

let StartFunc = ({ inColumns }) => {
    let LocalColumns = inColumns;
    let LocalColumnOperateFine = LocalColumns.find(element => element.field === "KS-Serial");

    if (LocalColumnOperateFine === undefined === false) {
        ColumnOperate({ inFindColumn: LocalColumnOperateFine });
    };

    let LocalItemDetails = LocalColumns.find(element => element.field === "ItemDetails");

    if (LocalItemDetails === undefined === false) {
        ItemsDetails({ inFindColumn: LocalItemDetails });
    };
};

export { StartFunc };
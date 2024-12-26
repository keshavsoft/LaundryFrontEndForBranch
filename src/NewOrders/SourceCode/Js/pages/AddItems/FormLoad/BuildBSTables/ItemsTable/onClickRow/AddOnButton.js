import { StartFunc as StartFuncShowOnModal } from "./ShowOnModal.js";
import ConfigJson from '../../../../Config.json' with {type: 'json'};

const StartFunc = ({ inRow }) => {
    let jVarLocalDataForTable = jFLocalTransformData({ inItemSerial: parseInt(inRow.pk) });

    var $table = $('#AddOnTable');
    $table.bootstrapTable("load", jVarLocalDataForTable);

    StartFuncShowOnModal({ inRow });

    $("#AddOnModal").modal("show");
};

let jFLocalTransformData1 = ({ inItemSerial }) => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;

    let JVarLocalFromStrogeAddOnData = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);
    console.log("kkkkkkkkk", jVarLocalData);

    let jVarLocalItemSerial = inItemSerial;

    let jVarLocalAddOnsArray = Object.keys(jVarLocalData.AddOnData).map((key) => {
        return { ...jVarLocalData.AddOnData[key], "AddOnPK": key };
    });

    let jVarLocalFilterData = jVarLocalAddOnsArray.filter(e => e.AddOnItemSerial === jVarLocalItemSerial);

    return jVarLocalFilterData;
};
let jFLocalTransformData = ({ inItemSerial }) => {
    // debugger;
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;

    let JVarLocalFromStrogeAddOnData = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);

    let jVarLocalItemSerial = inItemSerial;
    return jVarLocalData?.ItemsInOrder[jVarLocalItemSerial].AddOnArray
};

export { StartFunc };
import { StartFunc as StartFuncShowOnModal } from "./ShowOnModal.js";
import ConfigJson from '../../../../../Config.json' with {type: 'json'};
const jVarCommonModalId = "AddOnModalLocalStorage";

const StartFunc = ({ inRow }) => {
    let jVarLocalAddOnModalLocalStorage = document.getElementById(jVarCommonModalId);
    let jVarLocalTable = jVarLocalAddOnModalLocalStorage.querySelector("table");

    let jVarLocalDataForTable = jFLocalTransformData();

    var $table = $(jVarLocalTable);
    $table.bootstrapTable("load", jVarLocalDataForTable);

    StartFuncShowOnModal({ inRow });

    $(jVarLocalAddOnModalLocalStorage).modal("show");
};

let jFLocalTransformData = () => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.PresntOrderAddOnsKey;

    let JVarLocalFromStrogeAddOnData = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);

    return jVarLocalData;
};

export { StartFunc };
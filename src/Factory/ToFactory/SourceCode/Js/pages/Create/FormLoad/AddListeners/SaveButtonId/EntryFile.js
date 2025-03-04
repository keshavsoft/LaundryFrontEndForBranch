import { StartFunc as StartFuncFuncToRun } from "./fetchasGet/entryFile.js";

let StartFunc = () => {
    let jVarLocalRefreshBSTableId = document.getElementById("CreateCustomerButtonId");

    if (jVarLocalRefreshBSTableId === null === false) {
        jVarLocalRefreshBSTableId.addEventListener("click", StartFuncFuncToRun);
    };
};

export { StartFunc };
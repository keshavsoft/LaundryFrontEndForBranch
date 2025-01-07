import { StartFunc as StartFuncFuncToRun } from "./Order/ButtonClickFunc.js";

let StartFunc = () => {
    let jVarLocalCustomerNameInputId = "OrderId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    jVarLocalHtmlId.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            StartFuncFuncToRun();
        };
    });
};

export { StartFunc }
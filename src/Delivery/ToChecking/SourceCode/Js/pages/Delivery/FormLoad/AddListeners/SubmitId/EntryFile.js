import { StartFunc as StartFuncClickFunc } from "./ClickFunc.js";

let StartFunc = () => {
    let jVarLocalMasterButtonId = "SubmitId";
    let jVarLocalHtmlId = document.getElementById(jVarLocalMasterButtonId);

    jVarLocalHtmlId.addEventListener("click", StartFuncClickFunc);
};

export { StartFunc }
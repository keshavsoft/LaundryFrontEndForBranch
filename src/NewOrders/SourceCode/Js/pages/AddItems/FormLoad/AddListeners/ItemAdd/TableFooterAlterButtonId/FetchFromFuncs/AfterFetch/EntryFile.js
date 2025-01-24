import { StartFunc as StartFuncGetFetch } from "../../../../../ToLocalStorage/PresentOrder/GetFetch.js";
import { StartFunc as StartFuncShowToDom } from "../../../../../../ShowToDom/ToTable/EntryFile.js";
import { jFShowToday } from "../../../../../ShowOnDom/EntryFile.js";

let StartFunc = () => {
    // window.location.href = ""
    StartFuncGetFetch().then(() => {
        StartFuncShowToDom();
        localStorage.removeItem('PresentOrderAddOns');
        $('#table').bootstrapTable('refresh');
        $('#AddItemsId')[0].reset();
        $('#TableFooterItemNameId').focus();
        jFShowToday();
        localStorage.setItem("PresentOrderAddOns", JSON.stringify([]));

        jFLocalToInputSubId()
        jFTableFooterSaveButtonId()
        jFLocalTableFooterAlterButtonId()
    });


};

let jFLocalToInputSubId = () => {
    let jVarLocalHtmlId = 'SubId';
    let jVarLocalSubId = document.getElementById(jVarLocalHtmlId);
    jVarLocalSubId.classList.add("d-none")
};

const jFTableFooterSaveButtonId = () => {
    let jVarLocalHtmlId = 'TableFooterSaveButtonId';
    let jVarLocalTableFooterdateInputId = document.getElementById(jVarLocalHtmlId);
    jVarLocalTableFooterdateInputId.classList.remove("d-none")

};

let jFLocalTableFooterAlterButtonId = () => {
    let jVarLocalTableFooterAlterButtonId = 'TableFooterAlterButtonId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterAlterButtonId);
    jVarLocalHtmlId.classList.add("d-none")
};

export { StartFunc }
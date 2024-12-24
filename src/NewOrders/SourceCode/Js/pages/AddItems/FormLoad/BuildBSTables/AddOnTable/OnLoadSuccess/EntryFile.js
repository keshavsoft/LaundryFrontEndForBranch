// import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";
// import { StartFunc as StartFuncTableFooterCategoryId } from "./TableFooterCategoryId/EntryFile.js";
// import { StartFunc as StartFuncTableFooterItemNameId } from "./TableFooterItemNameId/EntryFile.js";
// import { StartFunc as StartFuncTableFooterItemNameSearchButtonId } from "./TableFooterItemNameSearchButtonId/EntryFile.js";

import { StartFunc as StartFuncAddOnModalSaveButtonId } from "./AddOnModalSaveButtonId/EntryFile.js";
import { StartFunc as StartFuncToAddOns } from "./ToAddOns/EntryFile.js";
import { StartFunc as StartFuncTableFooterAddOnSelectId } from "./TableFooterAddOnSelectId/entryFile.js";

let StartFunc = () => {
    StartFuncAddOnModalSaveButtonId();
    StartFuncToAddOns();
    StartFuncTableFooterAddOnSelectId();
    // StartFuncTableFooterSaveButtonId();
    // StartFuncTableFooterCategoryId();
    // StartFuncTableFooterItemNameId();
    // StartFuncTableFooterItemNameSearchButtonId();

    // jFLocalEndFunc();
};

let jFLocalEndFunc = () => {
    var event = new Event('change');
    let jVarLocalTableFooterCategoryId = document.getElementById('TableFooterCategoryId');

    if (jVarLocalTableFooterCategoryId === null === false) {
        document.getElementById("TableFooterCategoryId").dispatchEvent(event)
    };
};

export { StartFunc };
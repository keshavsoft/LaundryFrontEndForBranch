import { StartFunc as StartFuncTableFooterSaveButtonId } from "./TableFooterSaveButtonId/EntryFile.js";
// import { StartFunc as StartFuncTableFooterCategoryId } from "./TableFooterCategoryId/EntryFile.js";
import { StartFunc as StartFuncTableFooterItemNameId } from "./TableFooterItemNameId/EntryFile.js";
import { StartFunc as StartFuncTableFooterItemNameSearchButtonId } from "./TableFooterItemNameSearchButtonId/EntryFile.js";
import { StartFunc as StartFuncTableFooterAddOnId } from "./TableFooterAddOnId/EntryFile.js";
import { StartFunc as StartFuncTableFooterItemServiceId } from "./TableFooterItemServiceId/EntryFile.js";
import { StartFunc as StartFuncTableFooterAlterButtonId } from "./TableFooterAlterButtonId/EntryFile.js";
import { StartFunc as StartFuncFromCategoryButtons } from "./CategoryButtons/entryFile.js";

const StartFunc = () => {
    // StartFuncTableFooterCategoryId();

    StartFuncFromCategoryButtons();

    StartFuncTableFooterAddOnId();

    StartFuncTableFooterItemNameSearchButtonId();
    StartFuncTableFooterItemServiceId();

    StartFuncTableFooterItemNameId();

    StartFuncTableFooterSaveButtonId();
    StartFuncTableFooterAlterButtonId()
};

export { StartFunc };

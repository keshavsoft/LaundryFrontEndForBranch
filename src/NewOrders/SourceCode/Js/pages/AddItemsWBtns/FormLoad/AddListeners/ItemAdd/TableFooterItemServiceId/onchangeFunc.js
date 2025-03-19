import { StartFuncServiceFind as StartFuncFromLocalStorage } from "../fromlocalStorage.js";

const StartFunc = (event) => {
    let jVarLocalCurrentTarget = event.currentTarget;
    let jVarLocalService = jVarLocalCurrentTarget.value;

    const jVarLocalCategorySelected = jFLocalTableFooterCategoryId();
    const jVarLocalItemType = jFLocalTableFooterItemNameId();

    let jVarLocalFromLocalStorageFind = StartFuncFromLocalStorage({
        inCategory: jVarLocalCategorySelected,
        inItemType: jVarLocalItemType,
        inService: jVarLocalService
    });
    jFLocalToInputTableFooterRateInputId(jVarLocalFromLocalStorageFind.DryWashRate);
};

let jFLocalTableFooterItemNameId = () => {
    let jVarLocalTableFooterItemNameId = 'TableFooterItemNameId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalTableFooterItemNameId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

let jFLocalTableFooterCategoryId = () => {
    let selectedButton = Array.from(document.querySelectorAll('.CategoryItems')).find(button =>
        button.classList.contains('btn-primary')
    );
    return selectedButton ? selectedButton.textContent.trim() : null;
};


let jFLocalToInputTableFooterRateInputId = (inValue) => {
    let jVarLocalHtmlId = 'TableFooterRateInputId';
    let jVarLocalTableFooterRateInputId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalTableFooterRateInputId === null === false) {
        jVarLocalTableFooterRateInputId.value = inValue;
    };
};

export { StartFunc };
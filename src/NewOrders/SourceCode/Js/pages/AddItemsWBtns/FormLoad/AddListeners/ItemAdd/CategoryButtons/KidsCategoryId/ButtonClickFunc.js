import { StartFunc as StartFuncFromToDataList } from "./ToDataList.js";
const jVarCommonCategory = "Kids";

let StartFunc = (event) => {
    StartFuncFromToDataList({ inCategorySelected: jVarCommonCategory });

    let jVarLocalItemTypeLabelId = document.getElementById('ItemTypeLabelId');

    jVarLocalItemTypeLabelId.dataset.itemCategory = jVarCommonCategory;
};

export { StartFunc };
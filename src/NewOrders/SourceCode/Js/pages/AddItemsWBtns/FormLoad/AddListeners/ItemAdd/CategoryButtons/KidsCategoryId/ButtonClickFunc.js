import { StartFunc as StartFuncFromToDataList } from "./ToDataList.js";

let StartFunc = () => {
    StartFuncFromToDataList({ inCategorySelected: "Kids" })
};

export { StartFunc };
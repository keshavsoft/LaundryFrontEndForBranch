import { StartFunc as StartFuncFromToDataList } from "./ToDataList.js";

let StartFunc = () => {
    StartFuncFromToDataList({ inCategorySelected: "Others" })
};

export { StartFunc };
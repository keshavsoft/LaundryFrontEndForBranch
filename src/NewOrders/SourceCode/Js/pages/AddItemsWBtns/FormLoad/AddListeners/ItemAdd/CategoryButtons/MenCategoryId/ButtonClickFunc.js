import { StartFunc as StartFuncFromToDataList } from "./ToDataList.js";

let StartFunc = () => {
    StartFuncFromToDataList({ inCategorySelected: "Men" })
};

export { StartFunc };
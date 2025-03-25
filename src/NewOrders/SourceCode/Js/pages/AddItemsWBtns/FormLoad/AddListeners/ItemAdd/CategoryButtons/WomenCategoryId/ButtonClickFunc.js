import { StartFunc as StartFuncFromToDataList } from "./ToDataList.js";

let StartFunc = () => {
    StartFuncFromToDataList({ inCategorySelected: "Women" })
};

export { StartFunc };
import { StartFunc as StartFuncFuncToRun } from "./FetchFromFuncs/Entry.js";

let StartFunc = ({ inRow }) => {
    StartFuncFuncToRun({ inRow })
};

export { StartFunc };
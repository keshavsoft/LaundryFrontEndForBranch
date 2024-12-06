import { StartFunc as StartFuncFromUrlParams } from "./FromUrlParams/EntryFile.js";
import { StartFunc as StartFuncBuildBsTable } from "./BuildBsTable/EntryFile.js";

const StartFunc = () => {
    StartFuncFromUrlParams();
    StartFuncBuildBsTable();
};

export { StartFunc };

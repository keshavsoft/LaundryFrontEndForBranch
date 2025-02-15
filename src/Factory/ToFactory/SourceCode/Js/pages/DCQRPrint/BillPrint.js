import { StartFunc as StartFuncShowOnDom } from "./FetchFromFuncs/Entry.js";
import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";

const StartFunc = () => {
    let jVarLocalFromAdmin = true;
    if (jVarLocalFromAdmin) {
        BuildBsTable();
        StartFuncShowOnDom().then();
    };
};

StartFunc();
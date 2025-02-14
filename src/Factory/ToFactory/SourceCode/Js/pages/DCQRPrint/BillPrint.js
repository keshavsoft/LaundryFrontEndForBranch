import { StartFunc as StartFuncShowOnDom } from "./FetchFromFuncs/Entry.js";


const StartFunc = () => {
    let jVarLocalFromAdmin = true;
    if (jVarLocalFromAdmin) {
        StartFuncShowOnDom().then();
    };
};

StartFunc();
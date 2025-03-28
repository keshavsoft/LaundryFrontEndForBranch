import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as afterFetch } from './afterFetch/EntryFile.js';
import { StartFunc as CheckFunc } from "./CheckFunc.js";

const StartFunc = async () => {
    let jVarLocalFromCheck = CheckFunc();

    if (jVarLocalFromCheck) {
        let localResponse = await StartFuncFetchFuncs();

        afterFetch({ inRowPk: localResponse });
    }
};

export { StartFunc };

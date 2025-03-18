import { StartFunc as StartFuncFetchFuncs } from "./GetFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async ({ inData }) => {
    let jVarLocalDataNeeded = await StartFuncFetchFuncs({ inData });

    if (jVarLocalDataNeeded) {
        StartFuncAfterFetch({ inDataToShow: jVarLocalDataNeeded });
    }
}
export { StartFunc }
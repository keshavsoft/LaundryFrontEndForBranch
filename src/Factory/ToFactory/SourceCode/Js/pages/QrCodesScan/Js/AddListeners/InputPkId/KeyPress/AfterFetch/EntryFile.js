import { StartFunc as StartFuncForResponse500 } from "./ForResponse500.js";
import { StartFunc as StartFuncForResponse200 } from "./ForResponse200/entryFile.js";

let StartFunc = async ({ inFetchResonse }) => {

    if (inFetchResonse.status === 400) {
        return await StartFuncForResponse500({ inFetchResonse });
    };
    
    if (inFetchResonse.status === 200) {
        return await StartFuncForResponse200({ inFetchResonse });
    };
};



export { StartFunc };
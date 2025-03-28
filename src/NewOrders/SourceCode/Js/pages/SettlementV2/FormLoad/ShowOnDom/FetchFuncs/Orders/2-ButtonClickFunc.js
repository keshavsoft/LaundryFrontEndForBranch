import { StartFunc as StartFuncFetchFunc } from "./5-FetchFunc.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./3-CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch/EntryFile.js";

let StartFunc = async () => {
    if (StartFuncCheckBeforeFetch()) {

        let response = await StartFuncFetchFunc();
        StartFuncAfterFetch({ inFromFetch: response });
    };
};

export { StartFunc };
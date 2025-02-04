import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import Url from './FetchHeaders/url.json' with {type: 'json'};

let StartFunc_Old_Post = async ({ inBodyData }) => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders({ inBodyData });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalFetchUrl = `${Url.FetchUrl}/${jVarLocalBranchName}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

let StartFunc = async ({ inBodyData }) => {
    debugger;
    let jVarLocalMobileNumber = inBodyData.Mobile;

    let jVarLocalBranchName = localStorage.getItem("BranchName");

    // let jVarLocalFetchUrl = `${ConfigJson.Urls.NewOrderButtonId.PostFetch}/${jVarLocalBranchName}/${jVarLocalMobileNumber}`;
    //let jVarLocalFetchUrl = `${Url.FetchUrl}/${jVarLocalBranchName}/${jVarLocalMobileNumber}`;
    let jVarLocalFetchUrl = Url.FetchUrl;
    const jVarBranchReplaced = jVarLocalFetchUrl.replace("{BranchName}", jVarLocalBranchName);
    const jVarMobileReplaced = jVarBranchReplaced.replace("{MobileNumber}", jVarLocalMobileNumber);

    let response = await fetch(jVarMobileReplaced);

    return await response;
};

export { StartFunc };


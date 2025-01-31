import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalbranchName = localStorage.getItem("BranchName")
    const modifiedBranch = jVarLocalbranchName.replace("BranOrders", "");

    let jVarLocalFetchUrl = `/Custom/Cleaning/Branch/Factory/ToFactory/ScanV1/${modifiedBranch}`;

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);
    // let data = await response.json();

    return await response;
};

export { StartFunc };
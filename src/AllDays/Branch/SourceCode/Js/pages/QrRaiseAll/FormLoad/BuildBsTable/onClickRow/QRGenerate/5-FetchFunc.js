import { StartFunc as StartFuncAfterFetch } from "./6-AfterFetch.js";

const StartFunc = async ({ inRowData }) => {

    let LocalRowPk = inRowData.pk;
    let jVarLocalBranchName = localStorage.getItem("BranchName");

    // let jVarLocalFetchUrl = `/Custom/Clients/Washtex/Qrcodes/Table/${jVarLocalBranchName}/${LocalRowPk}`;
    let jVarLocalFetchUrl = `/Custom/Cleaning/Branch/QrCode/V1/Generate/${jVarLocalBranchName}/${LocalRowPk}`;


    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    StartFuncAfterFetch({ inFromFetch: jVarLocalResponse });

    return jVarLocalResponse;

};

export { StartFunc };

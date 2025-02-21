const StartFunc = async ({ inRowData }) => {

    let LocalRowPk = inRowData.pk;
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalFetchUrl = `/Custom/Clients/Laundry/Qrcodes/Generate/${jVarLocalBranchName}/${LocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);

    return response;

};

export { StartFunc };

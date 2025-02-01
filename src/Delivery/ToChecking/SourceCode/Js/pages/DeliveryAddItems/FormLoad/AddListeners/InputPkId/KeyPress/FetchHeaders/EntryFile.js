import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let inDataToInsert = {};

    inDataToInsert.QrCodeId = jFLocalFromDomInputPkId();
    inDataToInsert.BranchName = localStorage.getItem("BranchName");
    let modifiedBranch = inDataToInsert.BranchName.replace("BranOrders", "");
    inDataToInsert.BranchName = modifiedBranch;
    inDataToInsert.OrderNumber = jFLocalOrderId();

    KeysJson.body = JSON.stringify(inDataToInsert);

    return KeysJson;
};

let jFLocalFromDomInputPkId = () => {
    let jVarLocalHtmlInputPkId = 'InputPkId';
    let jVarHtmlInputPkId = document.getElementById(jVarLocalHtmlInputPkId);
    let jVarHtmlInputPkIdValue = jVarHtmlInputPkId.value.trim();
    return parseInt(jVarHtmlInputPkIdValue);
};

let jFLocalOrderId = () => {
    let jVarLocalOrderId = 'OrderId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalOrderId);

    if (jVarLocalHtmlId === null === false) {
        return parseInt(jVarLocalHtmlId.value.trim());
    };
};

export { StartFunc }
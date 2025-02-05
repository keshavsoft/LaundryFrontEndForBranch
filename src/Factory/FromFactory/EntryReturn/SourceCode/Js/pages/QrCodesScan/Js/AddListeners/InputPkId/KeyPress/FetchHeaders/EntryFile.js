import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let inDataToInsert = {};

    inDataToInsert.QrCodeId = jFLocalFromDomInputPkId();
    inDataToInsert.VoucherRef = getUrlQueryParams({ inGetKey: "VoucherRef" });
    inDataToInsert.BranchName = localStorage.getItem("BranchName");
    let modifiedBranch = inDataToInsert.BranchName.replace("BranOrders", "");
    inDataToInsert.BranchName = modifiedBranch;
    inDataToInsert.FactoryName = jFLocalFromDomDCFactoryTextId();

    KeysJson.body = JSON.stringify(inDataToInsert);

    return KeysJson;
};

let jFLocalFromDomInputPkId = () => {
    let jVarLocalHtmlInputPkId = 'InputPkId';
    let jVarHtmlInputPkId = document.getElementById(jVarLocalHtmlInputPkId);
    let jVarHtmlInputPkIdValue = jVarHtmlInputPkId.value.trim();
    return parseInt(jVarHtmlInputPkIdValue);
};

let jFLocalFromDomDCFactoryTextId = () => {
    let jVarLocalHtmlDCFactoryTextId = 'DCFactoryDCDetailsTextId';
    let jVarHtmlDCFactoryTextId = document.getElementById(jVarLocalHtmlDCFactoryTextId);
    let jVarHtmlDCFactoryTextIdValue = jVarHtmlDCFactoryTextId.innerHTML.trim();
    return jVarHtmlDCFactoryTextIdValue;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc }
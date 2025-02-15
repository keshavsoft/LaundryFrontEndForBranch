import ConfigJson from "../Config.json" with{type: "json"};

let StartFunc = async () => {
    // let jVarLocalvoucherRef = inRowData.pk;
    let jVarLocalvoucherRef = getUrlQueryParams({ inGetKey: "DCNumber" });
    let jVarLocalFetchUrl = `${ConfigJson.endPoint}/${jVarLocalvoucherRef}`;
    let response = await fetch(jVarLocalFetchUrl);
    // let data = await response.json();

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};
export { StartFunc };
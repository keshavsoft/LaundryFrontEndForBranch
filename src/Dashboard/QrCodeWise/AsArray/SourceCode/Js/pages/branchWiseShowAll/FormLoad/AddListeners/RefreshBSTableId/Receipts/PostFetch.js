import ConfigJson from '../../../../Config.json' with {type: 'json'};

let StartFunc = async () => {

    // let jVarLocalBranchName = localStorage.getItem("BranchName");

    let jVarLocalFetchUrl = ConfigJson.GetUrl;

    let response = await fetch(`${jVarLocalFetchUrl}`);

    return await response;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc };


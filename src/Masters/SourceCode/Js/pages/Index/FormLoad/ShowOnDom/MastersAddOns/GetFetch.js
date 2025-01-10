import UrlJson from "../../../Config.json" with { type: "json" };

let StartFunc = async () => {
    let LocalroutePath = UrlJson.routePath;
    let LocalMastersAddOnstableName = UrlJson.MastersAddOnstableName;

    let jVarLocalFetchUrl = `/${LocalroutePath}/${LocalMastersAddOnstableName}/AggrFuncs/Count`;
    let response = await fetch(jVarLocalFetchUrl);

    return await response;
};

export { StartFunc };


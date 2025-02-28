import { StartFunc as StartFuncFetchHeaders } from "./FetchHeaders/EntryFile.js";
import ConfigJson from "../../../../../Config.json" with { type: "json" };

let StartFunc = async ({ inRow }) => {
    let LocalPk = inRow.pk;
    let jVarLocalFetchHeaders = StartFuncFetchHeaders();

    let jVarLocalFetchUrl = `/${ConfigJson.routePath}/BranToFactDC/Alter/AsIs/${LocalPk}`;
    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaders);

    return await response;
};

export { StartFunc };


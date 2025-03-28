import UrlJson from './url.json' with {type: 'json'};

let StartFunc = ({ inResponseAsJson }) => {
    let LocalRowPk = inResponseAsJson;

    if (LocalFuncForSingleTable({ inResponseAsJson: LocalRowPk }) === false) {
        LocalFuncForAllTables({ inResponseAsJson: LocalRowPk });
    };
};

const LocalFuncForSingleTable = ({ inResponseAsJson }) => {
    let LocalRowPk = inResponseAsJson;

    if (window.location.pathname.endsWith(`/${UrlJson.PresentUrl}`)) {
        window.location.href = `${UrlJson.RedirectToUrl}?inResponseAsJson=${LocalRowPk}`;
        return true;
    };

    return false;
};

const LocalFuncForAllTables = ({ inResponseAsJson }) => {
    let LocalRowPk = inResponseAsJson;

    window.location.href = `${jVarGlobalTableName}${UrlJson.RedirectToUrl}?inResponseAsJson=${LocalRowPk}`;
};


export { StartFunc }
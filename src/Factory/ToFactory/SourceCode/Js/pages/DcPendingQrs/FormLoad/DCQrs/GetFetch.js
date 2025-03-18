import UrlJson from '../../Config.json' with {type: 'json'};

let StartFunc = async ({ inData }) => {
    let jVarLocalVoucherRef = inData.pk;
    let jVarLocalFactory = inData.Factory;

    let jVarLocalFetchUrl = `${UrlJson.GetQrurl}/${jVarLocalVoucherRef}/${jVarLocalFactory}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };
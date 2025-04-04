import UrlJson from '../../Config.json' with {type: 'json'};

let StartFunc = async ({ inData }) => {
    console.log(inData);
    
    let jVarLocalVoucherRef = inData.AsIs.pk;
    let jVarLocalFactory = inData.AsIs.Factory;

    let jVarLocalFetchUrl = `${UrlJson.GetQrurl}/${jVarLocalVoucherRef}/${jVarLocalFactory}`;
    let response = await fetch(jVarLocalFetchUrl);
    let data = await response.json();

    return await data;
};

export { StartFunc };
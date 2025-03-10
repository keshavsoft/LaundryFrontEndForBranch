import ConfigJson from '../Config.json' with {type: 'json'};

const StartFunc = ({ inItemSerial }) => {
    let jVarLocalStorageKey = ConfigJson.localStorageKeys.OrderKey;

    let JVarLocalFromStrogeAddOnData = localStorage.getItem(jVarLocalStorageKey);
    let jVarLocalData = JSON.parse(JVarLocalFromStrogeAddOnData);
    let jVarLocalItemSerial = inItemSerial;

    let jVarLocalAddOnsArray = Object.keys(jVarLocalData.AddOnData).map((key) => {
        return { ...jVarLocalData.AddOnData[key], "AddOnPK": key };
    });

    let jVarLocalFilterData = jVarLocalAddOnsArray.filter(e => e.AddOnItemSerial === jVarLocalItemSerial);

    return jVarLocalFilterData;
};

export { StartFunc };
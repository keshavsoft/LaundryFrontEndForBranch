import ConfigJson from '../../../../../Config.json' with {type: 'json'};

const StartFunc = () => {
    let jVarLocalKey = ConfigJson.localStorageKeys.AddOnsKey;
    let jVarLocalData = localStorage.getItem(jVarLocalKey);

    return JSON.parse(jVarLocalData);
};

export { StartFunc }
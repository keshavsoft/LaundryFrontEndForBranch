import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let formObject = { SendDc: true,SendDCDate : new Date()};

    KeysJson.body = JSON.stringify(formObject);

    return KeysJson;
};

export { StartFunc }
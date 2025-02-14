import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let formObject = { SendDc: true };

    KeysJson.body = JSON.stringify(formObject);

    return KeysJson;
};

export { StartFunc }
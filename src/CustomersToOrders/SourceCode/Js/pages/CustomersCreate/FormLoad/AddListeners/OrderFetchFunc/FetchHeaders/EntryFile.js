import KeysJson from './Keys.json' with {type: 'json'};

let StartFunc = () => {
    let jVarLocalFromDom = jFLocalCustomerNameInputId();
    let jVarLocalUserUuId = localStorage.getItem("UserUuId");

    KeysJson.body.inMobileNumber = jVarLocalFromDom;
    KeysJson.body.inUserUuId = jVarLocalUserUuId;

    KeysJson.body = JSON.stringify(KeysJson.body);

    return KeysJson;
};

let jFLocalCustomerNameInputId = () => {
    let jVarLocalCustomerNameInputId = 'Mobile'
    let jVarLocalHtmlId = document.getElementById(jVarLocalCustomerNameInputId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };
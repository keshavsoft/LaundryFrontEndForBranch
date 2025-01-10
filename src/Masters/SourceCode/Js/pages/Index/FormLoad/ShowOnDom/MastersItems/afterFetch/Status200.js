const StartFunc = (data) => {
    jFLocalToInputItemsId(data)
};

let jFLocalToInputItemsId = (inValue) => {
    let jVarLocalHtmlId = 'ItemsId';
    let jVarLocalItemsId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalItemsId === null === false) {
        jVarLocalItemsId.innerHTML = inValue;
    };
};

export { StartFunc };
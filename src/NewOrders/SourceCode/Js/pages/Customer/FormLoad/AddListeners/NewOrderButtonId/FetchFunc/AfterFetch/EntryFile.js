import ConfigJson from '../../../../../Config.json' with {type: 'json'};

let StartFunc = () => {
    // window.location = "AddItemsV1.html";
    window.location = ConfigJson.Urls.NewOrderButtonId.RedirectUrl['200Status'];
};

export { StartFunc };
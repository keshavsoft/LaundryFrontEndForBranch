import UrlJson from './url.json' with {type: 'json'};

let StartFunc = ({ inRow }) => {
    let LocalPk = inRow.pk;
    window.open(`./${UrlJson.RedirectToUrl}?DCNumber=${LocalPk}`, '_blank');
};

export { StartFunc };

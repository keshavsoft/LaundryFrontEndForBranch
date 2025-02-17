import UrlJson from './url.json' with {type: 'json'};

let StartFunc = ({ inRow }) => {
    let LocalPk = inRow.pk;
    $('#table').bootstrapTable('refresh');

    window.open(`./${UrlJson.RedirectToUrl}?DCNumber=${LocalPk}`, '_blank');
};

export { StartFunc };

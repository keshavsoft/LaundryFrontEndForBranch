let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = totalFormatter;
};

let jFLocalFooterFormatterFunc = (data) => {
    return ` <div class="input-group">
                                        <input type="text" class="form-control" id="TableFooterRateInputId"
                                            autocomplete="off" tabindex="-1" readonly>
                                        <div class="invalid-feedback">
                                            Please provide correct item.
                                        </div>
                                    </div>`;
};

function totalFormatter(data) {
    var field = this.field;
    let LocalTotal = data.map(function (row) {
        if (row[field] === undefined) {
            return 0;
        };
        return +row[field];
    }).reduce(function (sum, i) {
        return sum + i
    }, 0);

    return LocalTotal.toFixed(2);
};

export { StartFunc };
let StartFunc = ({ inFindColumn }) => {
    inFindColumn.footerFormatter = jFLocalFooterFormatterFunc;
};

const jFLocalFooterFormatterFunc = (value, row, index) => {
    return `  <select class="form-select" aria-label="Default select example"
                                        id="TableFooterItemServiceId">
                                    </select>`;
};

export { StartFunc };
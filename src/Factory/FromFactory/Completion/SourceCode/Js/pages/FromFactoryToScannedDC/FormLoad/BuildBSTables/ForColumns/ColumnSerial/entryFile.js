let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = jFGlobalSerialColumn;
};

function jFGlobalSerialColumn(value, row, index) {
    return index + 1;
};

export { StartFunc };
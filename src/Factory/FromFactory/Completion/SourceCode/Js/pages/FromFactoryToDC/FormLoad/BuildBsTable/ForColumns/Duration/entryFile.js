let StartFunc = ({ inFindColumn }) => {
    inFindColumn.formatter = DateFormatter;
};
function DateFormatter(value, row, index) {
    const timestamp1 = new Date(row.DateTime);
    const timestamp2 = new Date();
    const diff = timestamp2 - timestamp1;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    return `${days}days ${hours}hrs ${minutes}min`;
}
export { StartFunc };
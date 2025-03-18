let StartFunc = ({ inDataToShow }) => {
    let jVarLocalData = inDataToShow;

    var $table = $('#table');
    $table.bootstrapTable("load", jVarLocalData);
    LocalLoadFunc();

};
const LocalLoadFunc = () => {
    let localId = document.getElementById("SpinnerId");
    localId.style.display = "none";

}



export { StartFunc };
let StartFunc = (inData) => {
    let jVarLocalAsIs = inData.AsIs;
    console.log("jVarLocalAsIs:", jVarLocalAsIs);

    $("#RowCountModal").modal("show");

    var $table = $('#RowCountTable')

    $table.bootstrapTable("load", jVarLocalAsIs);
};

export { StartFunc };
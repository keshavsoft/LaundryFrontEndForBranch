let StartFunc = () => {
    var $table = $('#table');
console.log("jVarGlobalPresentViewData",jVarGlobalPresentViewData);

    $table.bootstrapTable("load", jVarGlobalPresentViewData);
};

export { StartFunc };
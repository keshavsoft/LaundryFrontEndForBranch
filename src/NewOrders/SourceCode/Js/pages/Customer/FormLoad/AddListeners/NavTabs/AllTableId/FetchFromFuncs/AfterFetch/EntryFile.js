let StartFunc = ({inData}) => {
  console.log("inData",inData);
  
  var $table = $("#AllTableId");

  $table.bootstrapTable("load", inData.JsonData);
};
export { StartFunc };

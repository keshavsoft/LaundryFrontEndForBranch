let StartFunc = ({inData}) => {
  console.log("inData",inData);
  
  var $table = $("#ThisWeekTableId");

  $table.bootstrapTable("load", inData.JsonData);
};
export { StartFunc };

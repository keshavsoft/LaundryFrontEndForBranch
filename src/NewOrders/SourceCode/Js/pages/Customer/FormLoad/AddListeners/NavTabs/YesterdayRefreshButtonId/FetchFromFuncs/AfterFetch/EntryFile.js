let StartFunc = ({inData}) => {
  console.log("inData",inData);
  
  var $table = $("#YesterdayTableId");

  $table.bootstrapTable("load", inData.JsonData);
};
export { StartFunc };

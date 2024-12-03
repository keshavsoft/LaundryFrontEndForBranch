import optionsJson from './options.json' with {type: 'json'};
import { StartFunc as onClickRow } from "./onClickRow/EntryFile.js";
import { StartFunc as queryParams } from "./queryParams/EntryFile.js";
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";
import { StartFunc as responseHandler } from "./responseHandler/EntryFile.js";
let jVarLocalBranchName = localStorage.getItem("BranchName");

const StartFunc = () => {
    var $table = $('#table');
    optionsJson.onClickRow = onClickRow;
    optionsJson.queryParams = queryParams;
    optionsJson.responseHandler = responseHandler;
    ForColumns({ inColumns: optionsJson.columns });

    optionsJson.url = optionsJson.url.replace("$BranchName", jVarLocalBranchName);

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };
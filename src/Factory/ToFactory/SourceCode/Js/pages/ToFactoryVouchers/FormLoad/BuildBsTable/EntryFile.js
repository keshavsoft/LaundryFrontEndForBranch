import optionsJson from './options.json' with {type: 'json'};
import UrlJson from './Url.json' with {type: 'json'};
import { StartFunc as StartFuncOnClickRowFunc } from "./onClickRow/EntryFile.js";
import { StartFunc as queryParams } from "./queryParams/EntryFile.js";
import { StartFunc as responseHandler } from "./responseHandler/EntryFile.js";
import { StartFunc as ForColumns } from "./ForColumns/EntryFile.js";

let jVarLocalBranchName = localStorage.getItem("BranchName");
const modifiedBranch = jVarLocalBranchName.replace("BranOrders", "");

const StartFunc = () => {
    var $table = $('#table');

    optionsJson.onClickRow = StartFuncOnClickRowFunc;
    optionsJson.responseHandler = responseHandler;
    optionsJson.queryParams = queryParams;

    optionsJson.url = `${UrlJson.url}/${modifiedBranch}`;

    ForColumns({ inColumns: optionsJson.columns });

    $table.bootstrapTable(optionsJson);
};

export { StartFunc };


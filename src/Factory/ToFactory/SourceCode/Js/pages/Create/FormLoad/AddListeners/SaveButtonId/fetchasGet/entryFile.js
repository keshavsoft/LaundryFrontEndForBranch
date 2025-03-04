import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as afterFetch } from './afterFetch/EntryFile.js';

const StartFunc = async () => {
    let localResponse = await StartFuncFetchFuncs();

    afterFetch({ inRowPk: localResponse });
};

export { StartFunc };

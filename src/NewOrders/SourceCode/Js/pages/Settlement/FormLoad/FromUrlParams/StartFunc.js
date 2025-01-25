const getUrlQueryParams = ({ inGetKey }) => new URLSearchParams(window.location.search).get(inGetKey);

const StartFunc = () => {
    const branchName = localStorage.getItem("BranchName");
    const orderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });

    if (!branchName) {
        Swal.fire({
            title: "BranchName!",
            text: "Not found in URL!",
            icon: "error"
        });
        return;
    }

    if (!orderNumber) {
        Swal.fire({
            title: "OrderNumber!",
            text: "Not found in URL!",
            icon: "error"
        });
        return;
    }
};

export { StartFunc };

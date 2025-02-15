import { StartFunc as StartFuncBranchScanAlter } from "./BranchScanAlter/EntryFile.js";

const StartFunc = (row, $element, field) => {
    if (field === "Send") {
        if (row.ItemDetails > 0) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Send to Factory"
            }).then((result) => {

                if (result.isConfirmed) {
                    StartFuncBranchScanAlter({ inRow: row })
                }
            });
        }
    }

};
export { StartFunc };
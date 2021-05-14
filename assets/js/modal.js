const alertModalObj = {
    init:() => {
        //this to get inline delete btn
        const generateDeleteModal = function(element) {
            return function curried_func(e) {
                let dataId = element.getAttribute("data-id");
                let dataUrl = element.getAttribute("data-url");
                const actualURL = dataUrl + "/" + dataId;

                modalBtnDelete.setAttribute("href", actualURL);
                modalBackground.classList.add("show");
                modalDelete.classList.add("show");
            }
        }
        //--------------------Variable Declaration------------------------
        const btnLogout = document.querySelector(".adminNav button")
        const btnDelete = document.querySelector(".deleteSelected");
        const btnDeleteInline = document.querySelectorAll(".btnDeleteInline");
        const modalBackground = document.querySelector(".alertModalContainer");
        const modalLogout = document.querySelector(".logoutAlert");
        const modalDelete = document.querySelector(".deleteAlert");
        const modalDeleteAll = document.querySelector(".deleteAlertAll");
        const modalBtnCancel = document.querySelectorAll(".alertModal div .cancelBtn");
        const modalBtnDelete = document.querySelector(".modalDeleteInline");

        //for preview
        const modalPreviewBackground = document.querySelector(".modalContainer");
        const modalPreview = document.querySelector(".modalPreview");
        const previewBtnCancel = document.querySelector(".pagination .btnContainer .cancel");
        const previewBtnImport = document.querySelector(".importBtn");
        const previewFileInput = document.querySelector(".input-file-hidden");
        const previewFormHidden = document.querySelector("#preview-form-hidden");
        
        //--------------------Event Listeners------------------------
        if(btnLogout != null){
            btnLogout.addEventListener("click", generateLogoutModal);
        }
        
        if(btnDelete != null){
            btnDelete.addEventListener("click", generateDeleteModalAll);
            btnDeleteInline.forEach(element => element.addEventListener("click", generateDeleteModal(element)));
        }

        if(modalPreviewBackground != null){
            previewBtnImport.addEventListener("click", generatePreviewModal);
            previewBtnCancel.addEventListener("click", refreshPage);
            previewFileInput.addEventListener("change", submitForm);
        }
        
        //--------------------functions------------------------
        modalBtnCancel.forEach(element => element.onclick = () => {
            modalBackground.classList.remove("show");
            modalDelete.classList.remove("show");
            modalDeleteAll.classList.remove("show");
            modalLogout.classList.remove("show");
        })

        function generateDeleteModal(){
            modalBackground.classList.add("show");
            modalDeleteAll.classList.add("show");
        }

        function generateLogoutModal(){
            modalBackground.classList.add("show");
            modalLogout.classList.add("show");
        }
<<<<<<< HEAD

=======
        function generatePreviewModal(){
            previewFileInput.click();
            /* modalPreviewBackground.classList.add("show"); */
        }
        function submitForm(){
            console.log(previewFormHidden);
            previewFormHidden.submit();
        }
        function refreshPage(){
            document.location.reload();
        }
>>>>>>> 3cbc09ed8dd8e2b1fb04d80ae75c2329f3cd6958
    }
}

export default alertModalObj
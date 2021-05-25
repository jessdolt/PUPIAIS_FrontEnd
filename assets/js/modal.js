const alertModalObj = {
    init:() => {
        //this to get inline delete btn
        const generateDeleteModal = function(element) {
            return function curried_func(e) {
                let dataId = element.getAttribute("data-id");
                let dataUrl = element.getAttribute("data-url");
                let actualURL;
                if(dataId){
                    actualURL = dataUrl + "/" + dataId;
                }
                else{
                    actualURL = dataUrl;
                }
                

                modalBtnDelete.setAttribute("href", actualURL);
                modalBackground.classList.add("show");
                modalDelete.classList.add("show");
            }
        }
        //--------------------Variable Declaration------------------------
        //for logout and delete in table
        const btnLogout = document.querySelector(".adminNav button")
        const btnDelete = document.querySelector(".deleteSelected");
        const btnDeleteInline = document.querySelectorAll(".btnDeleteInline");
        const modalBackground = document.querySelector(".alertModalContainer");
        const modalLogout = document.querySelector(".logoutAlert");
        const modalDelete = document.querySelector(".deleteAlert");
        const modalDeleteAll = document.querySelector(".deleteAlertAll");
        const modalBtnCancel = document.querySelectorAll(".alertModal div .cancelBtn");
        const modalBtnDelete = document.querySelector(".modalDeleteInline");

        //for user import preview
        const modalPreviewBackground = document.querySelector(".modalContainer");
        const modalPreview = document.querySelector(".modalPreview");
        const previewBtnCancel = document.querySelector(".pagination .btnContainer .cancel");
        const previewBtnImport = document.querySelector(".importBtn");
        const previewFileInput = document.querySelector(".input-file-hidden");
        const previewFormHidden = document.querySelector("#preview-form-hidden");

        //modal for questionair add question
        const newQuestBtn = document.querySelector(".addNewQuestion");
        const modalQuestionBg = document.querySelector(".addModalContainer");
        const questionBtnCancel = document.querySelector(".addModalContainer .btnContainer .cancel");
        //--------------------Event Listeners------------------------
        if(btnLogout){
            btnLogout.addEventListener("click", generateLogoutModal);
        }
        
        if(btnDelete){
            btnDelete.addEventListener("click", generateDeleteModalAll);
            
        }
        if(btnDeleteInline){
            btnDeleteInline.forEach(element => element.addEventListener("click", generateDeleteModal(element)));
        }

        if(modalPreviewBackground){
            previewBtnImport.addEventListener("click", generatePreviewModal);
            previewFileInput.addEventListener("change", submitForm);
        }
        if(newQuestBtn){
            newQuestBtn.addEventListener("click", generateAddQuestion);
            questionBtnCancel.addEventListener("click", cancelAddQuestion);
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
        }
        function submitForm(){
            previewFormHidden.submit();
        }
<<<<<<< HEAD
<<<<<<< HEAD
        function refreshPage(){
            document.location.reload();
        }
>>>>>>> 3cbc09ed8dd8e2b1fb04d80ae75c2329f3cd6958
=======
>>>>>>> 4f82ab0740f63ccb7de2b9d690200924ecf68315
=======
        function generateAddQuestion(){
            modalQuestionBg.classList.add("show")
        }
        function cancelAddQuestion(){
            modalQuestionBg.classList.remove("show");
        }
>>>>>>> 00eb4d0031597aa2be9496729db911ad8d2efa6f
    }
}

export default alertModalObj
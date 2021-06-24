const alertModalObj = {
    init:() => {
        let page = document.body.id;
        //both for alumni and Admin
        const optionBtnAlum = document.querySelector(".optionCon")
        const deletePostBtn = document.querySelector(".btnDeletePost")
        const bgModal = document.querySelector(".alertModalContainer")
        const alertDelete = document.querySelector(".deleteAlert")
        const canBtn = document.querySelector(".cancelBtn")
        //forum form
        const forumBg = document.querySelector(".modalConFilterNav")
        const forumModal = document.querySelector(".newCourse")
        const editPostBtn = document.querySelector(".btnEditPost")
        const modalDeleteForum = document.querySelector(".modalDeleteInline");
        const addPostBtn = document.querySelector(".newDis button")
        const xBtn = document.querySelector(".modalFilterNav > svg")
        //viewAlumReport
        const viewAlum = document.querySelectorAll(".viewAlumni")
        const alumModal = document.querySelector(".alum-rep")
        if(optionBtnAlum){
            optionBtnAlum.addEventListener("click", ()=>{
                optionBtnAlum.classList.toggle("active")
            })
        }
        if(deletePostBtn){
            deletePostBtn.addEventListener("click", ()=>{
                let dataId = deletePostBtn.getAttribute("data-id");
                    let dataUrl = deletePostBtn.getAttribute("data-url");
                    let actualURL;
                    if(dataId){
                        actualURL = dataUrl + "/" + dataId;
                    }
                    else{
                        actualURL = dataUrl;
                    }
                
                modalDeleteForum.setAttribute("href", actualURL);
                bgModal.classList.add("show")
                alertDelete.classList.add("show")
                document.body.classList.add('stop-scrolling')
            })
            editPostBtn.addEventListener("click",()=>{
                forumBg.classList.add("show")
                forumModal.classList.add("show")
                document.body.classList.add('stop-scrolling')
            })
        }
        if(addPostBtn){
            addPostBtn.addEventListener("click",()=>{
                forumBg.classList.add("show")
                forumModal.classList.add("show")
                document.body.classList.add('stop-scrolling')
            })
        }
        if(canBtn){
            canBtn.addEventListener("click",()=>{
                bgModal.classList.remove("show")
                alertDelete.classList.remove("show")
                document.body.classList.remove('stop-scrolling')
            })
        }
        if(xBtn){
            xBtn.addEventListener("click", ()=>{
                forumBg.classList.remove("show")
                forumModal.classList.remove("show")
                document.body.classList.remove('stop-scrolling')
            })
        }
        if(viewAlum){
            viewAlum.forEach(element => element.addEventListener('click',()=>{
                forumBg.classList.add("show")
                alumModal.classList.add("show")
                document.body.classList.add('stop-scrolling')
            }))
        }
        switch(page){
            case 'Alumni':
                const editProfileBtn = document.querySelector('[for="profile-pic-btn"]')
                const editPicModal = document.querySelector('.edit-pic-modal')
                const removePicBtn = document.querySelector('.edit-pic-modal button')
                
                if(editProfileBtn){
                    window.addEventListener('click',(e)=>{
                        let targetElem = e.target;
                    //click inside or the humburger
                    do{
                        if(targetElem == editPicModal || targetElem == editProfileBtn){
                            return;
                        }
                        targetElem = targetElem.parentNode;
                    } while(targetElem);
                    //click outside
                    editPicModal.classList.remove("show");
                    })
                    editProfileBtn.addEventListener('click', ()=>{
                        editPicModal.classList.toggle('show')
                    })
                    removePicBtn.addEventListener('click', ()=>{
                        editPicModal.classList.remove('show')
                    })
                }
                
                break;
            case 'Admin':
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
                            document.body.classList.add('stop-scrolling')
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
                    /* const modalPreviewBackground = document.querySelector(".modalContainer");
                    const modalPreview = document.querySelector(".modalPreview");
                    const previewBtnCancel = document.querySelector(".pagination .btnContainer .cancel");
                    const previewBtnImport = document.querySelector(".importBtn");
                    const previewFileInput = document.querySelector(".input-file-hidden");
                    const previewFormHidden = document.querySelector("#preview-form-hidden"); */

                    //forumView for admin
                    /* const optionBtnAdmin = document.querySelector(".optionCon") */

                    //modal for questionair add question
                    const btnDeleteAccount = document.querySelectorAll(".btnDeleteAccount")
                    const deleteAccountForm = document.querySelector(".delete-acc-form")

                    //modal for alert success
                    const successAlert = document.querySelector('.successAlert')
                    if(successAlert){
                        window.addEventListener('load', ()=>{
                            setTimeout(()=>{
                                successAlert.parentNode.style.opacity="0"
                                setTimeout(()=>{
                                    successAlert.parentNode.classList.remove('show')
                                    successAlert.classList.remove('show')
                                },300)
                            },2000)
                            
                        })
                    }
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

                    /* if(modalPreviewBackground){
                        previewBtnImport.addEventListener("click", generatePreviewModal);
                        previewFileInput.addEventListener("change", submitForm);
                    } */
                    if(btnDeleteAccount){
                        btnDeleteAccount.forEach(element => element.addEventListener("click",()=>{
                            let dataId = element.getAttribute("data-id");
                            let dataUrl = element.getAttribute("data-url");
                            let actualURL;
                            if(dataId){
                                actualURL = dataUrl + "/" + dataId;
                            }
                            else{
                                actualURL = dataUrl;
                            }
                            deleteAccountForm.setAttribute("action", actualURL);
                            modalBackground.classList.add("show");
                            modalDelete.classList.add("show");
                            document.body.classList.add('stop-scrolling')
                        }))
                    }

                    /* if(optionBtnAdmin){
                        optionBtnAdmin.addEventListener("click", ()=>{
                            optionBtnAdmin.classList.toggle("active")
                        })
                    } */

                    //--------------------functions------------------------
                    modalBtnCancel.forEach(element => element.onclick = () => {
                        modalBackground.classList.remove("show");
                        modalDelete.classList.remove("show");
                        if(modalDeleteAll){
                            modalDeleteAll.classList.remove("show");
                            document.body.classList.remove('stop-scrolling')
                        }
                        if(modalLogout){
                            modalLogout.classList.remove("show"); 
                            document.body.classList.remove('stop-scrolling')
                        }
                    })

                    function generateDeleteModalAll(){
                        modalBackground.classList.add("show");
                        modalDeleteAll.classList.add("show");
                        document.body.classList.add('stop-scrolling')
                    }

                    function generateLogoutModal(){
                        modalBackground.classList.add("show");
                        modalLogout.classList.add("show");
                        document.body.classList.add('stop-scrolling')
                    }
                    /* function generatePreviewModal(){
                        previewFileInput.click();
                    } */
                    /* function submitForm(){
                        previewFormHidden.submit();
                    } */
                    function refreshPage(){
                        document.location.reload();
                    }
                    
                    
                break;
        }
        
    }
}

export default alertModalObj
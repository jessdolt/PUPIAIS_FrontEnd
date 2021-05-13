const alertModalObj = {
    init:() => {
        //--------------------Variable Declaration------------------------
        const btnLogout = document.querySelector(".adminNav button")
        const btnDelete = document.querySelector(".deleteSelected");
        const btnDeleteInline = document.querySelector(".btnDeleteInline");
        const modalBackground = document.querySelector(".alertModalContainer");
        const modalLogout = document.querySelector(".logoutAlert");
        const modalDelete = document.querySelector(".deleteAlert");
        const modalBtnCancel = document.querySelectorAll(".alertModal div button");

        //--------------------Event Listeners------------------------
        btnLogout.addEventListener("click", generateLogoutModal);
        btnDelete.addEventListener("click", generateDeleteModal);
        //btnDeleteInline.addEventListener("click", generateDeleteModal);

        //--------------------functions------------------------
        modalBtnCancel.forEach(element => element.onclick = () => {
            modalBackground.classList.remove("show");
            modalDelete.classList.remove("show");
            modalBackground.classList.remove("show");
            modalLogout.classList.remove("show");
        })

        function generateDeleteModal(){
            modalBackground.classList.add("show");
            modalDelete.classList.add("show");
        }

        function generateLogoutModal(){
            modalBackground.classList.add("show");
            modalLogout.classList.add("show");
        }

    }
}

export default alertModalObj
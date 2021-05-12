const alertModalObj = {
    init:() => {
        //--------------------Variable Declaration------------------------
        const body = document.querySelector("body");
        const btnLogout = document.querySelector(".adminNav button")
        const btnDelete = document.querySelector(".deleteSelected");
        const btnDeleteInline = document.querySelector(".btnDeleteInline");
        //--------------------Event Listeners------------------------
        btnLogout.addEventListener("click", generateModal);
        btnDelete.addEventListener("click", generateModal);
        btnDeleteInline.addEventListener("click", generateModal);
        //--------------------functions------------------------
        function generateModal(e){
            let targetElem = e.target;
            const modalBackground = document.createElement("div");
            const modal = document.createElement("div");
            const modalSvg = document.createElement("svg");
            const modalHeader = document.createElement("h2");
            const modalPara = document.createElement("p");
            const modalBtnContainer = document.createElement("div");
            const modalBtnCancel = document.createElement("button");
            const modalBtnDelete = document.createElement("button");

            modalBackground.classList.add("alertModalContainer", "show");
            do{
                if(targetElem == btnDelete || targetElem == btnDeleteInline){
                    modal.classList.add("alertModal","deleteAlert");
                    modalHeader.textContent = "Are you sure?";
                    modalBtnDelete.textContent = "Yes! Delete";
                }
                else if(targetElem == btnLogout){
                    modal.classList.add("alertModal","logoutAlert");
                    modalHeader.textContent = "Are you leaving?";
                    modalBtnDelete.textContent = "Logout";
                }
                targetElem = targetElem.parentNode;
            }while(targetElem);
            
            modalPara.textContent = "This will delete all the data selected and cannot be undone!";
            modalBtnCancel.textContent = "Cancel";

            modalBackground.appendChild(modal);
            modal.appendChild(modalSvg);
            modal.appendChild(modalHeader);
            modal.appendChild(modalPara);
            modal.appendChild(modalBtnContainer);
            modalBtnContainer.appendChild(modalBtnCancel);
            modalBtnContainer.appendChild(modalBtnDelete);

            modalBtnCancel.onclick = () => {
                modalBackground.remove();
            }

            body.appendChild(modalBackground);
        }

    }
}

export default alertModalObj
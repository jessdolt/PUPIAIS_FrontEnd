const table = {
    init:() => {
        let page = document.body.id;
        switch(page){
            case 'Alumni':
                //--------------------Variable Declaration------------------------
                
                break;
            case 'Admin':
                //--------------------Variable Declaration------------------------
                //variables for inline option btn
                const optionBtn = document.querySelectorAll(".optionSpan");
                //variables for checkbox selection
                const btnSelectAll = document.querySelector(".selectAll");
                const btnDelete = document.querySelector(".deleteSelected");
                const checkbox = document.querySelectorAll('tr input[type="checkbox"]');
                //--------------------Event Listeners------------------------
                //Listeners for inline option btn
                optionBtn.forEach(element => element.addEventListener("click", toggleOptions));
                window.addEventListener("click", closeOptionModal);
                //Listeners for checkbox selection
                if(btnSelectAll != null){
                    btnSelectAll.addEventListener("click", selectAll);
                }
                checkbox.forEach(element => element.addEventListener("click", select));
                
                //--------------------functions------------------------
                //functions for inline option btn
                function toggleOptions(e){
                    const isOpen = e.target.classList.contains("active");
                    if(isOpen){
                        e.target.classList.remove("active")
                    }
                    else{
                        optionBtn.forEach(element => element.classList.remove("active"));
                        e.target.classList.add("active")
                    }
                }
                function closeOptionModal(e){
                    let targetElem = e.target;
                    //click inside
                    if(targetElem.classList.contains("active")){
                        
                    }
                    else{
                        optionBtn.forEach(element => element.classList.remove("active"));
                    }
                }
                //functions for checkbox selection
                function select(){
                    let count = 0;
                    checkbox.forEach(element => {
                        if(element.checked){
                            count++;
                            btnDelete.classList.add("visible");
                        }
                        else if(count == 0){
                            btnDelete.classList.remove("visible");
                        }
                        });
                    }
                
                function selectAll(){
                    let count = 0;
                    checkbox.forEach(element => {
                        if(element.checked){
                            count++;
                            if(count == checkbox.length){
                                checkbox.forEach(element => element.click());
                                btnDelete.classList.remove("visible")
                            }
                        }
                        else{
                            element.click()
                            btnDelete.classList.add("visible")
                        }
                    });
                }

                /* function showDeleteAlert(){
                    alertModal.classList.add("show");
                }
                
                function removeAlertModal(){
                    alertModal.classList.remove("show");
                } */
                break;
            default:
                
        }
    }
}

export default table
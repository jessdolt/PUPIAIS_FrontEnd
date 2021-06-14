const inputUtil = {
    init:() => {
        //--------------------Variable Declaration------------------------
        //verification
        const codeTextBox = document.querySelector("#verification-code");
        //userAdd
        const batchComboBox = document.querySelector("#batch-id");
        const studentIdBox = document.querySelector("#student-id");
        //contentEditable
        const altTextArea = document.querySelectorAll('[role="textbox"]');
        //manage
        const editBtnManageAcc = document.querySelector('.managePage .btn-con .edit');
        const cancelBtnManageAcc = document.querySelector('.managePage .btn-con .cancel');
        const cardCon = document.querySelector('.managePage .card-con');
        const inputs = document.querySelectorAll('.managePage .card-con #edit-form input');
        //addInfo
        const currentStat = document.querySelector('#current-status')

        //--------------------Event Listeners------------------------
        //for verification code to fill the box
        if(codeTextBox){
            codeTextBox.addEventListener("input",(e) => {
                let codeTexField = e.target;
                if(codeTexField.value.length > codeTexField.maxLength - 1){
                    codeTexField.value = codeTexField.value.slice(0, codeTexField.maxLength)
                    const moveToLeft = setInterval(function(){
                        if(codeTexField.scrollLeft > 0){
                            codeTexField.scrollLeft = "0px";
                        }
                        else{
                            clearInterval(moveToLeft)
                        }
                    }, 10);
                    
                }
            })
        }
        if(batchComboBox){
            batchComboBox.addEventListener("change", setStudentId)
        }

        altTextArea.forEach(element => element.addEventListener("input",(event)=>{
            if(event.key != 'Backspace'){
                let charValue = event.target.textContent
                let charSize = charValue.length
                let maxSize = event.target.attributes.maxLength.value
                console.log()
                if(charSize >= maxSize){
                    event.preventDefault()
                    event.target.textContent = charValue.slice(0,maxSize)
                    /* this code below just to make the cursor stay at the end
                    contentEditable when it reach the limit of characters allowed */
                    let range = document.createRange()
                    let selection = window.getSelection()
                    range.selectNodeContents(event.target)
                    range.collapse(false)
                    selection.removeAllRanges();
                    selection.addRange(range)
                }
                /* console.log(charSize) */
            }
        }))

        if(editBtnManageAcc){
            editBtnManageAcc.addEventListener("click", ()=>{
                cardCon.classList.add('active')
                inputs.forEach(element => {
                    element.removeAttribute('readonly')
                })
            })
            cancelBtnManageAcc.addEventListener("click", ()=>{
                cardCon.classList.remove('active')
                inputs.forEach(element => {
                    element.setAttribute('readonly','true')
                    document.location.reload();
                })
            })
        }
        if(currentStat){
            window.addEventListener('load', setInputFields)
            currentStat.addEventListener('change',setInputFields)
        }
        //--------------------functions------------------------

        function setStudentId(e){
            try{
                let selectedBatch = e.target.selectedOptions[0].attributes["data-batch"].value;
                
                studentIdBox.value = selectedBatch - 3 + "-";
            }
            catch{
                studentIdBox.value = "";
            }
        }

        function setInputFields(e){
            /* const parentCon = e.target.parentNode.parentNode.parentNode */
            const allInput = document.querySelectorAll('input')
            console.log(currentStat.value)
            if(currentStat.value == 'student' || currentStat.value == 'unemployed')
            {
                allInput.forEach(element=>{
                    if(element.id == 'grad-date' ||
                    element.id == "first-emp-date"){
                        
                    }
                    else if(element.id == 'course-id'){
                        element.setAttribute("readonly", true)
                    }
                    else if(element.id == 'news-image-input'){
                        element.setAttribute("disabled", true)
                        element.parentNode.style.display = 'none'
                    }
                    else if(element.type == 'radio'){
                        element.setAttribute("disabled", true)
                        element.parentNode.parentNode.style.display = 'none'
                    }
                    else{
                        element.setAttribute("readonly", true)
                        element.value = ""
                    }
                })
            }
            else{
                allInput.forEach(element=>{
                    if(element.id == 'course-id'){
                        
                    }
                    else if(element.id == 'news-image-input'){
                        element.removeAttribute("disabled")
                        element.parentNode.style.display = 'block'
                    }
                    else if(element.type == 'radio'){
                        element.removeAttribute("disabled")
                        element.parentNode.parentNode.style.display = 'block'
                    }
                    else{
                        element.removeAttribute("readonly")
                    }
                })
            }
            
        }
    }
}

export default inputUtil
const inputUtil = {
    init:() => {
        //--------------------Variable Declaration------------------------
        const codeTextBox = document.querySelector("#verification-code");
        const batchComboBox = document.querySelector("#batch-id");
        const studentIdBox = document.querySelector("#student-id");

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
            batchComboBox.addEventListener("click", setStudentId)
        }
        //--------------------functions------------------------

        function setStudentId(){
            studentIdBox.value = batchComboBox.value - 4;
        }
    }
}

export default inputUtil
const inputUtil = {
    init:() => {
        //--------------------Variable Declaration------------------------
        const codeTextBox = document.querySelector("#verification-code");
        //--------------------Event Listeners------------------------
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
                        console.log("kapow")
                    }, 10);
                    
                }
            })
        }
        //--------------------functions------------------------
    }
}

export default inputUtil
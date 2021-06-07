const forum = {
    init:() => {
        /* const replyBtn = document.querySelectorAll(".reply") */
        const cancelReply = document.querySelectorAll(".btn-con2 > .cancel")
        /* const submitReply = document.querySelectorAll(".btn-con2 > .submit-reply") */

        if(cancelReply){
            /* replyBtn.forEach(element => element.addEventListener("click", ()=>{
                let parentli = element.parentElement.parentElement.parentElement
                parentli.classList.add("active")
            })) */

            cancelReply.forEach(element => element.addEventListener("click", ()=>{
                let parentli = element.parentElement.parentElement.parentElement
                parentli.classList.remove("active")
            }))

            /* submitReply.forEach(element => element.addEventListener("click", ()=>{
                let parentli = element.parentElement.parentElement.parentElement
                parentli.classList.remove("active")
            })) */
        }
    }
}

export default forum
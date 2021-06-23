const userSurvey = {
    init:() => {
        const surveyLink = document.querySelectorAll('.googleForm a')
        
        if(surveyLink){
            surveyLink.forEach(element=>{
                element.addEventListener('click', ()=>{
                    let checkBox = element.previousElementSibling.children[0]
                    let btnDone = element.nextElementSibling
                    checkBox.disabled = false
                    checkBox.addEventListener('click', ()=>{
                        if(checkBox.checked){
                            btnDone.style.display = "block"
                            element.style.display = "none"
                        }
                    })
                })
            })
        }
    }
}
export default userSurvey

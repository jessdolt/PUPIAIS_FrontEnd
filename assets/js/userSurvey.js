const userSurvey = {
    init:() => {
        const surveyLink = document.querySelectorAll('.googleForm a')
        
        if(surveyLink){
            surveyLink.forEach(element=>{
                element.addEventListener('click', ()=>{
                    let checkBox = element.previousElementSibling.children[0]
                    checkBox.disabled = false
                    checkBox.addEventListener('click', ()=>{
                        if(checkBox.checked){
                            element.textContent = "OK"
                        }
                    })
                })
            })
        }
    }
}
export default userSurvey

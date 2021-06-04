const card = {
    init:() => {
        //variable----------------------------------------------
        const svg = document.querySelectorAll(".card-svg")
        let colorChoices = ["#C5C5C5","#DCDCDC","#9B9B9B"]
        //alumniJobPage
        const archiveFil = document.querySelector(".card-filter")
        const archiveCon = document.querySelector(".archive")
        
        //functions----------------------------------------------
        if(svg){
            svg.forEach(element => {
                const listOfVector = element.children
                //Fill array with color
                if(colorChoices.length == 0){
                    colorChoices = ["#C5C5C5","#DCDCDC","#9B9B9B"]
                }
                //------------------------------------------------
                //loop through every vector
                for(let i=0;i<listOfVector.length;i++){
                   const selectedColor = rand(colorChoices)
                    listOfVector[i].style.fill = selectedColor
                }
                //------------------------------------------------
            })
            //select a random color from the given array and delete the one selected
            function rand(colorChoices){
                let colorIndex = Math.floor(Math.random() * colorChoices.length)
                const selectedColor = colorChoices[colorIndex]
                let remove = colorChoices.splice(colorIndex, 1)
                return selectedColor
            }
        }
        if(archiveFil){
            archiveFil.addEventListener("click",()=>{
                archiveFil.classList.add("active")
                archiveCon.style.overflowY = "auto"
            })
        }
        
    }
}

export default card
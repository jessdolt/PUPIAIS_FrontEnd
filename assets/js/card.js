const card = {
    init:() => {
        const svg = document.querySelectorAll(".card-svg")
        let colorChoices = ["#C5C5C5","#DCDCDC","#9B9B9B"]
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
        
    }
}

export default card
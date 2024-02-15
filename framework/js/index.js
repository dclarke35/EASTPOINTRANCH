const mediaQuery = window.matchMedia('(min-width: 1100px)')
const getMainSection = document.querySelector('#main-section')
const getParaToWrap = document.querySelector('#main-paragraphs')
const getCardsToWrap = document.querySelector('#cards')
let getScreenWidth = screen.width

function addDivComputerWidth() {
    // Check if the media query is true
        const wrapperDiv = document.createElement('div')
        // Then log the following message to the console       
        getMainSection.insertBefore(wrapperDiv, getParaToWrap)
        wrapperDiv.appendChild(getParaToWrap)
        wrapperDiv.appendChild(getCardsToWrap)
        
        wrapperDiv.classList.add('main-div-added')
        wrapperDiv.id = "main-div-added"
}

if(getScreenWidth >= 1100){
    addDivComputerWidth()
}

addEventListener('resize', removeDivComputerWidth)
function removeDivComputerWidth(e) {
    getScreenWidth = screen.width
    const getMainDivAdded = document.querySelector('#main-div-added')
    if(getScreenWidth < 1100){
        if(getMainDivAdded != null){
            getMainSection.appendChild(getParaToWrap)
            getMainSection.appendChild(getCardsToWrap)
            getMainDivAdded.remove()
        }
    }
    if(getScreenWidth >= 1100){
        if(getMainDivAdded === null)
        addDivComputerWidth()
    }

}

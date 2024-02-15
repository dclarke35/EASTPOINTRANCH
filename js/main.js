const btn = document.querySelector('.toggle-btn')

btn.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('show-nav')
});



function adjContainerHeight () {
    const getContainer = document.querySelector('main').children[0]
    const getContainerSection = document.querySelector('main').children[0].children[0]
    const getFooter = document.querySelector('footer')
    const getHeader = document.querySelector('header')
    let screenHeight = self.innerHeight
    let headerHeight = getHeader.offsetHeight
    let footerHeight = getFooter.offsetHeight
    let containerPaddingTop = parseInt(document.defaultView.getComputedStyle(getContainer, "").getPropertyValue('padding-top'))
    let containerPaddingBottom = parseInt(document.defaultView.getComputedStyle(getContainer, "").getPropertyValue('padding-bottom'))
    let containerHeight = getContainer.offsetHeight
    let containerSectionHeight = getContainerSection.offsetHeight
    let minContainerHeight = (screenHeight - footerHeight)
    let containerPadding = (containerPaddingTop + containerPaddingBottom)
    let maxSectionHeight = (minContainerHeight - containerPadding)
    console.log(footerHeight)
    console.log(screenHeight)
    if(containerHeight <= minContainerHeight && containerSectionHeight < maxSectionHeight){

         getContainer.style.height = `${minContainerHeight}px`
    } else{
        getContainer.style.height = "auto"
    }

}

adjContainerHeight()


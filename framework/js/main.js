const btn = document.querySelector('.toggle-btn')

btn.addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('show-nav')
});

const getContainer = document.querySelector('main').children[0]
const getFooter = document.querySelector('footer')
console.log(getContainer)

function adjContainerHeight () {
    const screenHeight = screen.height
    const footerHeight = getFooter.offsetHeight
    const containerHeight = getContainer.offsetHeight
    const minContainerHeight = (screenHeight - footerHeight)
    console.log(minContainerHeight)
    console.log(containerHeight)

    if(containerHeight < minContainerHeight){

         getContainer.style.height = `${minContainerHeight}px`
    }

}

adjContainerHeight()

const getRSVP = document.querySelector('#rsvp-form')
const getAttending = document.querySelector('#attending')
const getNotAttending = document.querySelector('#not-attending')
const getNumOfGuests = document.querySelector('#num-of-guests')
const getNumOfGuestsInput = document.querySelector('#num-of-guests-input')
const getGuestList = document.querySelector('#guest-list')
const getWeddingSong = document.querySelector('#wedding-song')


let numOfGuests = 0
let hiddenGuestListInputs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

getAttending.addEventListener("change", (e)=>{
    getNumOfGuests.classList.remove('hidden')
    getWeddingSong.classList.remove('hidden')
    numOfGuests = 0
    getNumOfGuestsInput.value = null
    hideGuestListInputs(numOfGuests)
})

getNotAttending.addEventListener("change", (e)=>{
    getNumOfGuests.classList.add('hidden')
    getGuestList.classList.remove('hidden')
    getWeddingSong.classList.add('hidden')

    numOfGuests = 2

    showGuestListInputs(numOfGuests)
    hideGuestListInputs(numOfGuests)
})

getNumOfGuestsInput.addEventListener("blur", (e)=>{
    getGuestList.classList.remove('hidden')
    
    numOfGuests = getNumOfGuestsInput.value
    if(getNumOfGuestsInput.value > 10){
        numOfGuests = 10
        console.log(getNumOfGuests.children[1])
        getNumOfGuests.children[1].classList.remove('error-hidden')
        getNumOfGuests.children[2].classList.remove('hidden')
    }

    showGuestListInputs(numOfGuests)
    hideGuestListInputs(numOfGuests)
    getContainer.style.height = "auto"
})

getNumOfGuestsInput.addEventListener("focus", (e)=>{
    getNumOfGuests.children[2].classList.add('hidden')
    getNumOfGuests.children[1].classList.add('error-hidden')
})

function createGuestListArray(N) {
    let newArr = [];
    for (let i = 0; i <= N-1; i++) {
        newArr.push(i);
    }
    return newArr;
}

function createHiddenGuestListArray(N) {
    let newArr = [];
    let g = Number(N)
    for (let i = g; i < 10; i++) {
        newArr.push(i);
    }
    return newArr;
}

function showGuestListInputs(numOfGuests){
    let guestListInputs = createGuestListArray(numOfGuests)
    guestListInputs.forEach(element => {
        getGuestList.children[element].classList.remove('hidden')
    });
}

function hideGuestListInputs(numOfGuests){
    hiddenGuestListInputs = createHiddenGuestListArray(numOfGuests)
    hiddenGuestListInputs.forEach(element => {
        getGuestList.children[element].classList.add('hidden')
    });
}

getRSVP.addEventListener("submit", onHandleSubmit)
function onHandleSubmit (e) {
    e.preventDefault()
}




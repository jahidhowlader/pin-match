function getPin() {
    const pinNumber = parseInt(Math.random() * 10000)
    const pinNumberString = pinNumber + ''

    if (pinNumberString.length === 4) {
        return pinNumber
    } else {
        return getPin()
    }
}

function getElementByIdName(elemenId) {
    return document.getElementById(elemenId)
}

document.getElementById('pin-generate').addEventListener('click', function () {
    const getPinNumber = getPin()

    const genarateInputField = getElementByIdName('genarate-input-field')
    genarateInputField.value = getPinNumber
})

document.getElementById('calculate-number').addEventListener('click', function (event) {
    const calculateInputField = getElementByIdName('calculate-input-field')
    const calculateNumber = event.target.innerText

    if (isNaN(calculateNumber)) {
        if (calculateNumber === 'C') {
            calculateInputField.value = ''
        } else if (calculateNumber === '<') {
            const updateInputField = calculateInputField.value
            calculateInputField.value = updateInputField.slice(0, updateInputField.length - 1)
        }
    } else {
        calculateInputField.value = calculateInputField.value + calculateNumber
    }
})

function alertAction(element1, element2){
    element1.style.display = 'block';
    element2.style.display = 'none'
}

document.getElementById('pin-match').addEventListener('click', function () {
    const genarateInput = getElementByIdName('genarate-input-field')
    const calculateInput = getElementByIdName('calculate-input-field')
    const successAlert = getElementByIdName('success')
    const incorrectAlert = getElementByIdName('incorrect')

    if (genarateInput.value === '' && calculateInput.value === '') {
        return alert('Your Input is invalid')

    } else if (genarateInput.value === calculateInput.value) {
        genarateInput.value = ''
        calculateInput.value = ''
        alertAction(successAlert, incorrectAlert)
    } else {
        alertAction(incorrectAlert, successAlert)
    }
})
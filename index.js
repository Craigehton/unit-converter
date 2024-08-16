const convertBtn = document.getElementById("convert-button")
const inputEl = document.getElementById("input")
const lengthEl = document.getElementById("length-el")
const lengthEl2 = document.getElementById("length-el2")
const lengthEl3 = document.getElementById("length-el3")

const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
    
    lengthEl2.textContent = `${baseValue} liters = ${(baseValue / 3.785).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue * 3.785).toFixed(3)} liters`
    
    lengthEl3.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos`
})
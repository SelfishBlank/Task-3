// ======= PAGE 2 ===========
// ==========================

// https://v6.exchangerate-api.com/v6/9cc35ba2064eee36da30f466/latest/USD

let USD = document.querySelector('.USD')
let KZT = document.querySelector('.KZT')
let RUB = document.querySelector('.RUB')
let MXN = document.querySelector('.MXN')
let MYR = document.querySelector('.MYR')
let NOK = document.querySelector('.NOK')
let NZD = document.querySelector('.NZD')
let PAB = document.querySelector('.PAB')
let PEN = document.querySelector('.PEN')
let PHP = document.querySelector('.PHP')
let PKR = document.querySelector('.PKR')

console.log(KZT.textContent)



let rate = document.getElementById('main_rate')

rate.addEventListener('change', calculate)



function calculate(){
    let rateVL = rate.value
    fetch(`https://v6.exchangerate-api.com/v6/9cc35ba2064eee36da30f466/latest/${rateVL}`)
    .then(data => data.json())
    .then(backup => {
        // console.log(backup.conversion_rates.KZT)
        USD.textContent = `${backup.conversion_rates.USD}  USD`
        KZT.textContent = `${backup.conversion_rates.KZT}  KZT`
        RUB.textContent = `${backup.conversion_rates.RUB}  RUB`
        MXN.textContent = `${backup.conversion_rates.MXN}  MXN`
        MYR.textContent = `${backup.conversion_rates.MYR}  MYR`
        NOK.textContent = `${backup.conversion_rates.NOK}  NOK`
        NZD.textContent = `${backup.conversion_rates.NZD}  NZD`
        PAB.textContent = `${backup.conversion_rates.PAB}  PAB`
        PEN.textContent = `${backup.conversion_rates.PEN}  PEN`
        PHP.textContent = `${backup.conversion_rates.PHP}  PHP`
        PKR.textContent = `${backup.conversion_rates.PKR}  PKR`
    })
}

document.addEventListener("DOMContentLoaded", function() {
    calculate()
});
const currencyEl_one = document.getElementById('currency-one')
const currencyEl_two = document.getElementById('currency-two')
const amountEl_one = document.getElementById('amount-one')
const amountEl_two = document.getElementById('amount-two')
const img = document.querySelector('.money-img')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

let i = 0
setInterval(() => {
    i += 360
    img.style.transform = 'rotate(' + i + 'deg)'
    img.style.transition = 'transform 2s'
    if(i == 3600){
        i = 0
    }
    console.log(i)
}, 7000);

// https://v6.exchangerate-api.com/v6/9cc35ba2064eee36da30f466/latest/USD

function calculate(){
    img.dataset.swift = 'true'

    const currency_one = currencyEl_one.value
    const currency_two = currencyEl_two.value

    fetch(`https://v6.exchangerate-api.com/v6/9cc35ba2064eee36da30f466/latest/${currency_one}`)
        .then(res => res.json())
        .then((data) => {
            const rate = data.conversion_rates[currency_two]
            rateEl.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`
            amountEl_two.value = (amountEl_one.value * rate).toFixed(3)
        });
}


currencyEl_one.addEventListener('change', calculate);
currencyEl_two.addEventListener('change', calculate);
amountEl_one.addEventListener('input', calculate)
amountEl_two.addEventListener('input', calculate)

swap.addEventListener('click', () => {
    const temp = currencyEl_one.value
    currencyEl_one.value = currencyEl_two.value;
    currencyEl_two.value = temp
    calculate()
})

calculate()


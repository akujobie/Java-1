
const investBtn = document.getElementById('invest')
const capitalDeposit = document.getElementById('amount')
const profit = document.getElementById('interest')
const vat = document.getElementById('deduct')
const total = document.getElementById('result')
const netPro = document.getElementById('netpro')

investBtn.onclick=() =>{
const dep = prompt('kindly enter your investment amount here')
//below I declared a variable r, v, and t to calculate the interest of 10%, VAT Capital and total respectively
    const r = (dep * 10)/100
    const v = (dep * 2)/100
    const t =+ dep  + r - v
    const n = r - v

    
    capitalDeposit.innerHTML= `Your Capital Deposit is N${dep}`
    profit.innerHTML= `Your profit is N${r}`
    vat.innerHTML= `Your value added tax is N${v}`
    total.innerHTML = `Your total after VAT deduction is N${t}`
    netPro.innerHTML = `Your net profit is N${n}`

};
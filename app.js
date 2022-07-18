let pedramBalance = 35
let saraBalance = 6

let mobilePrice = 11
const SARA_PROMISE = mobilePrice
const off = 0.05

let letTravel = false
let day // 1 - 31

function canITravel(balance) {
    if (balance > 30) {
        return true
    } else {
        return false
    }
}

function buyMobile(amount) {
    mobilePrice = offFestival(25, mobilePrice)
    if (amount >= mobilePrice) {
       saraBalance = saraBalance - mobilePrice
    }
    if (mobilePrice < SARA_PROMISE) {
        saraBalance = saraBalance - (SARA_PROMISE - mobilePrice)
        pedramBalance = pedramBalance + (SARA_PROMISE - mobilePrice)
    }
}

function borrow(amount) {
    pedramBalance = pedramBalance - amount
    saraBalance = saraBalance + amount
}

function offFestival(day, amount) {
    if (day <= 30) {
       amount = amount - (off * amount)
    }
    return amount
}

borrow(5)
buyMobile(saraBalance)

const canPedramTravel = canITravel(pedramBalance)

console.log(saraBalance)
console.log(canPedramTravel)


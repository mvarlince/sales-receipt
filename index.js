// create a sales receipt summary given subtotal and taxRate

// const salesReceiptItems = {
//     items : []
// }

function calculateSalesTax(subtotal, taxRate){
    return ((subtotal * taxRate))
}

//.toFixed(2)

//CONST = dont let it change while it is running
//screaming snake case
const TAX_RATE = .07    // For Palm Beach County, FL, US
const customerSubtotal = 17.25

//Calculate all the stuffs:
const customerTaxTotal = calculateSalesTax(customerSubtotal, TAX_RATE)
const customerTotal = customerSubtotal + customerTaxTotal

console.log(`Subtotal       $${customerSubtotal}`)
console.log(`Tax            $ ${customerTaxTotal.toFixed(2)}`)
console.log(`-----------------------`)
console.log(`Total          $${customerTotal.toFixed(2)}`)


// if using code more than once, create a function 
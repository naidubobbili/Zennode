// Catalog - Product Name: Product Price
const A = 20, B = 40, C = 50;

// Inputs
const QA = parseInt(prompt("How many Quantity of \"Product A\" You Want ?"));
const QAF = parseInt(prompt("How many \"Product A\" with Gift Wrappers You Want?"));
const QB = parseInt(prompt("How many Quantity of \"Product B\" You Want ?"));
const QBF = parseInt(prompt("How many \"Product B\" with Gift Wrappers You Want ?"));
const QC = parseInt(prompt("How many Quantity of \"Product C\" You Want ?"));
const QCF = parseInt(prompt("How many  \"Product C\" with Gift Wrappers You Want ?"));

// Bill
const separatorLine = "___________________________________";

// Display Table
console.log("Product Name - Quantity - Total Amount");
console.log(separatorLine);
console.log(`Product A - ${QA} - $${QA * A}`);
console.log(`Product B - ${QB} - $${QB * B}`);
console.log(`Product C - ${QC} - $${QC * C}`);

// SubTotal
let total = QA * A + QB * B + QC * C;
console.log(separatorLine);
console.log("Total : $", total);

// Discounts
const discounts = {};

if (total > 200) {
    const key = "flat_10_discount";
    const val = 10;
    discounts[key] = val;
}

if (QA > 10 || QB > 10 || QC > 10) {
    const key = "bulk_5_discount";
    let val = 0;
    if (QA > 10) val += 0.05 * (QA * A);
    if (QB > 10) val += 0.05 * (QB * B);
    if (QC > 10) val += 0.05 * (QC * C);
    discounts[key] = val;
}

if (QA + QB + QC > 20) {
    const key = "bulk_10_discount";
    const val = 0.1 * total;
    discounts[key] = val;
}

if (QA + QB + QC > 30) {
    const key = "tiered_50_discount";
    let val = 0;
    if (QA > 15) val += 0.5 * ((QA - 15) * A);
    if (QB > 15) val += 0.5 * ((QB - 15) * B);
    if (QC > 15) val += 0.5 * ((QC - 15) * C);
    discounts[key] = val;
}

// Beneficial
const maxDiscount = Math.max(...Object.values(discounts));
const discountName = Object.keys(discounts).find(key => discounts[key] === maxDiscount);

console.log(separatorLine);
console.log("Discount Applied :", discountName);
console.log("Discount Amount : $", maxDiscount);

// Shipping Fee
const shippingItems = QA + QB + QC;
const shippingFee = Math.floor((shippingItems / 10) * 5);
console.log('Shipping Fee : $', shippingFee);

// Gift Fee
const giftFee = QAF + QBF + QCF;
console.log('Gift Wrapper Fee: $', giftFee);

// Total
total = total - maxDiscount + shippingFee + giftFee;
console.log(separatorLine);
console.log("Total : $", total);
console.log(separatorLine);

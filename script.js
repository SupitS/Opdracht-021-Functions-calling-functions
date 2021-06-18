// Opdracht 021: Functions calling functions

console.log('Hallo Winc Academy studenten');


// Hey Kiddo
const peopleAge = function(age) {
    console.log("theAge");
    if (age >= 18) {
        return true;
    }
    return false;
};


const AgeCheck = function(age) {
    console.log("Entering AgeCheck. Input of Age >= 18: ", age);
    if (peopleAge(age)) {
        return "Hello there";
    }
    return "Hey Kiddo";
};

console.log(AgeCheck(15));


// VAT calculation 
// VAT exercise 1, base price, VAT % and return price incl VAT
const VATpercentage = function(basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const TotalPrice = function(basePrice, VATPercentage) {
    const calcVAT = VATpercentage(basePrice, VATPercentage);
    return basePrice + calcVAT;
};

console.log(TotalPrice(1000, 21));


// VAT exercise 2, an array with 2 values, incl VAT & VAT%
const PriceWithoutVAT = function(priceInclVAT, VATPercentage) {
    const basePrice = priceInclVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const PriceWithVAT = function(priceInclVAT, VATPercentage) {
    const basePrice = PriceWithoutVAT(priceInclVAT, VATPercentage);
    const VAT = priceInclVAT - basePrice;
    return [basePrice, VAT];
};

console.log(PriceWithVAT(242, 21));

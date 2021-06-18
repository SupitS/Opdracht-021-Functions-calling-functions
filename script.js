// Opdracht 021: Functions calling functions

console.log('Hallo Winc Academy studenten');


// Hey Kiddo
const Age = function(number) {
    console.log("theAge");
    if (number >= 18) {
        return true;
    }
    return false;
};


const AgeCheck = function(number) {
    console.log("Entering AgeCheck. Input of Age >= 18: ", number);
    const peopleAge = Age(number);
    if (peopleAge >= 18) {
        return "Hello there";
    }
    return "Hey Kiddo";
};

console.log(AgeCheck(15));


// VAT calculation 
// VAT exercise 1, base price, VAT % and return price incl VAT
const VATpercentage = function(number) {
    return number * 0.21;
};

const PriceTotal = function(number) {
    const PriceTotalCalc = VATpercentage(number);
    return number *1.21;
};

const TotalPrice = function(number) {
    const percentageOfVAT = VATpercentage(number);
    const priceInclVAT = PriceTotal(percentageOfVAT);
    return priceInclVAT;
};

console.log(TotalPrice(1000));


// VAT exercise 2, an array with 2 values, incl VAT & VAT%
const PriceWithVAT = function(number) {
    return number * 1.21;
};

const PriceWithoutVAT = function(number) {
    const PriceTotalCalc = VATpercentage(number);
    return number *1.21;
};

const TotalPrice2 = function(number) {
    let calcInclVAT = [PriceWithVAT(number)];
    let VATnumber = [PriceTotal(calcInclVAT)];
    return VATnumber;
};

console.log(TotalPrice2(100));
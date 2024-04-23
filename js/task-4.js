function getShippingCost(country) { 
    let message;

    const countryChina = "China";
    const countryChile = "Chile";
    const countryAustralia = "Australia";
    const countryJamaica = "Jamaica";

    const costChina = 100;
    const costChile = 250;
    const costAustralia = 170;
    const costJamaica = 120;

    switch(country) { 
        case "China":
            message = `Shipping to ${countryChina} will cost ${costChina} credits`; break;
        case "Chile":
            message = `Shipping to ${countryChile} will cost ${costChile} credits`; break;
        case "Australia":
            message = `Shipping to ${countryAustralia} will cost ${costAustralia} credits`; break;
        case "Jamaica":
            message = `Shipping to ${countryJamaica} will cost ${costJamaica} credits`; break;
        default:
            message = "Sorry, there is no delivery to your country";
    }
    return message;
}


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
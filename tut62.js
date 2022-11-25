
let jsonObj = {
    name: "Bhavya",
    friend: "Astha",
    company: "RM",
    Food: "pizza"
}

console.log(jsonObj);


let myJsonStr = JSON.stringify(jsonObj);    // Here we convert onject into string
console.log(myJsonStr);


myJsonStr = myJsonStr.replace('Bhavya', 'Bk');
console.log(myJsonStr);


// here we again convert string into object

newJsonObj = JSON.parse(myJsonStr);
console.log(newJsonObj);
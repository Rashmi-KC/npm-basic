const obj = {
    name: "Rashmi",
    contact: "9862828190",
    address: "Sifal"
}

console.log(obj)
console.log(typeof obj)
console.log(obj.name)

//Convert object to JSON
const newJSON = JSON.stringify(obj);
console.log(newJSON)
console.log(typeof newJSON)
console.log(newJSON.name)

//Convert back to object

const json = JSON.parse(newJSON);
console.log(json)
console.log(typeof json)
console.log(json.name)



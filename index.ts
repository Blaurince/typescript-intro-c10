let age: number = 23;
let firstName: string = "nephie"
let isTall: boolean = true;
let childrensNames: string[] = ["Lily", "David"]

//console.log(`${firstName} is ${age} years old`)
if (isTall) {
//console.log("and so tall")
} else {
   // console.log("and so pretty")
}

for (let i: number = 0; i < childrensNames.length; i++ ){
 //console.log(childrensNames[i])
}

enum taxForm {
    standardTaxForm = "1040",
    ChildTaxForm = "641",
    cryptTaxForm = "420Z"
}


//console.log("the crypto one is: ", taxForm.cryptTaxForm)

let zipCode: string |  number = 12345
zipCode = "ABCDE"
//zipCode = true

//console.log(zipCode)

// example of function in typeScript
function sum(x: number, y: number): number {
  return x+y
}
// console.log(sum(4,5))

let total: number = sum(5,6)
//console.log(total)//

// ex of debug funtion
function debug(message: string) : void {
    // console.log(message)
}

debug("hello world")

// example of "any" => console.log (not quit sure what do do)
interface person {
    firstName: string,
    age: number,
    children: string[],
    hasCertificate?: boolean,
}
let Barbara: person = {
    firstName: "me",
    age: 23,
    children: ["Lilly", "David"],
    hasCertificate: false
}

let Todd: person = {
    firstName: "Todd a",
    age: 43,
    children: [],
    hasCertificate: false
}
console.log(Barbara)

// interface (how we define an object) Interface is considered as the shape of the data.







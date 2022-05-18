import {NameRegex} from "./Name_Regex";

let nameRegex = new NameRegex();

let validName : string[] = ["C0318G","C0318G","C0318G","C0318G","C0318G"];
let invalidName: string[] = [`M0318G`, `C0318A`];
for (let name of validName) {
    let isvalid: boolean = nameRegex.validate(name);
    console.log(isvalid)
    console.log(`Name is ` + name + ` is valid `+ isvalid)
}
// for (let i = 0; i < validName.length; i++) {
//     let isvalid: boolean = nameRegex.validate(validName[i]);
//     console.log(`Name is ` + validName[i] + ` is valid `+ isvalid)
// }
for (let name of invalidName) {
    let isvalid: boolean = nameRegex.validate(name);
    console.log(`Name is ` + name + `is valid `+ isvalid)
}
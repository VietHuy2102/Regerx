"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Name_Regex_1 = require("./Name_Regex");
var nameRegex = new Name_Regex_1.NameRegex();
var validName = ["C0318G", "C0318G", "C0318G", "C0318G", "C0318G"];
var invalidName = ["M0318G", "C0318A"];
for (var _i = 0, validName_1 = validName; _i < validName_1.length; _i++) {
    var name_1 = validName_1[_i];
    var isvalid = nameRegex.validate(name_1);
    console.log(isvalid);
    console.log("Name is " + name_1 + " is valid " + isvalid);
}
// for (let i = 0; i < validName.length; i++) {
//     let isvalid: boolean = nameRegex.validate(validName[i]);
//     console.log(`Name is ` + validName[i] + ` is valid `+ isvalid)
// }
for (var _a = 0, invalidName_1 = invalidName; _a < invalidName_1.length; _a++) {
    var name_2 = invalidName_1[_a];
    var isvalid = nameRegex.validate(name_2);
    console.log("Name is " + name_2 + "is valid " + isvalid);
}

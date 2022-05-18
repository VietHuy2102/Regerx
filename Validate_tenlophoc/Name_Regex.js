"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameRegex = void 0;
var NameRegex = /** @class */ (function () {
    function NameRegex() {
        this.NAME_REGEX = /^[CAP][0-9]{4}[GHIKLM]/;
    }
    NameRegex.prototype.validate = function (regex) {
        return this.NAME_REGEX.test(regex);
    };
    return NameRegex;
}());
exports.NameRegex = NameRegex;

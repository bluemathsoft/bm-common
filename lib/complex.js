"use strict";
/*

Copyright (C) 2017 Jayesh Salvi, Blue Math Software Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("./constants");
var ops_1 = require("./ops");
var Complex = /** @class */ (function () {
    function Complex(real, imag) {
        this.real = real || 0;
        this.imag = imag || 0;
    }
    Complex.prototype.clone = function () {
        return new Complex(this.real, this.imag);
    };
    Complex.prototype.inverse = function () {
        // 1/Complex number is converted to a usable complex number by
        // multiplying both numerator and denominator by complex conjugate
        // of the original number (rationalizing the denominator)
        var r = this.real;
        var i = this.imag;
        var den = r * r + i * i;
        return new Complex(r / den, -i / den);
    };
    Complex.prototype.isEqual = function (other, tolerance) {
        if (tolerance === void 0) { tolerance = constants_1.EPSILON; }
        return ops_1.isequal(this.real, other.real, tolerance) &&
            ops_1.isequal(this.imag, other.imag, tolerance);
    };
    Complex.prototype.toString = function (precision) {
        if (precision === void 0) { precision = 4; }
        var sign = (this.imag >= 0) ? '+' : '-';
        return "(" + this.real.toFixed(precision) +
            ("" + sign + Math.abs(this.imag).toFixed(precision) + "i)");
    };
    return Complex;
}());
exports.Complex = Complex;

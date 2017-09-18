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

import {EPSILON} from './constants'
import {isequal} from './ops'

export class Complex {
  real : number;
  imag : number;

  constructor(real?:number,imag?:number) {
    this.real = real || 0;
    this.imag = imag || 0;
  }

  clone() {
    return new Complex(this.real,this.imag);
  }

  inverse() : Complex {
    // 1/Complex number is converted to a usable complex number by
    // multiplying both numerator and denominator by complex conjugate
    // of the original number (rationalizing the denominator)
    let r = this.real;
    let i = this.imag;
    let den = r*r+i*i;
    return new Complex(r/den, -i/den);
  }

  isEqual(other:Complex, tolerance=EPSILON) {
    return isequal(this.real,other.real,tolerance) &&
      isequal(this.imag,other.imag,tolerance);
  }

  toString(precision=4) {
    let sign = (this.imag >=0) ? '+' : '-';
    return `(${this.real.toFixed(precision)}`+
      `${sign}${Math.abs(this.imag).toFixed(precision)}i)`;
  }
}

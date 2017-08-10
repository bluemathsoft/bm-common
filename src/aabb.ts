 /*

 Copyright (C) 2017 Jayesh Salvi, Blue Math Software Inc.

 This file is part of bluemath.

 bluemath is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 bluemath is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with bluemath. If not, see <http://www.gnu.org/licenses/>.

*/

import {NDArray} from './ndarray'

export class AABB {
  private _min : NDArray;
  private _max : NDArray;

  constructor(minarr:number[], maxarr:number[]) {
    this._min = new NDArray(minarr);
    this._max = new NDArray(maxarr);
  }

  get min() {
    return this._min;
  }

  get max() {
    return this._max;
  }

  merge(other:AABB) {
    for(let i=0; i<this.min.length; i++) {
      this.min.set(i,
        Math.min(<number>this.min.get(i), <number>other.min.get(i)));
    }
    for(let i=0; i<this.max.length; i++) {
      this.max.set(i,
        Math.max(<number>this.max.get(i), <number>other.max.get(i)));
    }
  }
}
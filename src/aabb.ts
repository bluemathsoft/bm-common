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

import {NDArray} from './ndarray'
import {TypedArray} from '../src'

export class AABB {
  private _min : NDArray;
  private _max : NDArray;

  constructor(arg0:number|number[]|TypedArray, arg1?:number[]|TypedArray) {
    let dim = 0;
    if(Array.isArray(arg0) || ArrayBuffer.isView(arg0)) {
      this._min = new NDArray(arg0);
    } else {
      dim = arg0;
      this._min = new NDArray({shape:[dim]});
      this._min.fill(Infinity);
    }
    if(arg1 && (Array.isArray(arg1) || ArrayBuffer.isView(arg1))) {
      this._max = new NDArray(arg1);
    } else {
      this._max = new NDArray({shape:[dim]});
      this._max.fill(-Infinity);
    }
  }

  get min() {
    return this._min;
  }

  get max() {
    return this._max;
  }

  /**
   * Update this AABB to include given coordinate
   */
  update(coord:number[]|NDArray) {
    if(coord instanceof NDArray) {
      for(let i=0; i<this._min.length; i++) {
        this._min.set(i,
          Math.min(<number>this._min.get(i), <number>coord.get(i)));
      }
      for(let i=0; i<this._max.length; i++) {
        this._max.set(i,
          Math.max(<number>this._max.get(i), <number>coord.get(i)));
      }
    } else {
      for(let i=0; i<this._min.length; i++) {
        this._min.set(i,
          Math.min(<number>this._min.get(i), coord[i]));
      }
      for(let i=0; i<this._max.length; i++) {
        this._max.set(i,
          Math.max(<number>this._max.get(i), coord[i]));
      }
    }
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
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

export type NumberType = 'i8'|'ui8'|'i16'|'ui16'|'i32'|'ui32'|'f32'|'f64';
export type TypedArray = Int8Array | Uint8Array | Int16Array |
    Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;

import {
  eye, zeros, empty, arr,
  range,
  iszero, isequal,
  torad, todeg,
  add, mul, sub, div,
  dot, cross, length, dir,
  count
} from './ops'
import {EPSILON} from './constants'
import {NDArray} from './ndarray'
import {Complex} from './complex'
import {AABB} from './aabb'

export {

  // Constants
  EPSILON,

  // Classes
  NDArray,
  Complex,
  AABB,

  // Ops
  eye, zeros, empty, arr,
  range,
  iszero, isequal,
  torad, todeg,
  add, mul, sub, div,
  dot, cross, length, dir,
  count
}

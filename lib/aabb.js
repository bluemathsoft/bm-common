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
var ndarray_1 = require("./ndarray");
var AABB = (function () {
    function AABB(arg0, arg1) {
        var dim = 0;
        if (Array.isArray(arg0) || ArrayBuffer.isView(arg0)) {
            this._min = new ndarray_1.NDArray(arg0);
        }
        else {
            dim = arg0;
            this._min = new ndarray_1.NDArray({ shape: [dim] });
            this._min.fill(Infinity);
        }
        if (arg1 && (Array.isArray(arg1) || ArrayBuffer.isView(arg1))) {
            this._max = new ndarray_1.NDArray(arg1);
        }
        else {
            this._max = new ndarray_1.NDArray({ shape: [dim] });
            this._max.fill(-Infinity);
        }
    }
    Object.defineProperty(AABB.prototype, "min", {
        get: function () {
            return this._min;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "max", {
        get: function () {
            return this._max;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Update this AABB to include given coordinate
     */
    AABB.prototype.update = function (coord) {
        if (coord instanceof ndarray_1.NDArray) {
            for (var i = 0; i < this._min.length; i++) {
                this._min.set(i, Math.min(this._min.get(i), coord.get(i)));
            }
            for (var i = 0; i < this._max.length; i++) {
                this._max.set(i, Math.max(this._max.get(i), coord.get(i)));
            }
        }
        else {
            for (var i = 0; i < this._min.length; i++) {
                this._min.set(i, Math.min(this._min.get(i), coord[i]));
            }
            for (var i = 0; i < this._max.length; i++) {
                this._max.set(i, Math.max(this._max.get(i), coord[i]));
            }
        }
    };
    AABB.prototype.merge = function (other) {
        for (var i = 0; i < this.min.length; i++) {
            this.min.set(i, Math.min(this.min.get(i), other.min.get(i)));
        }
        for (var i = 0; i < this.max.length; i++) {
            this.max.set(i, Math.max(this.max.get(i), other.max.get(i)));
        }
    };
    return AABB;
}());
exports.AABB = AABB;

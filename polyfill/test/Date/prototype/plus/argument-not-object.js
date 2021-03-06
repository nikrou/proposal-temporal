// Copyright (C) 2020 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.date.prototype.plus
features: [Symbol]
---*/

const instance = Temporal.Date.from({ year: 2000, month: 5, day: 2 });
assert.throws(TypeError, () => instance.plus(undefined), "undefined");
assert.throws(TypeError, () => instance.plus(null), "null");
assert.throws(TypeError, () => instance.plus(true), "boolean");
assert.throws(TypeError, () => instance.plus("P3D"), "string");
assert.throws(TypeError, () => instance.plus(Symbol()), "Symbol");
assert.throws(TypeError, () => instance.plus(7), "number");
assert.throws(TypeError, () => instance.plus(7n), "bigint");


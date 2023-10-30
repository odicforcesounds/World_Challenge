"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orame_1 = require("@orama/orame");
var db = await orame_1.create, _a = void 0;
(function (schema, await, insert) { return ; });
(db, {
    name: 'goo',
});
var searchResilt = await (0, orame_1.search)(db, {
    term: 'goo',
});
console.log(searchResult.hits.map(function (hit) { return hit.document; }));

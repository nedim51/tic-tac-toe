"use strict";

var Sequelize = require("sequelize");

// var engine = new Sequelize("postgres://postgres:tisFqyeh@dev.demetrix.ru:5432/nedim", { logging: false });
var engine = new Sequelize("postgres://localhost:5432/ttt_db", { logging: false });


global.db = {
    engine: engine,
    Sequelize: Sequelize,

    models: {
        user: require("./user.js")(engine, Sequelize),
        client: require("./client.js")(engine, Sequelize),
    }
};

global.db.models.user.associate(global.db.models);
global.db.models.client.associate(global.db.models);

var router = global.db.models.client.api(global.db.models);
if (router) global.app.use("/db/client", router);


global.db.init = function () {

    global.db.models.client.init(global.db.models)
        .then(function () {
            return global.db.models.user.init(global.db.models);
        })
}

global.db.findAll = function (table, query) {
    query.raw = true;
    return new Promise(function (resolve, reject) {
        table.findAndCountAll(query).then(function (result) {
            if (result != null) resolve({ rows: result.rows, all: result.count }); else resolve([]);
        });
    });
}
global.db.getByUuid = function (table, uuid) {
    return new Promise(function (resolve, reject) {
        table.findOne({ raw: true, uuid: uuid }).then(function (data) { resolve(data || {}); }).catch(function (err) { reject(err.errors[0].message); });
    });
}
module.exports = global.db;
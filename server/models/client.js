"use strict";
const express = require('express');
const router = express.Router();

module.exports = function (engine, Sequelize) {
    var table = engine.define("client", {
        uuid: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV1 },
        extId: { type: Sequelize.STRING(100) },
        kind: { type: Sequelize.ENUM('operator', 'client', 'medical', 'partner', "division") },
        name: { type: Sequelize.STRING },
        shortname: { type: Sequelize.STRING(100) },
        phones: { type: Sequelize.JSONB },
        addresses: { type: Sequelize.JSONB },
        additional: { type: Sequelize.JSONB },
        description: { type: Sequelize.TEXT }
    },
        {
            freezeTableName: true, tableName: 'client'
        });
    table.associate = function (models) {
        console.log("associate");
    }
    table.init = function (models) {
        return table.findOne({ raw: true, where: { uuid: "00000000-1111-2222-3333-444444444444" } })
            .then(function (result) {
                if (result != null) return Promise.resolve(result);
                return table.create({
                    uuid: "00000000-1111-2222-3333-444444444444",
                    name: "Оператор системы",
                    shortname: "Оператор системы",
                    kind: "operator", 
                    additional: {}, 
                    description: "Оператор системы"
                })
            })
            .then(function (result) {
                if (result.get) result = result.get();

                return Promise.resolve(result);
            });
    }

    table.put = function (query) {
        return new Promise(function (resolve, reject) {
            if (query.uuid == undefined) return table.create(query).then(function (result) { resolve(result.get()); }).catch(function (err) { reject(err.message); });
            table.findOne({ raw: true, where: { uuid: query.uuid } })
                .then(function (result) {
                    if (result) return table.update(query, { where: { uuid: query.uuid } });
                    else return table.create(query);
                })
                .then(function (result) {
                    if (query.uuid != undefined) {
                        if (result[0] > 0) resolve(query); else reject("Invalid arguments");
                    }
                    else resolve(result.get());
                })
                .catch(function (err) { console.log(err.message); reject(err.message); });
        });

    };
    table.get = function (param) {

        var query = {}; query.where = query.where || {}; query.where.$and = query.where.$and || [];

        //вернуть по uuid один экземпляр
        if (param.uuid != undefined && !Array.isArray(param.uuid)) return global.db.getByUuid(table, param.uuid);
        if (param.paging != undefined) { query.offset = param.paging.current; query.limit = param.paging.show; }
        if (param.uuid != undefined && Array.isArray(param.uuid)) query.where.$and.push({ uuid: { $in: param.uuid } });
        if (param["%name%"] != undefined) query.where.$and.push({ $or: [{ name: { $eq: null } }, { name: { $iLike: "%" + param["%name%"] + "%" } }] });//вернуть по UUID много экземпляров
        if (param.name != undefined) query.where.$and.push({ $or: [{ name: { $eq: null } }, { name: param.name }] });
        if (param.shortname != undefined) query.where.$and.push({ $or: [{ shortname: { $eq: null } }, { shortname: param.shortname }] });
        if (param["%shortname%"] != undefined) query.where.$and.push({ $or: [{ shortname: { $eq: null } }, { shortname: { $iLike: "%" + param["%shortname%"] + "%" } }] });

        return global.db.findAll(table, query);
    }

    table.api = function (models) {
        router.post('/put', global.jsonParser, (req, res) => {
            table.put(req.body).then(function (result) { res.send(result); }).catch(function (err) { res.send({ success: false, message: err }); });
        });
        router.post('/get', (req, res) => {
            table.get(req.body).then(function (result) { res.send(result); }).catch(function (err) { res.send({ success: false, message: err }); });
        });
        router.post('/delete', (req, res) => {
            res.send({});
        });
        return router;
    }

    return table;
};
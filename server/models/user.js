"use strict";
var md5 = require("md5");
const express = require('express');
const router = express.Router();

module.exports = function (engine, Sequelize) {
    var table = engine.define("user", {
        uuid: { type: Sequelize.UUID, primaryKey: true, defaultValue: Sequelize.UUIDV1 },
        login: { type: Sequelize.STRING(100), primaryKey: true, },
        password: { type: Sequelize.STRING(100) },
        extId: { type: Sequelize.STRING(100) },
        kind: { type: Sequelize.ENUM('patient', 'administartor', 'doctor') },
        first: { type: Sequelize.STRING(100) },
        middle: { type: Sequelize.STRING(100) },
        last: { type: Sequelize.STRING(100) },
        sex: { type: Sequelize.INTEGER },
        birthday: { type: Sequelize.INTEGER },
        state: { type: Sequelize.INTEGER },
        additional: { type: Sequelize.JSONB },
        description: { type: Sequelize.TEXT },
    },
        {
            freezeTableName: true, tableName: 'user'
        });
    table.associate = function (models) {
        table.belongsTo(models.client, { foreignKey: 'uuidClient', as: "client" });
    }

    table.init = function (models) {
        return table.findOne({ raw: true, where: { uuid: "00000000-1111-2222-3333-444444444444" } })
            .then(function (item) {
                if (item != null) return Promise.resolve(item);
                return table.create({
                    uuid: "00000000-1111-2222-3333-444444444444",
                    uuidClient: "00000000-1111-2222-3333-444444444444",
                    login: "admin",
                    password: md5("nobilis"),
                    first: "Администратор", 
                    additional: {},
                    state: 1,
                    kind: "administartor", 
                    sex: 0,
                    description: "Стандартный администратор"
                });
            })
            .then(function (result) {
                console.log(result.get);
                if (result.get) result = result.get();
                console.log(result);
                return Promise.resolve(result);
            })
    }
    table.api = function (models) {

    }
    return table;
};
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeViewService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../app.module");
const mysql = require("mysql2");
let TreeViewService = class TreeViewService {
    constructor() { }
    async postCategory(db_info, category_details) {
        try {
            const dbName = '01_customapp_' +
                db_info.country_no +
                '_' +
                db_info.customer_id +
                '_template_getbiz';
            await app_module_1.dbConnection.query(`
      INSERT INTO ${dbName}.tree_view (category_id, parent_category_id, category_name, ishidden) VALUES (
        ${mysql.escape(category_details.category_id)},
        ${mysql.escape(category_details.parent_category_id)}, 
        ${mysql.escape(category_details.category_name)},
        ${mysql.escape(category_details.ishidden)}
        );
      `);
        }
        catch (error) {
            throw error;
        }
    }
    async updateCategory(db_info, category_details) {
        try {
            const dbName = '01_customapp_' +
                db_info.country_no +
                '_' +
                db_info.customer_id +
                '_template_getbiz';
            if (category_details.category_name) {
                await app_module_1.dbConnection.query(`
          UPDATE 
    ${dbName}.tree_view 
  SET 
    category_name = ${mysql.escape(category_details.category_name)} WHERE 
    category_id = '${category_details.category_id}' `);
            }
        }
        catch (error) {
            throw error;
        }
    }
    async hideCategory(db_info, category_details) {
        try {
            const dbName = '01_customapp_' +
                db_info.country_no +
                '_' +
                db_info.customer_id +
                '_template_getbiz';
            if (category_details.ishidden) {
                await app_module_1.dbConnection.query(`
            UPDATE 
      ${dbName}.tree_view 
    SET 
      ishidden = ${mysql.escape(category_details.ishidden)} WHERE 
      category_id = '${category_details.category_id}' `);
            }
        }
        catch (error) {
            throw error;
        }
    }
    async GetAllCategories(country_no, customer_id) {
        try {
            const dbName = '01_customapp_' + country_no + '_' + customer_id + '_template_getbiz';
            const TaskData = await app_module_1.dbConnection.query(`SELECT * FROM ${dbName}.tree_view order by id`);
            let data;
            if (TaskData.length > 1) {
                data = await this.treeConstruct(TaskData);
                return data;
            }
            const obj = TaskData[0];
            const pair = { children: [] };
            const objData = Object.assign(Object.assign({}, obj), pair);
            if (obj !== undefined) {
                return [objData];
            }
            return [];
        }
        catch (error) {
            throw error;
        }
    }
    treeConstruct(treeData) {
        let constructedTree = [];
        for (let i of treeData) {
            let treeObj = i;
            let assigned = false;
            this.constructTree(constructedTree, treeObj, assigned);
        }
        return constructedTree;
    }
    constructTree(constructedTree, treeObj, assigned) {
        if (treeObj.parent_category_id == null) {
            treeObj.children = [];
            constructedTree.push(treeObj);
            return true;
        }
        else if (treeObj.parent_category_id === constructedTree.category_id) {
            treeObj.children = [];
            constructedTree.children.push(treeObj);
            return true;
        }
        else {
            if (constructedTree.children != undefined) {
                for (let index = 0; index < constructedTree.children.length; index++) {
                    let constructedObj = constructedTree.children[index];
                    if (assigned == false) {
                        assigned = this.constructTree(constructedObj, treeObj, assigned);
                    }
                }
            }
            else {
                for (let index = 0; index < constructedTree.length; index++) {
                    let constructedObj = constructedTree[index];
                    if (assigned == false) {
                        assigned = this.constructTree(constructedObj, treeObj, assigned);
                    }
                }
            }
            return false;
        }
    }
};
TreeViewService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], TreeViewService);
exports.TreeViewService = TreeViewService;
//# sourceMappingURL=tree-view.service.js.map
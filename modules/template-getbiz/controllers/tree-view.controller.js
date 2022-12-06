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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeViewController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tree_dto_1 = require("../../../models/dto/tree.dto");
const tree_view_service_1 = require("../services/tree-view.service");
let TreeViewController = class TreeViewController {
    constructor(_treeViewService) {
        this._treeViewService = _treeViewService;
    }
    async addCategory(country_no, customer_id, category) {
        try {
            let data = { customer_id, country_no };
            await this._treeViewService.postCategory(data, category);
            return {
                status: 200,
                message: 'Form Data Saved Successfully',
            };
        }
        catch (error) {
            throw error;
        }
    }
    async GetAllCategories(country_no, customer_id) {
        try {
            const tasksData = await this._treeViewService.GetAllCategories(country_no, customer_id);
            return {
                status: common_1.HttpStatus.OK,
                message: 'Tasks Fetched Successfully',
                data: tasksData,
            };
        }
        catch (error) {
            throw error;
        }
    }
    async updateCategory(category, country_no, customer_id) {
        try {
            let data = { customer_id, country_no };
            await this._treeViewService.updateCategory(data, category);
            return {
                status: 200,
                message: 'Form Data Saved Successfully',
            };
        }
        catch (error) {
            throw error;
        }
    }
    async hideCategory(category, country_no, customer_id) {
        try {
            let data = { customer_id, country_no };
            await this._treeViewService.hideCategory(data, category);
            return {
                status: 200,
                message: 'Form Data Saved Successfully',
            };
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)('add-category'),
    __param(0, (0, common_1.Query)('country_no')),
    __param(1, (0, common_1.Query)('customer_id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, tree_dto_1.TreeDto]),
    __metadata("design:returntype", Promise)
], TreeViewController.prototype, "addCategory", null);
__decorate([
    (0, common_1.Get)('get-all-categories'),
    __param(0, (0, common_1.Query)('country_no')),
    __param(1, (0, common_1.Query)('customer_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TreeViewController.prototype, "GetAllCategories", null);
__decorate([
    (0, common_1.Put)('update-category'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('country_no')),
    __param(2, (0, common_1.Query)('customer_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tree_dto_1.TreeDto, String, String]),
    __metadata("design:returntype", Promise)
], TreeViewController.prototype, "updateCategory", null);
__decorate([
    (0, common_1.Put)('hide-category'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('country_no')),
    __param(2, (0, common_1.Query)('customer_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tree_dto_1.TreeDto, String, String]),
    __metadata("design:returntype", Promise)
], TreeViewController.prototype, "hideCategory", null);
TreeViewController = __decorate([
    (0, swagger_1.ApiTags)('Tree Controller'),
    (0, common_1.Controller)('tree-view'),
    __metadata("design:paramtypes", [tree_view_service_1.TreeViewService])
], TreeViewController);
exports.TreeViewController = TreeViewController;
//# sourceMappingURL=tree-view.controller.js.map
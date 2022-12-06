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
exports.FormController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("../../../app.module");
const formDto = require("../../../models/dto/form.dto");
const form_service_1 = require("../services/form.service");
let FormController = class FormController {
    constructor(_formService) {
        this._formService = _formService;
    }
    async registerForm(simple_form, customer_id, country_no) {
        try {
            let data = { customer_id, country_no };
            await this._formService.registerForm(data, simple_form);
            return {
                status: 200,
                message: 'Form Data Saved Successfully',
            };
        }
        catch (error) {
            throw error;
        }
    }
    async addressForm(address_form, customer_id, country_no) {
        try {
            let data = { customer_id, country_no };
            await this._formService.addressForm(data, address_form);
            return {
                status: 200,
                message: 'Form Data Saved Successfully',
            };
        }
        catch (error) {
            throw error;
        }
    }
    async stepperForm(stepper_form, customer_id, country_no) {
        try {
            let data = { customer_id, country_no };
            await this._formService.stepperForm(data, stepper_form);
            return {
                status: 200,
                message: 'Form Data Saved Successfully',
            };
        }
        catch (error) {
            throw error;
        }
    }
    async onCreateDynamicDatabase(customer_id, country_no) {
        try {
            await this._formService.onCreateDynamicDatabase(customer_id, country_no);
        }
        catch (error) {
            throw error;
        }
    }
    async audit_trail(customer_id, country_no, type, pageno, per_page) {
        try {
            let db_info = { customer_id, country_no };
            let total_row = await app_module_1.dbConnection.query(`SELECT COUNT(*) AS row_count FROM
    01_customapp_in_12_template_getbiz.audit_trail where type = '${type}'`);
            let data = await this._formService.audit_trail(db_info, type, pageno, per_page);
            return {
                status: 200,
                message: 'Data Fetched Successfully',
                data: { rows: data, count: total_row[0]['row_count'] },
            };
        }
        catch (error) {
            throw error;
        }
    }
    async table_pagination(pageno, per_page) {
        try {
            let offset = pageno * per_page;
            let total_row = await app_module_1.dbConnection.query(`SELECT COUNT(*) AS row_count FROM
      01_customapp_in_12_template_getbiz.periodic_elements ;`);
            const table_data = await app_module_1.dbConnection.query(`
    SELECT * FROM
    01_customapp_in_12_template_getbiz.periodic_elements
    where
    position  >  0 * 5 LIMIT ${offset}, ${per_page}`);
            return {
                status: 200,
                message: 'Data Fetched Successfully',
                data: { rows: table_data, count: total_row[0]['row_count'] },
            };
        }
        catch (error) {
            throw error;
        }
    }
    async createUserAssignCategory(assign_category, customer_id, country_no) {
        let data = { customer_id, country_no };
        await this._formService.createUserAssignCategory(data, assign_category);
        return {
            status: 200,
            message: 'Assigned Category Successfully',
        };
    }
    async updateUserAssignCategory(assign_category, customer_id, country_no) {
        let data = { customer_id, country_no };
        await this._formService.updateUserAssignCategory(data, assign_category);
        return {
            status: 200,
            message: 'Updated Category Successfully',
        };
    }
    async checkUserAssignCategory(assign_category, customer_id, country_no) {
        let data = { customer_id, country_no };
        let info = await this._formService.checkUserAssignCategory(data, assign_category);
        if (info == true) {
            return {
                status: 200,
                message: 'User is present in this category in-order to hide parent category / sub category kindly reassign the user to another category',
                userIsAssigned: true,
            };
        }
        else if (info == false) {
            return {
                status: 200,
                message: 'User is not present in this category',
                userIsAssigned: false,
            };
        }
    }
    async getUsers(customer_id, country_no) {
        let data = { customer_id, country_no };
        let data2 = await this._formService.getUsers(data);
        return {
            status: 200,
            message: 'Assigned Category Successfully',
            data: data2,
        };
    }
    async getAssignCategory(customer_id, country_no) {
        let data = { customer_id, country_no };
        let data2 = await this._formService.getAssignCategory(data);
        return {
            status: 200,
            message: 'Assigned Categories fetched Successfully',
            data: data2,
        };
    }
    async getUsersByCategoryId(customer_id, country_no, category_id) {
        let data = { customer_id, country_no };
        let data2 = await this._formService.getUsersByCategoryId(data, category_id);
        return {
            status: 200,
            message: 'User Details fetched Successfully',
            data: data2,
        };
    }
    async passingUsersParentToChild(country_no, customer_id, parent_child_data) {
        try {
            let data = { customer_id, country_no };
            await this._formService.passingUsersParentToChild(data, parent_child_data);
            return {
                status: 200,
                message: 'Users Shifted to new Category Successfully',
            };
        }
        catch (error) {
            throw error;
        }
    }
    async postUtcCurrentTimestampBasedOnTimeZoneIanaString(obj_utcCurrentTimestampBasedOnTimeZoneIanaStringDto, customer_id, country_no) {
        let data = { customer_id, country_no };
        var data1 = await this._formService.postUtcCurrentTimestampBasedOnTimeZoneIanaString(data, obj_utcCurrentTimestampBasedOnTimeZoneIanaStringDto);
        return {
            status: 200,
            message: 'Add Data Successfully',
            data: data1
        };
    }
};
__decorate([
    (0, common_1.Post)('simple-form'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('customer_id')),
    __param(2, (0, common_1.Query)('country_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [formDto.DtoSimpleform, String, String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "registerForm", null);
__decorate([
    (0, common_1.Post)('address-form'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('customer_id')),
    __param(2, (0, common_1.Query)('country_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [formDto.DtoAddressform, String, String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "addressForm", null);
__decorate([
    (0, common_1.Post)('stepper-form'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('customer_id')),
    __param(2, (0, common_1.Query)('country_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [formDto.DtoStepperform, String, String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "stepperForm", null);
__decorate([
    (0, common_1.Post)('create-dynamic-database'),
    __param(0, (0, common_1.Query)('customer_id')),
    __param(1, (0, common_1.Query)('country_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "onCreateDynamicDatabase", null);
__decorate([
    (0, common_1.Get)('audit-trail'),
    __param(0, (0, common_1.Query)('customer_id')),
    __param(1, (0, common_1.Query)('country_no')),
    __param(2, (0, common_1.Query)('type')),
    __param(3, (0, common_1.Query)('pageno')),
    __param(4, (0, common_1.Query)('per_page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "audit_trail", null);
__decorate([
    (0, common_1.Get)('table-pagination'),
    __param(0, (0, common_1.Query)('pageno')),
    __param(1, (0, common_1.Query)('per_page')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "table_pagination", null);
__decorate([
    (0, common_1.Post)('assign-category'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('customer_id')),
    __param(2, (0, common_1.Query)('country_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [formDto.DtoAssignCategory, String, String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "createUserAssignCategory", null);
__decorate([
    (0, common_1.Put)('update-assigned-category'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('customer_id')),
    __param(2, (0, common_1.Query)('country_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [formDto.DtoUpdateAssignCategory, String, String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "updateUserAssignCategory", null);
__decorate([
    (0, common_1.Post)('check-user-is-assigned-category'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('customer_id')),
    __param(2, (0, common_1.Query)('country_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [formDto.DtoAssignCategory, String, String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "checkUserAssignCategory", null);
__decorate([
    (0, common_1.Get)('get-users'),
    __param(0, (0, common_1.Query)('customer_id')),
    __param(1, (0, common_1.Query)('country_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('get-assign-category'),
    __param(0, (0, common_1.Query)('customer_id')),
    __param(1, (0, common_1.Query)('country_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "getAssignCategory", null);
__decorate([
    (0, common_1.Get)('get-users-by-category-id'),
    __param(0, (0, common_1.Query)('customer_id')),
    __param(1, (0, common_1.Query)('country_no')),
    __param(2, (0, common_1.Query)('category_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "getUsersByCategoryId", null);
__decorate([
    (0, common_1.Put)('passing-users-from-parent-to-child'),
    __param(0, (0, common_1.Query)('country_no')),
    __param(1, (0, common_1.Query)('customer_id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, formDto.DtopassingUsersParentToChild]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "passingUsersParentToChild", null);
__decorate([
    (0, common_1.Post)('post-utc-current-timestamp-based-on-time-zone-iana-string'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)('customer_id')),
    __param(2, (0, common_1.Query)('country_no')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [formDto.utcCurrentTimestampBasedOnTimeZoneIanaStringDto, String, String]),
    __metadata("design:returntype", Promise)
], FormController.prototype, "postUtcCurrentTimestampBasedOnTimeZoneIanaString", null);
FormController = __decorate([
    (0, swagger_1.ApiTags)('FormController'),
    (0, common_1.Controller)('form-controller'),
    __metadata("design:paramtypes", [form_service_1.FormService])
], FormController);
exports.FormController = FormController;
//# sourceMappingURL=form.controller.js.map
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
exports.utcCurrentTimestampBasedOnTimeZoneIanaStringDto = exports.DtopassingUsersParentToChild = exports.tree = exports.DtoUpdateAssignCategory = exports.DtoAssignCategory = exports.DtoStepperform = exports.DtoAddressform = exports.DtoSimpleform = exports.dtoAuditTrail = void 0;
const swagger_1 = require("@nestjs/swagger");
class dtoAuditTrail {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], dtoAuditTrail.prototype, "entry_description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], dtoAuditTrail.prototype, "entry_type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], dtoAuditTrail.prototype, "entry_date_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], dtoAuditTrail.prototype, "entry_by_user_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], dtoAuditTrail.prototype, "entry_by_user_category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], dtoAuditTrail.prototype, "type", void 0);
exports.dtoAuditTrail = dtoAuditTrail;
class DtoSimpleform {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoSimpleform.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoSimpleform.prototype, "datetime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoSimpleform.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoSimpleform.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoSimpleform.prototype, "qualification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", dtoAuditTrail)
], DtoSimpleform.prototype, "audit_trail", void 0);
exports.DtoSimpleform = DtoSimpleform;
class DtoAddressform {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoAddressform.prototype, "country", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoAddressform.prototype, "state_province", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoAddressform.prototype, "city_district_county", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoAddressform.prototype, "address_line_one", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoAddressform.prototype, "address_line_two", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoAddressform.prototype, "postal_code", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoAddressform.prototype, "mobile_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", dtoAuditTrail)
], DtoAddressform.prototype, "audit_trail", void 0);
exports.DtoAddressform = DtoAddressform;
class DtoStepperform {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoStepperform.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoStepperform.prototype, "date_time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoStepperform.prototype, "time", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoStepperform.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoStepperform.prototype, "address_line_1", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoStepperform.prototype, "address_line_2", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoStepperform.prototype, "address_line_3", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoStepperform.prototype, "qualification", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoStepperform.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoStepperform.prototype, "nationality", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", dtoAuditTrail)
], DtoStepperform.prototype, "audit_trail", void 0);
exports.DtoStepperform = DtoStepperform;
class DtoAssignCategory {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoAssignCategory.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoAssignCategory.prototype, "category_parent_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoAssignCategory.prototype, "category_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DtoAssignCategory.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoAssignCategory.prototype, "user_name", void 0);
exports.DtoAssignCategory = DtoAssignCategory;
class DtoUpdateAssignCategory {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DtoUpdateAssignCategory.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoUpdateAssignCategory.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoUpdateAssignCategory.prototype, "category_parent_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoUpdateAssignCategory.prototype, "category_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Number)
], DtoUpdateAssignCategory.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], DtoUpdateAssignCategory.prototype, "user_name", void 0);
exports.DtoUpdateAssignCategory = DtoUpdateAssignCategory;
class tree {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], tree.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], tree.prototype, "parent_category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], tree.prototype, "category_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], tree.prototype, "ishidden", void 0);
exports.tree = tree;
class DtopassingUsersParentToChild {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", tree)
], DtopassingUsersParentToChild.prototype, "parent_data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", tree)
], DtopassingUsersParentToChild.prototype, "child_data", void 0);
exports.DtopassingUsersParentToChild = DtopassingUsersParentToChild;
class utcCurrentTimestampBasedOnTimeZoneIanaStringDto {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], utcCurrentTimestampBasedOnTimeZoneIanaStringDto.prototype, "time_zone_iana_string", void 0);
exports.utcCurrentTimestampBasedOnTimeZoneIanaStringDto = utcCurrentTimestampBasedOnTimeZoneIanaStringDto;
//# sourceMappingURL=form.dto.js.map
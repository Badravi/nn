"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateGetbizModule = void 0;
const common_1 = require("@nestjs/common");
const form_controller_1 = require("./controllers/form.controller");
const tree_view_controller_1 = require("./controllers/tree-view.controller");
const form_service_1 = require("./services/form.service");
const tree_view_service_1 = require("./services/tree-view.service");
let TemplateGetbizModule = class TemplateGetbizModule {
};
TemplateGetbizModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [form_controller_1.FormController, tree_view_controller_1.TreeViewController],
        providers: [form_service_1.FormService, tree_view_service_1.TreeViewService],
    })
], TemplateGetbizModule);
exports.TemplateGetbizModule = TemplateGetbizModule;
//# sourceMappingURL=template-getbiz.module.js.map
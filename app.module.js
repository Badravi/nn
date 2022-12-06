"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = exports.dbConnection = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const template_getbiz_module_1 = require("./modules/template-getbiz/template-getbiz.module");
exports.dbConnection = new typeorm_1.DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'mysql',
});
exports.dbConnection
    .initialize()
    .then(() => {
    console.log('Data Source has been initialized!');
})
    .catch((err) => {
    console.error('Error during Data Source initialization', err);
});
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [template_getbiz_module_1.TemplateGetbizModule],
        controllers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormService = void 0;
const common_1 = require("@nestjs/common");
const app_module_1 = require("../../../app.module");
const mysql = require("mysql2");
const { DateTime } = require("luxon");
let FormService = class FormService {
    async registerForm(db_info, simple_form) {
        try {
            const dbName = '01_customapp_' +
                db_info.country_no +
                '_' +
                db_info.customer_id +
                '_template_getbiz';
            await app_module_1.dbConnection.query(`
INSERT INTO ${dbName}.form (name, datetime, date, gender, qualification) VALUES (${mysql.escape(simple_form.name)}, ${mysql.escape(simple_form.datetime)}, ${mysql.escape(simple_form.date)}, ${mysql.escape(simple_form.gender)}, ${mysql.escape(simple_form.qualification)});
      `);
            await app_module_1.dbConnection.query(`
      INSERT INTO ${dbName}.audit_trail (entry_description,entry_type,entry_date_time,
      entry_by_user_name,entry_by_user_category,type) VALUES (${mysql.escape(simple_form.audit_trail.entry_description)}, ${mysql.escape(simple_form.audit_trail.entry_type)}, ${mysql.escape(simple_form.audit_trail.entry_date_time)}, ${mysql.escape(simple_form.audit_trail.entry_by_user_name)}, ${mysql.escape(simple_form.audit_trail.entry_by_user_category)}, 'form');
            `);
        }
        catch (error) {
            throw error;
        }
    }
    async addressForm(db_info, address_form) {
        try {
            const dbName = '01_customapp_' +
                db_info.country_no +
                '_' +
                db_info.customer_id +
                '_template_getbiz';
            await app_module_1.dbConnection.query(`
      INSERT INTO ${dbName}.address_form (country, state_province, city_district_county, address_line_one, address_line_two, postal_code, mobile_number) VALUES (${mysql.escape(address_form.country)}, ${mysql.escape(address_form.state_province)}, ${mysql.escape(address_form.city_district_county)}, ${mysql.escape(address_form.address_line_one)}, ${mysql.escape(address_form.address_line_two)}, ${mysql.escape(address_form.postal_code)}, ${mysql.escape(address_form.mobile_number)});
  `);
            await app_module_1.dbConnection.query(`
  INSERT INTO ${dbName}.audit_trail (entry_description,entry_type,entry_date_time,
  entry_by_user_name,entry_by_user_category,type) VALUES (${mysql.escape(address_form.audit_trail.entry_description)}, ${mysql.escape(address_form.audit_trail.entry_type)}, ${mysql.escape(address_form.audit_trail.entry_date_time)}, ${mysql.escape(address_form.audit_trail.entry_by_user_name)}, ${mysql.escape(address_form.audit_trail.entry_by_user_category)}, 'address_form');
        `);
        }
        catch (error) {
            throw error;
        }
    }
    async stepperForm(db_info, stepper_form) {
        try {
            const dbName = '01_customapp_' +
                db_info.country_no +
                '_' +
                db_info.customer_id +
                '_template_getbiz';
            await app_module_1.dbConnection.query(`
      INSERT INTO ${dbName}.stepper_form (name, date_time, time, date, address_line_1, address_line_2, address_line_3, qualification, gender, nationality) VALUES (${mysql.escape(stepper_form.name)}, ${mysql.escape(stepper_form.date_time)}, ${mysql.escape(stepper_form.time)}, ${mysql.escape(stepper_form.date)}, ${mysql.escape(stepper_form.address_line_1)}, ${mysql.escape(stepper_form.address_line_2)}, ${mysql.escape(stepper_form.address_line_3)}, ${mysql.escape(stepper_form.qualification)}, ${mysql.escape(stepper_form.gender)}, ${mysql.escape(stepper_form.nationality)});
  `);
            await app_module_1.dbConnection.query(`
  INSERT INTO ${dbName}.audit_trail (entry_description,entry_type,entry_date_time,
  entry_by_user_name,entry_by_user_category,type) VALUES (${mysql.escape(stepper_form.audit_trail.entry_description)}, ${mysql.escape(stepper_form.audit_trail.entry_type)}, ${mysql.escape(stepper_form.audit_trail.entry_date_time)}, ${mysql.escape(stepper_form.audit_trail.entry_by_user_name)}, ${mysql.escape(stepper_form.audit_trail.entry_by_user_category)}, 'stepper_form');
        `);
        }
        catch (error) {
            throw error;
        }
    }
    async onCreateDynamicDatabase(customer_id, country_no) {
        try {
            const dbName = '01_customapp_' + country_no + '_' + customer_id + '_template_getbiz';
            const dbExist = await app_module_1.dbConnection.query(`
      SELECT SCHEMA_NAME
  FROM INFORMATION_SCHEMA.SCHEMATA
 WHERE SCHEMA_NAME = '${dbName}'
      `);
            if (dbExist.length == 0) {
                await app_module_1.dbConnection.query(`
        create database ${dbName}
        `);
                console.log(dbName);
                await app_module_1.dbConnection.query(`CREATE TABLE ${dbName}.address_form (
  serial_no INT AUTO_INCREMENT PRIMARY KEY,
  country VARCHAR(45),
  state_province VARCHAR(45),
  city_district_county VARCHAR(45),
  address_line_one VARCHAR(45),
  address_line_two VARCHAR(45),
  postal_code VARCHAR(45),
  mobile_number VARCHAR(45)
);`);
                await app_module_1.dbConnection.query(`CREATE TABLE ${dbName}.form (
  serial_no INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45),
  datetime VARCHAR(45),
  date VARCHAR(45),
  gender VARCHAR(45),
  qualification VARCHAR(45)
);`);
                await app_module_1.dbConnection.query(`CREATE TABLE ${dbName}.stepper_form (
  serial_no INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(45),
  date_time VARCHAR(45),
  time VARCHAR(45),
  date VARCHAR(45),
  address_line_1 VARCHAR(45),
  address_line_2 VARCHAR(45),
  address_line_3 VARCHAR(45),
  qualification VARCHAR(45),
  gender VARCHAR(45),
  nationality VARCHAR(45)
);`);
                await app_module_1.dbConnection.query(`
CREATE TABLE ${dbName}.audit_trail (
  id INT AUTO_INCREMENT PRIMARY KEY,
  entry_description VARCHAR(45),
  entry_type VARCHAR(45),
  entry_date_time VARCHAR(45),
  entry_by_user_name VARCHAR(45),
  entry_by_user_category VARCHAR(45),
  type VARCHAR(45)
  );
`);
                await app_module_1.dbConnection.query(`
CREATE TABLE ${dbName}.tree_view (
  id INT NOT NULL AUTO_INCREMENT,
  category_id VARCHAR(45) NULL,
  parent_category_id VARCHAR(45) NULL,
  category_name VARCHAR(45) NULL,
  ishidden TINYINT(1) NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX id_UNIQUE (id ASC) VISIBLE
  UNIQUE INDEX category_id_UNIQUE (category_id ASC) VISIBLE);
`);
                await app_module_1.dbConnection.query(`
CREATE TABLE ${dbName}.users (
  id int NOT NULL AUTO_INCREMENT, 
  name varchar(45) NOT NULL, 
  email varchar(45) NOT NULL, 
  password varchar(45) NOT NULL, 
  country_no varchar(45) NOT NULL, 
  customer_id varchar(45) NOT NULL, 
  employee_id varchar(45) NOT NULL, 
  user_id varchar(45) NOT NULL, 
  PRIMARY KEY (id)
)`);
                await app_module_1.dbConnection.query(`
CREATE TABLE ${dbName}.assign_category (
  id int NOT NULL AUTO_INCREMENT,
  category_id varchar(45) DEFAULT NULL,
  category_parent_id varchar(45) DEFAULT NULL,
  category_name varchar(45) DEFAULT NULL,
  user_id varchar(45) DEFAULT NULL,
  user_name varchar(45) DEFAULT NULL,
  PRIMARY KEY (id)`);
            }
            else if (dbExist.length == 1) {
                console.log('Database Already Exist');
            }
        }
        catch (error) {
            throw error;
        }
    }
    async audit_trail(db_info, type, pageno, per_page) {
        try {
            const dbName = '01_customapp_' +
                db_info.country_no +
                '_' +
                db_info.customer_id +
                '_template_getbiz';
            let offset = pageno * per_page;
            let audit_trail_data = await app_module_1.dbConnection.query(`SELECT * FROM ${dbName}.audit_trail where type = '${type}' and id  >  0 * 5 LIMIT ${offset}, ${per_page};
`);
            return audit_trail_data;
        }
        catch (error) {
            throw error;
        }
    }
    async createUserAssignCategory(data, assign_category) {
        const dbName = '01_customapp_' +
            data.country_no +
            '_' +
            data.customer_id +
            '_template_getbiz';
        let datas = await app_module_1.dbConnection.query(`
    INSERT INTO ${dbName}.assign_category(category_id,category_parent_id,category_name, user_id,user_name) VALUES (${mysql.escape(assign_category.category_id)}, ${mysql.escape(assign_category.category_parent_id)}, ${mysql.escape(assign_category.category_name)}, ${mysql.escape(assign_category.user_id)}, ${mysql.escape(assign_category.user_name)})
    `);
    }
    async updateUserAssignCategory(data, assign_category) {
        const dbName = '01_customapp_' +
            data.country_no +
            '_' +
            data.customer_id +
            '_template_getbiz';
        if (assign_category.category_id) {
            await app_module_1.dbConnection.query(`
          UPDATE 
    ${dbName}.assign_category 
  SET 
  category_id = ${mysql.escape(assign_category.category_id)} WHERE 
    id = '${assign_category.id}' `);
        }
        if (assign_category.category_parent_id) {
            await app_module_1.dbConnection.query(`
          UPDATE 
    ${dbName}.assign_category 
  SET 
  category_parent_id = ${mysql.escape(assign_category.category_parent_id)} WHERE 
    id = '${assign_category.id}' `);
        }
        if (assign_category.category_name) {
            await app_module_1.dbConnection.query(`
          UPDATE 
    ${dbName}.assign_category 
  SET 
  category_name = ${mysql.escape(assign_category.category_name)} WHERE 
    id = '${assign_category.id}' `);
        }
        if (assign_category.user_id) {
            await app_module_1.dbConnection.query(`
          UPDATE 
    ${dbName}.assign_category 
  SET 
  user_id = ${mysql.escape(assign_category.user_id)} WHERE 
    id = '${assign_category.id}' `);
        }
        if (assign_category.user_name) {
            await app_module_1.dbConnection.query(`
          UPDATE 
    ${dbName}.assign_category 
  SET 
  user_name = ${mysql.escape(assign_category.user_name)} WHERE 
    id = '${assign_category.id}'`);
        }
    }
    async checkUserAssignCategory(data, assign_category) {
        const dbName = '01_customapp_' +
            data.country_no +
            '_' +
            data.customer_id +
            '_template_getbiz';
        let datas = await app_module_1.dbConnection.query(`select * from ${dbName}.assign_category where category_id = ${mysql.escape(assign_category.category_id)}`);
        console.log(datas);
        if (datas.length == 0) {
            return false;
        }
        return datas[0].user_id !== null ? true : false;
    }
    async getUsers(data) {
        const dbName = '01_customapp_' +
            data.country_no +
            '_' +
            data.customer_id +
            '_template_getbiz';
        let datas = await app_module_1.dbConnection.query(`
    select * from ${dbName}.users
    `);
        return datas;
    }
    async getAssignCategory(data) {
        const dbName = '01_customapp_' +
            data.country_no +
            '_' +
            data.customer_id +
            '_template_getbiz';
        let datas = await app_module_1.dbConnection.query(`
    select * from ${dbName}.assign_category
    `);
        return datas;
    }
    async getUsersByCategoryId(data, category_id) {
        const dbName = '01_customapp_' +
            data.country_no +
            '_' +
            data.customer_id +
            '_template_getbiz';
        let datas = await app_module_1.dbConnection.query(`
    select * from ${dbName}.assign_category where category_id = ${mysql.escape(category_id)}
    `);
        return datas;
    }
    async passingUsersParentToChild(db_info, parent_child_data) {
        try {
            const dbName = '01_customapp_' +
                db_info.country_no +
                '_' +
                db_info.customer_id +
                '_template_getbiz';
            if (parent_child_data) {
                const parent = parent_child_data.parent_data;
                const children = parent_child_data.child_data;
                let old_assign_category_list = await app_module_1.dbConnection.query(`select * from ${dbName}.assign_category where category_id=${mysql.escape(parent.category_id)}`);
                old_assign_category_list.forEach(async (element) => {
                    await app_module_1.dbConnection.query(` UPDATE 
          ${dbName}.assign_category 
        SET 
        category_id = ${mysql.escape(children.category_id)}, category_parent_id = ${mysql.escape(children.parent_category_id)}, category_name = ${mysql.escape(children.category_name)}
        WHERE 
          id = '${element.id}'`);
                });
            }
        }
        catch (error) {
            throw error;
        }
    }
    async postUtcCurrentTimestampBasedOnTimeZoneIanaString(data, obj_utcCurrentTimestampBasedOnTimeZoneIanaStringDto) {
        var TimeZoneIanaString = obj_utcCurrentTimestampBasedOnTimeZoneIanaStringDto.time_zone_iana_string;
        var current_utc_timestamp = DateTime.utc({ zone: TimeZoneIanaString }).toString();
        console.log("UTC Time Stamp", current_utc_timestamp);
        var localDateAndTimeFormat = DateTime.local({ zone: TimeZoneIanaString }).toFormat('yyyy-MM-dd TT');
        console.log("local Date and Time ", localDateAndTimeFormat);
        var localDateFormat = DateTime.local({ zone: TimeZoneIanaString }).toFormat('yyyy-MM-dd');
        console.log("local Date", localDateFormat);
        var localTimeFormat = DateTime.local({ zone: TimeZoneIanaString }).toFormat('TT');
        console.log("local Time", localTimeFormat);
        var data1 = [{ current_utc_timestamp: current_utc_timestamp,
                localDateAndTimeFormat: localDateAndTimeFormat,
                localDateFormat: localDateFormat,
                localTimeFormat: localTimeFormat,
                time_zone_iana_string: TimeZoneIanaString
            }];
        return data1;
    }
};
FormService = __decorate([
    (0, common_1.Injectable)()
], FormService);
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map
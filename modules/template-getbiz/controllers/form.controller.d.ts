import * as formDto from 'src/models/dto/form.dto';
import { FormService } from '../services/form.service';
export declare class FormController {
    private _formService;
    constructor(_formService: FormService);
    registerForm(simple_form: formDto.DtoSimpleform, customer_id: string, country_no: string): Promise<any>;
    addressForm(address_form: formDto.DtoAddressform, customer_id: string, country_no: string): Promise<any>;
    stepperForm(stepper_form: formDto.DtoStepperform, customer_id: string, country_no: string): Promise<any>;
    onCreateDynamicDatabase(customer_id: string, country_no: string): Promise<void>;
    audit_trail(customer_id: string, country_no: string, type: string, pageno: number, per_page: number): Promise<any>;
    table_pagination(pageno: number, per_page: number): Promise<{
        status: number;
        message: string;
        data: {
            rows: any;
            count: any;
        };
    }>;
    createUserAssignCategory(assign_category: formDto.DtoAssignCategory, customer_id: string, country_no: string): Promise<{
        status: number;
        message: string;
    }>;
    updateUserAssignCategory(assign_category: formDto.DtoUpdateAssignCategory, customer_id: string, country_no: string): Promise<{
        status: number;
        message: string;
    }>;
    checkUserAssignCategory(assign_category: formDto.DtoAssignCategory, customer_id: string, country_no: string): Promise<{
        status: number;
        message: string;
        userIsAssigned: boolean;
    }>;
    getUsers(customer_id: string, country_no: string): Promise<{
        status: number;
        message: string;
        data: any;
    }>;
    getAssignCategory(customer_id: string, country_no: string): Promise<{
        status: number;
        message: string;
        data: any;
    }>;
    getUsersByCategoryId(customer_id: string, country_no: string, category_id: string): Promise<{
        status: number;
        message: string;
        data: any;
    }>;
    passingUsersParentToChild(country_no: string, customer_id: string, parent_child_data: formDto.DtopassingUsersParentToChild): Promise<{
        status: number;
        message: string;
    }>;
    postUtcCurrentTimestampBasedOnTimeZoneIanaString(obj_utcCurrentTimestampBasedOnTimeZoneIanaStringDto: formDto.utcCurrentTimestampBasedOnTimeZoneIanaStringDto, customer_id: string, country_no: string): Promise<{
        status: number;
        message: string;
        data: {
            current_utc_timestamp: any;
            localDateAndTimeFormat: any;
            localDateFormat: any;
            localTimeFormat: any;
            time_zone_iana_string: any;
        }[];
    }>;
}

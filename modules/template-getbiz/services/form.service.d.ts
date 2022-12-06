import { IAddressform, IAssignCategory, ISimpleform, IStepperForm } from 'src/models/interface/form.interface';
export declare class FormService {
    registerForm(db_info: any, simple_form: ISimpleform): Promise<void>;
    addressForm(db_info: any, address_form: IAddressform): Promise<void>;
    stepperForm(db_info: any, stepper_form: IStepperForm): Promise<void>;
    onCreateDynamicDatabase(customer_id: string, country_no: string): Promise<void>;
    audit_trail(db_info: any, type: any, pageno: any, per_page: any): Promise<any>;
    createUserAssignCategory(data: any, assign_category: IAssignCategory): Promise<void>;
    updateUserAssignCategory(data: any, assign_category: IAssignCategory): Promise<void>;
    checkUserAssignCategory(data: any, assign_category: IAssignCategory): Promise<boolean>;
    getUsers(data: any): Promise<any>;
    getAssignCategory(data: any): Promise<any>;
    getUsersByCategoryId(data: any, category_id: any): Promise<any>;
    passingUsersParentToChild(db_info: any, parent_child_data: any): Promise<void>;
    postUtcCurrentTimestampBasedOnTimeZoneIanaString(data: any, obj_utcCurrentTimestampBasedOnTimeZoneIanaStringDto: any): Promise<{
        current_utc_timestamp: any;
        localDateAndTimeFormat: any;
        localDateFormat: any;
        localTimeFormat: any;
        time_zone_iana_string: any;
    }[]>;
}

export declare class dtoAuditTrail {
    entry_description: string;
    entry_type: string;
    entry_date_time: string;
    entry_by_user_name: string;
    entry_by_user_category: string;
    type: string;
}
export declare class DtoSimpleform {
    serial_no: number;
    name: string;
    datetime: string;
    date: string;
    gender: string;
    qualification: string;
    audit_trail: dtoAuditTrail;
}
export declare class DtoAddressform {
    serial_no: number;
    country: string;
    state_province: string;
    city_district_county: string;
    address_line_one: string;
    address_line_two: string;
    postal_code: string;
    mobile_number: string;
    audit_trail: dtoAuditTrail;
}
export declare class DtoStepperform {
    serial_no: number;
    name: string;
    date_time: string;
    time: string;
    date: string;
    address_line_1: string;
    address_line_2: string;
    address_line_3: string;
    qualification: string;
    gender: string;
    nationality: string;
    audit_trail: dtoAuditTrail;
}
export declare class DtoAssignCategory {
    category_id: string;
    category_parent_id: string;
    category_name: string;
    user_id: number;
    user_name: string;
}
export declare class DtoUpdateAssignCategory {
    id: number;
    category_id: string;
    category_parent_id: string;
    category_name: string;
    user_id: number;
    user_name: string;
}
export declare class tree {
    category_id: string;
    parent_category_id: string | null;
    category_name: string;
    ishidden: boolean;
}
export declare class DtopassingUsersParentToChild {
    parent_data: tree;
    child_data: tree;
}
export declare class utcCurrentTimestampBasedOnTimeZoneIanaStringDto {
    time_zone_iana_string: string;
}

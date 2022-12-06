import { ICategory } from 'src/models/interface/tree.interface';
export declare class TreeViewService {
    constructor();
    postCategory(db_info: any, category_details: ICategory): Promise<void>;
    updateCategory(db_info: any, category_details: ICategory): Promise<void>;
    hideCategory(db_info: any, category_details: ICategory): Promise<void>;
    GetAllCategories(country_no: string, customer_id: string): Promise<any>;
    treeConstruct(treeData: any): any[];
    constructTree(constructedTree: any, treeObj: any, assigned: any): boolean;
}

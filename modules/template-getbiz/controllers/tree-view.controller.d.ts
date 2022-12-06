import { TreeDto } from 'src/models/dto/tree.dto';
import { TreeViewService } from '../services/tree-view.service';
export declare class TreeViewController {
    private _treeViewService;
    constructor(_treeViewService: TreeViewService);
    addCategory(country_no: string, customer_id: string, category: TreeDto): Promise<any>;
    GetAllCategories(country_no: string, customer_id: string): Promise<any>;
    updateCategory(category: TreeDto, country_no: string, customer_id: string): Promise<any>;
    hideCategory(category: TreeDto, country_no: string, customer_id: string): Promise<any>;
}

export interface ICategory {
    category_id: string;
    parent_category_id?: string | null;
    category_name: string;
    ishidden?: boolean;
    children?: ICategory[];
}

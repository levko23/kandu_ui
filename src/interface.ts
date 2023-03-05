export interface IProduct {
    ProductID: number;
    ProductName?: string;
    SupplierID?: number;
    CategoryID?: number;
    QuantityPerUnit?: string;
    UnitPrice?: number;
    UnitsInStock?: number;
    UnitsOnOrder?: number;
    ReorderLevel?: number;
    Discontinued?: boolean;
    Category?: IProductCategory;
    expanded?: boolean;
    inEdit?: boolean | string;
    locked?: boolean;
  }

  export interface IProductCategory {
    CategoryID?: number;
    CategoryName?: string;
    Description?: string;
    details?: any;
  }
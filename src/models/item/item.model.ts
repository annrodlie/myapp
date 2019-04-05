export interface Item {
    key?: string; //means key is optional, when Addpage no ned input, firebase will provide
    name: string;
    quantity: number;
    price: number;
}
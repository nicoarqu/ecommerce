export class Product {
    code: string;
    name: string;
    price: number;
    description: string;
    url: string;

    constructor(code: string, name: string, price: number, description: string, url?: string) {
        this.code = code;
        this.name = name;
        this.price = price;
        this.description = description;
        this.url = url || '';
    }
}
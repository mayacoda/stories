export class User {
    name: string;
    email: string;
    image: string;

    constructor(attr: any) {
        this.name = attr.name;
        this.email = attr.email;
        this.image = attr.image;
    }
}
import {User} from "./user.model";
import {Event} from "./event.model";

export class Timeline {
    title: string;
    id: number;
    description: string;
    author: User;
    events: Event[];
    connections: Array<Array<number>>;

    constructor(attr: any) {
        this.id = attr.id;
        this.title = attr.title;
        this.author = new User(attr.author);
        this.events = attr.events.map(new Event);
        this.connections = attr.connections;
        this.description = attr.description;
    }
}
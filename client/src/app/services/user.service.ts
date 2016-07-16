import {User} from "../models/user.model";
import {Observable, BehaviorSubject} from "rxjs/Rx";

export class UserService {
    private currentUser: BehaviorSubject<User>;

    constructor() {
        this.currentUser = new BehaviorSubject(null);
    }

    loginUser(user: User): void {
        this.currentUser.next(user);
    }

    logoutUser(): void {
        this.currentUser.next(null);
    }

    getCurrentUser(): Observable<User> {
        return this.currentUser.asObservable().share();
    }

}
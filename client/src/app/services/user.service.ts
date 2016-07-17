import {User} from "../models/user.model";
import {Observable, BehaviorSubject} from "rxjs/Rx";
import {ApiService} from "./api.service";
import {Injectable} from "@angular/core";

@Injectable()
export class UserService {
    private currentUser: BehaviorSubject<User>;

    constructor(private apiService: ApiService) {
        this.currentUser = new BehaviorSubject(null);
        this.apiService.getActiveUser().subscribe(user => {
            this.currentUser.next(user);
        }, err => {
            console.warn("[" + err.status + "] " + err.statusText);
        });
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
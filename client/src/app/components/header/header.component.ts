import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {UserService} from "../../services/user.service";
import {User} from "../../models/user.model";

@Component({
    moduleId: module.id,
    selector: 'stories-header',
    templateUrl: 'header.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
    private isUserLoggedIn: boolean;
    private currentUser: User;

    constructor(private userService: UserService) {
        this.userService.getCurrentUser().subscribe(user => {
            this.isUserLoggedIn = !!user;
            this.currentUser = user;
        });
    }

    private logOut(): void {
        this.userService.logoutUser();
    }
}
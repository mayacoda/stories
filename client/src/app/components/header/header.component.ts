import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {UserService} from "../../services/user.service";

@Component({
    moduleId: module.id,
    selector: 'stories-header',
    templateUrl: 'header.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent {
    isUserLoggedIn: boolean;

    constructor(private userService: UserService) {
        this.userService.getCurrentUser().subscribe(user => this.isUserLoggedIn = !!user);
    }
}
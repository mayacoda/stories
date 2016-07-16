import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {
    userObj;
    loginFailed: boolean;

    //@todo smarter form so loginFailed can be disabled on type
    constructor(private apiService: ApiService, private userService: UserService, private router: Router) {
        this.userObj = {
            user: '',
            password: ''
        };
    }

    login(form) {
        this.apiService.loginUser(form.user, form.password).subscribe(user => {
            this.userService.loginUser(user);
            this.router.navigate(['/']);
        }, err => {
            console.error(err);
            this.loginFailed = true;
        });
    }
}
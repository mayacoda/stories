import {Directive} from "@angular/core";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
@Directive({
    selector: "auth-protected"
})
export class AuthProtectedDirective {
    constructor(private userService: UserService, private router: Router, private location: Location) {
        this.userService.getCurrentUser().filter(user => !user).subscribe(() => {
            this.location.replace("/");
            this.router.navigate(["login"]);
        });
    }
}
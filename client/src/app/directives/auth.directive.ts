import {Directive} from "@angular/core";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Directive({
    selector: "[authProtected]"
})
export class AuthProtectedDirective {
    constructor(private userService: UserService, private router: Router) {
        this.userService.getCurrentUser().filter(user => !user)
            .distinctUntilChanged()
            .subscribe(() => {
            this.router.navigate(["/login"]);
        });
    }
}
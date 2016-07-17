import {Component} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ROUTER_DIRECTIVES, Router} from "@angular/router";
import {HTTP_PROVIDERS} from "@angular/http";
import {ApiService} from "./services/api.service";
import {UserService} from "./services/user.service";
import {CTAComponent} from "./components/call-to-action/cta.component";

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES, CTAComponent],
    providers: [HTTP_PROVIDERS, ApiService, UserService]
})
export class AppComponent {
    private showCTA: boolean;

    constructor(private userService: UserService, private router: Router) {

        const isNotLoginPage = this.router.events.map(event => event.url !== '/login');
        const noUser =  this.userService.getCurrentUser().map(user => !(!!user));
        isNotLoginPage
            .combineLatest(noUser, (page, user) => page && user)
            .subscribe(res => this.showCTA = res);
    }
}

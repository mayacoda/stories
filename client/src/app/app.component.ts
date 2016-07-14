import {Component} from "@angular/core";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {ApiService} from "./services/api.service";
import {UserService} from "./services/user.service";

@Component({
    moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css'],
    directives: [HeaderComponent, FooterComponent, ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS, ApiService, UserService]
})
export class AppComponent {

    constructor() {
    }
}

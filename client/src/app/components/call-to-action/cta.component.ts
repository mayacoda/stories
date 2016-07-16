import {Component} from "@angular/core";
import {ApiService} from "../../services/api.service";

@Component({
    moduleId: module.id,
    selector: 'cta',
    templateUrl: 'cta.component.html'
})
export class CTAComponent {

    constructor(private apiService: ApiService) {
    }

    registerUser(userEmail: string) {
        this.apiService.registerUser(userEmail)
    }

}
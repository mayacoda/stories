import {Component} from "@angular/core";
import {ApiService} from "../../services/api.service";
import {Timeline} from "../../models/timeline.model";
import {ROUTER_DIRECTIVES} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
    moduleId: module.id,
    selector: 'public-timelines',
    templateUrl: 'public-timelines.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class PublicTimelinesComponent {
    timelineList: Observable<Timeline[]>;

    constructor(private apiService: ApiService) {
        this.timelineList = this.apiService.getPublicTimelines();
    }
}
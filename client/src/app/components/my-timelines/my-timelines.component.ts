import {Component, OnInit} from '@angular/core';
import {AuthProtectedDirective} from "../../directives/auth.directive";
import {ApiService} from "../../services/api.service";
import {Timeline} from "../../models/timeline.model";
import {Observable} from "rxjs/Rx";
import {TimelineCardComponent} from "../timeline-card/timeline-card.component";
import {NewTimelineButtonComponent} from "../new-timeline-button/new-timeline-button.component";

@Component({
    moduleId: module.id,
    selector: 'my-timelines',
    templateUrl: 'my-timelines.component.html',
    directives: [AuthProtectedDirective, TimelineCardComponent, NewTimelineButtonComponent]
})
export class MyTimelinesComponent implements OnInit {
    myTimelines: Observable<Timeline[]>;

    constructor(private apiService: ApiService) {
        this.myTimelines = this.apiService.getMyTimelines();
    }

    ngOnInit() {
    }

}
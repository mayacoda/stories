import {Component, Input, OnInit} from "@angular/core";
import {Timeline} from "../../models/timeline.model";
import {Observable} from "rxjs/Rx";
import {TimelineCardComponent} from "../timeline-card/timeline-card.component";

@Component({
    moduleId: module.id,
    selector: 'public-timelines-list',
    templateUrl: 'public-timelines-list.component.html',
    directives: [TimelineCardComponent]
})
export class PublicTimelinesListComponent {
    @Input() timelineList: Observable<Timeline[]>;

    constructor() {
    }

}
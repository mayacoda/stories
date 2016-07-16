import {Component, Input} from "@angular/core";
import {Timeline} from "../../models/timeline.model";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'timeline-card',
    templateUrl: 'timeline-card.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class TimelineCardComponent {
    @Input() timeline: Timeline;

    constructor() {

    }

}
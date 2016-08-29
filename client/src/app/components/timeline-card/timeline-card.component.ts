import {Component, Input, OnInit} from "@angular/core";
import {Timeline} from "../../models/timeline.model";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'timeline-card',
    templateUrl: 'timeline-card.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class TimelineCardComponent implements OnInit {
    ngOnInit(): any {
        return undefined;
    }

    @Input() timeline: Timeline;
    @Input() visibility: "public" | "private";

    constructor() {
    }

    deleteTimeline() {
        console.warn("deleting not yet implemented");
    }

}
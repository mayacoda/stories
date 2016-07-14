import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ApiService} from "../../services/api.service";
import {Timeline} from "../../models/timeline.model";
import {AuthProtectedDirective} from "../../directives/auth.directive";

@Component({
    moduleId: module.id,
    selector: 'public-timeline-view',
    templateUrl: 'public-timeline-view.component.html',
    directives: [AuthProtectedDirective]
})
export class PublicTimelineViewComponent implements OnInit {
    public subscription: any;
    public timeline: Timeline;

    constructor(private route: ActivatedRoute, private router: Router, private apiService: ApiService) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            const id = +params['id'];
            this.apiService.getPublicTimelineById(id).subscribe(timeline => {
                this.timeline = timeline;
            });
        })

    }

}
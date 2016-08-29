import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Component({
    moduleId: module.id,
    selector: 'new-timeline-button',
    templateUrl: 'new-timeline-button.component.html'
})
export class NewTimelineButtonComponent implements OnInit {
    constructor(private apiService: ApiService) {
    }

    addTimeline(name: string) {
        this.apiService.createTimeline(name);
    }

    ngOnInit() { }
    
}
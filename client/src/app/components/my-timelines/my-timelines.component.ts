import {Component, OnInit} from '@angular/core';
import {AuthProtectedDirective} from "../../directives/auth.directive";

@Component({
    moduleId: module.id,
    selector: 'my-timelines',
    templateUrl: 'my-timelines.component.html',
    directives: [AuthProtectedDirective]
})
export class MyTimelinesComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}
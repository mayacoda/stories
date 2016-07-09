import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'stories-header',
    templateUrl: 'header.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
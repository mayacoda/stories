import {MyTimelinesComponent} from './components/my-timelines/my-timelines.component';
import {provideRouter, RouterConfig} from '@angular/router';
import {PublicTimelinesComponent} from "./components/public-timelines/public-timelines.component";
import {PublicTimelineViewComponent} from "./components/public-timeline-view/public-timeline-view.component";
import {LoginComponent} from "./components/login/login.component";

export const routes: RouterConfig = [
    {
        path: '',
        component: PublicTimelinesComponent
    },
    {
        path: 'public/:timelineId',
        component: PublicTimelineViewComponent
    },
    {
        path: 'my-timelines',
        component: MyTimelinesComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
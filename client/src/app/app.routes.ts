import {MyTimelinesComponent} from './my-timelines/my-timelines.component';
import {provideRouter, RouterConfig} from '@angular/router';
import {PublicTimelinesComponent} from "./public-timelines/public-timelines.component";

export const routes: RouterConfig = [
    {path: '', component: PublicTimelinesComponent},
    {path: 'my-timelines', component: MyTimelinesComponent}
    // { path: 'heroes', component: HeroListComponent },
    // { path: 'hero/:id', component: HeroDetailComponent }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
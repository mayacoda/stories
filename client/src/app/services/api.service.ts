import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable"
import {Timeline} from "../models/timeline.model";
import {User} from "../models/user.model";

@Injectable()
export class ApiService {
    // url to temporary mock API
    // private endpoint: string = "http://private-2c7704-storiesapi1.apiary-mock.com";
    private endpoint: string = "localhost:8000/api";

    constructor(private http: Http) {
    }

    loginUser(user: string, password: string) {
        return this.http.post(this.endpoint + '/login', {user, password}).map(res => res.json());
    }

    getPublicTimelines(): Observable<Timeline[]> {
        return this.http.get(this.endpoint + '/public').map(res => res.json());
    }

    getPublicTimelineById(id: number): Observable<Timeline> {
        return this.http.get(this.endpoint + '/public/' + id).map(res => res.json());
    }

    getMyTimelines(): Observable<Timeline[]> {
        return this.http.get(this.endpoint + '/me/timeline').map(res => res.json().map(item => new Timeline(item)));
    }

    registerUser(name: string, email: string): Observable<User> {
        return this.http.post(this.endpoint + "/register/", {
            name, email
        }).map(res => res.json());
    }

    getActiveUser(): Observable<User> {
        return this.http.get(this.endpoint + '/me').map(res => res.json());
    }

    createTimeline(name: string): Observable<Timeline> {
        return this.http.post(this.endpoint + '/me/timeline', {
            timeline: name
        }).map(res => res.json());
    }
}
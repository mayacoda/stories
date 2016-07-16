import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable"
import {Timeline} from "../models/timeline.model";
import {User} from "../models/user.model";

@Injectable()
export class ApiService {
    // url to temporary mock API
    private endpoint: string = "http://private-2c7704-storiesapi1.apiary-mock.com";

    constructor(private http: Http) {}

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
        console.warn("Not yet implemented");
        return <Observable<Timeline[]>> Observable.empty();
    }

    registerUser(email: string): Observable<User> {
        console.warn("not yet implemented");
        return <Observable<User>> Observable.empty();
    }

}
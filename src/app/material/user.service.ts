import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// import { environment } from '@environments/environment';
import {User} from '../models/user';
const apiUrl = 'http://localhost:4000';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getByUsername(username: string) {
        return this.http.get(`${apiUrl}/user/username/` + username);
    }

    getById(id: number) {
        return this.http.get(`${apiUrl}/users/${id}`);
    }
    delete(id: number) {
        return this.http.delete(`${apiUrl}/users/${id}`);
    }
}

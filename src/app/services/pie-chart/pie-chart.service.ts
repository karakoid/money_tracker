import { Injectable } from '@angular/core';
import {HttpService} from "../http/http.service";

@Injectable({
  providedIn: 'root'
})
export class PieChartService {

  constructor(private http: HttpService) { }

  requestData() {
    const url = 'https://moneytrackerbe.herokuapp.com/api/statistics';
    return this.http.get(url);
  }
}

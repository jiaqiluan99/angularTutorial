import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from 'src/app/Shared/Models/Job';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http:HttpClient) { }

  getAllJobs():Observable<Job[]> {
    let headers = new HttpHeaders();
    headers = headers.set('Ocp-Apim-Subscription-Key', '9dd3ffa0b8254684903f4349e9902870');
    return this.http.get<Job[]>("https://march2023apigatewayjl.azure-api.net/recruiting/api/Jobs", {
      headers: {'Ocp-Apim-Subscription-Key':'9dd3ffa0b8254684903f4349e9902870'}
    });
  }
}

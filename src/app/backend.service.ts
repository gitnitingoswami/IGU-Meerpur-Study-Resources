import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import {ContributeComponent} from './contribute/contribute.component';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  addClassBackend(department_name : string, class_name : string) {
    return this.http.post(`https://apex.oracle.com/pls/apex/honeyyadav/igumeerpur/class/?department_name=${department_name}&class_name=${class_name}`, "");
  }
  addDepartmentBackend(department_name : string) {
    return this.http.post(`https://apex.oracle.com/pls/apex/honeyyadav/igumeerpur/department/?department_name=${department_name}`, "");
  }

  getDepartmentList() {
    return this.http.get('https://apex.oracle.com/pls/apex/honeyyadav/igumeerpur/department/');
  }

  getClassList() {
    return this.http.get('https://apex.oracle.com/pls/apex/honeyyadav/igumeerpur/class/');
  }

  getClassListForDept(department_name : string) {
    return this.http.get(`https://apex.oracle.com/pls/apex/honeyyadav/igumeerpur/class/${department_name}/`);
  }

  uploadFile(file : File) {
    const url = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=media';
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + ContributeComponent.access_token);
    const req = new HttpRequest('POST', url, file, {
      reportProgress: true,
      headers: headers
    });
    return this.http.request(req);
  }

  getAccessToken(){
    let body = { };
    body['client_id'] = "368650062066-u4sgpd1lc1bjlnpig7o5vsofenvvlp7s.apps.googleusercontent.com";
    body['client_secret'] = "u-VEQuVvdTwfRS9a_zyw6YTM";
    body['refresh_token'] = "1//04Z2c1P4g8mSwCgYIARAAGAQSNwF-L9IrVALnv7RG4BUHeKht94uQG4wqR74Ale0uyg71dmZiQtYCDzVEaoRGyf6PVxdeXXtRBvM";
    body['grant_type'] = "refresh_token";

    return this.http.post("https://oauth2.googleapis.com/token", body);
  }
}

import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import * as myGlobals from '../globals'

@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  department_list: any;
  class_list: any;
  selected_department: string = "";
  loading_department: boolean = true;
  department_loaded: boolean = false;
  file_label: string = "Choose file";
  file_not_selected: boolean = false;
  percentUploaded : string = "0%";
  single_file;
  submit : string = "Upload & Submit";
  public static access_token : string = "";

  constructor(private service: BackendService) { }

  ngOnInit(): void {
    this.service.getDepartmentList()
      .subscribe((res) => {
        console.log(res['items']);
        this.department_list = res['items'];
        this.department_loaded = true;
        this.selected_department = (document.getElementById('department'))['value'].toString();
      });
    this.service.getAccessToken()
      .subscribe((res) => {
        console.log(res);
        ContributeComponent.access_token = res['access_token'];
        // myGlobals.access_token = res['access_token'];
        console.log(ContributeComponent.access_token);
      });
  }

  onDeptChange() {
    this.loading_department = true;
    console.log((document.getElementById('department'))['value']);
    this.selected_department = (document.getElementById('department'))['value'].toString();
    this.service.getClassListForDept(this.selected_department)
      .subscribe((res) => {
        console.log(res['items']);
        this.class_list = res['items'];
        this.loading_department = false;
      });
  }

  onFileChange($event) {
    console.log($event.target.files.length);
    // console.log($event.target.files[0].name);
    if ($event.target.files.length > 0) {
      this.file_label = $event.target.files[0].name;
      this.single_file = $event.target.files[0];
      this.file_not_selected = false;
    } else {
      this.file_label = "Choose file";
    }
  }

  uploadFile($event : any) {
    $event.preventDefault();
    const number_of_files = document.getElementById('paperFile')['files']['length'];
    if (number_of_files <= 0) {
      this.file_not_selected = true;
      return;
    }

    const file = document.getElementById('paperFile')['files'][0];

    console.log("Uploading files . . . . ");

    this.service.uploadFile(file)
      .subscribe(event => {
        // Via this API, you get access to the raw event stream.
        // Look for upload progress events.
        if (event['type'] === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          const percentDone = Math.round(100 * event['loaded'] / event['total']);
          this.percentUploaded= percentDone + "%";
          console.log(`File is ${percentDone}% uploaded.`);
        } else if (event instanceof HttpResponse) {
          console.log(event);
          console.log('File is completely uploaded!');
        }
      });
  }

}

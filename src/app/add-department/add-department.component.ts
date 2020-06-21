import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  department_name : string;

  department_name_error : string = "none";

  constructor(private service : BackendService) { }

  ngOnInit(): void {
  }

  addDepartment($event){
    $event.preventDefault();

    this.department_name_error="loading";
    this.service.addDepartmentBackend(this.department_name)
      .subscribe((res)=>{
        console.log(res['status']);
        if (res['status']=='0') {
          this.department_name_error="already_exists";
        } else if(res['status']=='1'){
          this.department_name_error="success";
        }
      },
      (error)=>{
        this. department_name_error="error";
      });
  }

}

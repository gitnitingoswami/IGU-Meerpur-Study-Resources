import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.css']
})
export class AddClassComponent implements OnInit {

  class_name: string = "";
  class_name_error:string = "none";
  department_list : any;
  department_loaded : boolean = true;

  constructor(private service : BackendService) { }

  ngOnInit(): void {
    this.service.getDepartmentList()
    .subscribe((res)=>{
      this.department_list=res['items'];
      this.department_loaded=false;
    });
  }

  setClassNameError(error){
    console.log("setClassNameError called");
    this.class_name_error = error;
  }
  addClass($event){
    $event.preventDefault();

    if (this.class_name=="") {
      console.log("Class name is empty."); 
      this.class_name_error="empty";
      return;
    }

    this.class_name_error="loading";
    const selected_department = (document.getElementById('department'))['value'].toString();
    this.service.addClassBackend(selected_department, this.class_name)
      .subscribe((res)=>{
        // console.log(res['status']);
        if (res['status']=='0') {
          this.class_name_error="already_exists";
        } else if(res['status']=='1'){
          this.class_name_error="success";
          this.class_name="";
        }
      },
      (error)=>{
        this. class_name_error="error";
      });
  }

}

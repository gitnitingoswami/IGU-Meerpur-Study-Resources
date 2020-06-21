import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  classes : any;

  constructor(http : HttpClient) {
    http.get('https://apex.oracle.com/pls/apex/honeyyadav/igumeerpur/class/')
      .subscribe((response : any)=>{
        this.classes = response.items;
        console.log(this.classes);        
      })
  }

  ngOnInit(): void {
  }

}

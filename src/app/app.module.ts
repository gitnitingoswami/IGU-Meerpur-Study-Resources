import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { ContributeComponent } from './contribute/contribute.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddClassComponent } from './add-class/add-class.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    CardComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent,
    AdminComponent,
    SuperAdminComponent,
    ContributeComponent,
    AddDepartmentComponent,
    AddClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

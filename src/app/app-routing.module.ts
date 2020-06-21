import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CardComponent } from './card/card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { ContributeComponent } from './contribute/contribute.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AddClassComponent } from './add-class/add-class.component';


const routes: Routes = [
  {
    path: '',
    component: CardComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'super-admin',
    component: SuperAdminComponent
  },
  {
    path: 'contribute',
    component: ContributeComponent
  },
  {
    path: 'contribute/add-department',
    component: AddDepartmentComponent
  },
  {
    path: 'contribute/add-class',
    component: AddClassComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

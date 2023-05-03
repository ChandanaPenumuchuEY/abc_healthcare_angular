import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';

import { EditComponent } from './adminpage/edit/edit.component';
import { UserdataComponent } from './adminpage/userdata/userdata.component';
import { FinalComponent } from './userpage/final/final.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'final',
    component:FinalComponent
  },

  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'userpage',
    component:UserpageComponent
  },
  {
    path:'adminpage',
    component:AdminpageComponent
  },
  
  {
    path:'edit',
    component:EditComponent
  },
  {
    path:'add',
    component:AdminpageComponent
  },
  {
    path:'userdata',
    component:UserdataComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import {HttpClientModule} from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { UserheaderComponent } from './userpage/userheader/userheader.component';
import { EditComponent } from './adminpage/edit/edit.component';
import { AdminheaderComponent } from './adminpage/adminheader/adminheader.component';
import { UserdataComponent } from './adminpage/userdata/userdata.component';
import { FinalComponent } from './userpage/final/final.component';


@NgModule({
  declarations: [
    AppComponent,HeaderComponent,
    LoginComponent, RegisterComponent,
    AdminComponent, UserpageComponent, AdminpageComponent, UserheaderComponent, EditComponent, AdminheaderComponent, UserdataComponent, FinalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

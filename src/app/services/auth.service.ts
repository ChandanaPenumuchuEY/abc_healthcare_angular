import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  baseServerUrl="https://localhost:44308/api/";



  deleteMedicine(name:string)
  {
return this.http.delete(this.baseServerUrl+"Medicine/"+name);

  }
  deleteUser(name:string)
  {
return this.http.delete(this.baseServerUrl+"Users/"+name);

  }

  addMedicine(medicine:Array<String>)
  {
    return this.http.post(this.baseServerUrl+"Medicine/CreateMedicine",{
      name:medicine[0],
      price:Number(medicine[1]),
      image:medicine[2],
      seller:medicine[3],
      description:medicine[4]
    },{
      responseType:'text',
    });

  }
    registerUser(user:Array<String>){
        return this.http.post(this.baseServerUrl+"Users/CreateUser",{
          username:user[0],
          mail:user[1],
          contact:Number(user[2]),
          password:user[3]
        },{
          responseType:'text',
        });
    }
    loginUser(logininfo:Array<string>)
    {
      return this.http.post(this.baseServerUrl+"Users/LoginUser",{username:logininfo[0],
        password:logininfo[1]
      },{
        responseType:'text',
      });
    }
    adminUser(info:Array<string>)
    {
      return this.http.post(this.baseServerUrl+"Admin/AdminUser",{username:info[0],
        password:info[1]
      },{
        responseType:'text',
      });
    }
    getMedicine(){
      return this.http.get(this.baseServerUrl+"Medicine/MedicineDetails");
    }
    getUsers(){
      return this.http.get(this.baseServerUrl+"Users/UserDetails");
    }
  
}

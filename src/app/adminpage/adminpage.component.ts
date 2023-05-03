import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminpage',
  templateUrl: './adminpage.component.html',
  styleUrls: ['./adminpage.component.css']
})
export class AdminpageComponent {
  value:string ="";
  image:string="";
  constructor(private authservice:AuthService,private router: Router){

  }
  medicineSubmited(name:string,price:string,seller:string,description:string)
  {
   
this.image="/assets/"+name+".jpg";
    this.authservice.addMedicine([name,price,this.image,seller,description]).subscribe(res=>{
      console.log(res);
      
    })
    this.value="Successfully Added ! ";
    alert("Succesfully Added");
    this.router.navigateByUrl("/add");
  }
}

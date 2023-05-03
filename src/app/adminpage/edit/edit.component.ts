import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  medicines: any[] = [];
  data:any[]=[];
  cart: any[] = [];
  constructor(private medicine: AuthService,private router: Router){
    this.medicine.getMedicine()
    .subscribe((data: any) => {
      this.medicines = data;
    });
  
}
deleteMedicine(name:string){

  console.log("before delete");
this.medicine.deleteMedicine(name).subscribe(res=>{console.log(res)});
this.router.navigateByUrl("/edit");
}

}

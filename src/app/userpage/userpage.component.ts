import { Component,Output,EventEmitter } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent {
  data="this is parent component";
 // @Output() cartChanged = new EventEmitter<any>();
  medicines: any[] = [];
  cart: any[] = [];
  sum:number=0;
  constructor(private medicine: AuthService,private router:Router){
    this.medicine.getMedicine()
    .subscribe((data: any) => {
      this.medicines = data;
    });
  
}
addToCart(medicine: any){
  this.cart.push(medicine);
  this.sum=0;
    for (let car of this.cart) {
      this.sum += car.price;
    }
 // this.cartdata.sharedData =this.cart;
}

deleteFromCart(medicine:any)
{
  let index = this.cart.indexOf(medicine);
  if (index !== -1) {
    this.cart.splice(index, 1);
  }
  this.sum=0;
  for (let car of this.cart) {
    this.sum += car.price;
  }

}
finalpage()
{
this.router.navigateByUrl("/final");
}
}

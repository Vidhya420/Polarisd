import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  value='im parent'
  name="vidhya"
  isbool=true
   user=''
  img='https://images.unsplash.com/photo-1683009427051-00a2fe827a2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'

constructor(private data:DataService){}

a=this.data.pass
receive1:any;

  show(){

    this.img='https://plus.unsplash.com/premium_photo-1705705601503-9a39e3cd4604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8'

  }

receive(data:any){
this.receive1=data
}

}

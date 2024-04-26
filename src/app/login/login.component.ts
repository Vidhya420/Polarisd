import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Input() receive:any
  @Output() output=new EventEmitter()

  valuechild='im child'

  constructor(private data:DataService){

  }

  a=this.data.pass

  send(){
    this.output.emit(this.valuechild)
  }

}

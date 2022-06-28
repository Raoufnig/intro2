import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chatlogin',
  templateUrl: './chatlogin.component.html',
  styleUrls: ['./chatlogin.component.scss']
})
export class ChatloginComponent implements OnInit {

  

  ngOnInit(): void {
  }
  constructor(private router: Router) {}

  gotoChat(){
      this.router.navigate(['/Chat']);  // define your component where you want to go
  }
  gotoRegistration(){
    this.router.navigate(['/Registration']);

  }

}

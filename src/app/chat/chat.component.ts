import { DOCUMENT } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core/testing';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { 

  }

  ngOnInit(): void {
    
  
  }
    
  navbar(){
    document.getElementsByClassName(".overlay, .menuWrap");
          document.getElementsByClassName(".menu");
  }
  
}



import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-side',
  templateUrl: './header-side.component.html',
  styleUrls: ['./header-side.component.css']
})
export class HeaderSideComponent implements OnInit {
  public oppend = true;
  @Input() notificPanel;
  constructor() { }

  ngOnInit(): void {
  }
  LoadOpend(){
    if (this.oppend){
      this.oppend = false
    }else{
      this.oppend = true
    }
    
    }
      
  }

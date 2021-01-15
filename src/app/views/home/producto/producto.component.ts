import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { SnotifyService } from 'ng-snotify';
import { Username } from 'src/app/shared/interfaces/username';
import { UsernameService } from 'src/app/shared/services/username.service';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
  /* animations : egretAnimations */
})
export class ProductoComponent implements OnInit {

  public title:string     =  'Jesus'
  public Notificacion     =   2;
  public showSpinner      =   false
  public UserData:        Array<Username> = [];
  public datos:           any;
  constructor(
              private snotifyService:   SnotifyService,
              private router:           Router,
              private apiServiceUser:   UsernameService
              ) 
              {}
  ngOnInit(): void {
    this.UserLista()
    console.log(this.apiServiceUser)
  }
  cancel(){
  this.snotifyService.confirm('are you sure to cancel the petty cash','cancelación',{
    timeout: 5000,
      showProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      buttons:[
        {text:'si', action:()=>{
          console.log("Jesus Alvear Meriño")
          this.snotifyService.remove();
        }},
        {text: 'No', action:() => this.snotifyService.remove()}
      ]
  })
 }
 LoadSpinner(){
  if (this.showSpinner == false){
    this.showSpinner = true
    setTimeout(() =>{
      this.showSpinner
    }, 5000)
  }else{
    this.showSpinner = false;
  }
   
 }

 Nvegation(){
   this.router.navigateByUrl('Sesseson/Login')
 }

UserLista(){
  this.apiServiceUser.baseUrl
  console.log(this.apiServiceUser)
 
 } 

}

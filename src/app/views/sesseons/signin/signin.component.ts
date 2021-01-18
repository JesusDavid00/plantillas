import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  public SesionActiva: boolean    = false;
  public Incorrecto:   boolean    = true;
  public showSpinner:  boolean    = false;
  public Login:        FormGroup;


  constructor(private router:   Router) {
      this.Login = new FormGroup({
      Username:    new FormControl(null,Validators.required),
      Password:    new FormControl(null,Validators.required)
    });
  }
  ngOnInit(): void {}
  submit(){
      this.showSpinner
      console.log("Estamos bajo ataque enemigo, no mueran por si mueron los mato", this.Login.value)
      if(this.Login.value.Username == "alvearjd" && this.Login.value.Password == "$dkjs.3tr1ng?cls"){
        this.showSpinner = true
        setTimeout(() =>{
          console.log("Bienvenido!" , this.Login.value.Username)
          this.router.navigateByUrl('/Home/producto')
          console.log(this.router.navigate)
          this.SesionActiva = true
          this.Incorrecto  = false
        }, 5000)

      }else{
        console.log("Incorrecto!" , this.SesionActiva)
        this.SesionActiva = false
        this.Incorrecto  = false

      }
  }
}

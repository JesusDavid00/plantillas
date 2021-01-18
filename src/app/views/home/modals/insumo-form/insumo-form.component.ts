import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ItemsElement } from 'src/app/shared/interfaces/items-element';
import { InsumosComponent } from '../../insumos/insumos.component';

@Component({
  selector: 'app-insumo-form',
  templateUrl: './insumo-form.component.html',
  styleUrls: ['./insumo-form.component.css']
})
export class InsumoFormComponent implements OnInit {
  public DatosPersonal:  FormGroup;
  constructor(
             public dialogRef: MatDialogRef<InsumoFormComponent>,
             @Inject(MAT_DIALOG_DATA) public data: ItemsElement ) {
        this.DatosPersonal = new FormGroup({
          ID:        new  FormControl((data != undefined) ?  data.ID       : 12),
          name:      new  FormControl((data != undefined) ?  data.name     : null,Validators.required),
          lastName:  new  FormControl((data != undefined) ?  data.lastName : null,Validators.required),
          age:       new  FormControl((data != undefined) ?  data.age      : null,Validators.required),
          address:   new  FormControl((data != undefined) ?  data.address  : null,Validators.required)
        });
      }

  ngOnInit(): void {}

  onSubmit(){
    const datos = this.DatosPersonal.value;
  const dataUserName  = {ID: 12 ,  name: "Jesus" ,lastName: "Alvaar" , age: 21 ,address: "Jesus"  }

    this.dialogRef.close(dataUserName);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}

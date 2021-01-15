import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemsElement } from 'src/app/shared/interfaces/items-element';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InsumoFormComponent } from '../modals/insumo-form/insumo-form.component';


@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {

  columnsToDisplay:string[] = ['ID','name','lastName','age','address','Actions'];
  public  myDataArray = ELEMENT_DATA;
  public  numero:        number = 1;
  public  nombre:        string;
  public  Datos:         string;
  public  DatosPersonal: FormGroup;

  constructor(public dialog:  MatDialog) { }

  ngOnInit(): void {}

  opendFormDialog(row:  ItemsElement = {
    ID:        null,
    name:      '',
    lastName:  '',
    age:       null,
    address:   '',
  }): void{
     const dialogRef  = this.dialog.open(InsumoFormComponent, {
      width: '700px',
      data: row
  });
  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
  })
 }

 deleteItem(){
   console.log("boooooo");
 }
}
const ELEMENT_DATA: ItemsElement[]=[
    {ID: 1 ,name:'Jesus David', lastName: 'alvear', age:21 , address: 'cra 24'},
    {ID: 2 ,name:'Germinton Antonio' , lastName: 'alvear', age:20 , address: 'cra 23'},
    {ID: 3 ,name:'Jose Carlos' , lastName: 'Gutierez', age:22 , address: 'cra 29'},
    {ID: 4 ,name:'Jhonatan Andres' , lastName: 'Lopez', age:20 , address: 'cra 60'}
];

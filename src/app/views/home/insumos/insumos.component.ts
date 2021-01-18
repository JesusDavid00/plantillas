import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ItemsElement } from 'src/app/shared/interfaces/items-element';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { InsumoFormComponent } from '../modals/insumo-form/insumo-form.component';
import { Username } from 'src/app/shared/interfaces/username';
import { UsernameService } from 'src/app/shared/services/username.service';
import { IElemento } from 'src/app/shared/interfaces/ielemento';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent implements OnInit {

  columnsToDisplay:string[] = ['ID','name','lastName','age','address','Actions'];
  public elementData:    ItemsElement[];
  public  numero:        number = 1;
  public  nombre:        string;
  public  Datos:         string;
  public  DatosPersonal: FormGroup;

  constructor(public dialog:    MatDialog,
              private apiService: UsernameService,
              private snack:      MatSnackBar ) { }

  ngOnInit(): void {
    this.currentData();
  }


  currentData(){
    this.apiService.GetDostos().subscribe(response => this.elementData = response)
  }

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
  dialogRef.afterClosed().subscribe((result: ItemsElement) => {
    if(result){
      this.apiService.Post(result).subscribe(datos => { this.elementData.push(datos)})
      console.log("Datos Formulario user: ",result);
      this.snack.open("DatosResult: '{{result}}'", "OK" , {duration: 5000});
      this.currentData();
    }else{
      this.snack.open("No hay datos para mostrar: '{{result}}'", "OK" , {duration: 5000});
    }
    console.log('The dialog was closed');
  });
 }
 deleteItem(){
   console.log("boooooo");
 }
}

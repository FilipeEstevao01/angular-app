import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { submit } from '@angular/forms/signals';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  enviaFormulario = inject(EnviaFormulario); 
//submit() {
//throw new Error('Method not implemented.');
//}
  name = 'Filipe';
  idButton = 'button';
deveMostrarTitulo = false;
listItems = ["filipe", "dois", "tres"];


@Input() minhaPropsDeFora!: string;

@Output() emitindoValorName = new EventEmitter<string>();

 

//atualizaBoleano() {
    //this.meuBooleano = true;
 //}
 
 submit(){
  this.emitindoValorName.emit(this.name);
  this.enviaFormulario.enviaInformacaoParaBackend("enviando do home");  
 }

}

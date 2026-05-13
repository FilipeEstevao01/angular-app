import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EnviaFormulario {

  constructor() { }

  enviaInformacaoParaBackend(event: string) {
    console.log("enviando para o backend")
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IPesquisaFrutas } from '../../models/pesquisa-frutas';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pesquisa',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './pesquisa.html',
  styleUrl: './pesquisa.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PesquisaComponent {
  formPesquisa: FormGroup;

  frutas = ['Banana', 'Laranja', 'Uva', 'Manga'];

  constructor(private fb: FormBuilder) {
    this.formPesquisa = this.fb.group({
      nome: ['', Validators.required],
      endereco: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      porcoesDiarias: ['', Validators.required],
      frutasPreferidas: [[]],
      querPromocoes: [false]
    });
  }

  onSubmit() {
    if (this.formPesquisa.invalid) {
      alert('Preencha todos os campos!!');
      return

    }


    const frutasSelecionadas = this.formPesquisa.value.frutasPreferidas;
    if (frutasSelecionadas.length < 2) {
      alert("Escolha pelo menos duas Frutas")
    }

    const pesquisa: IPesquisaFrutas = this.formPesquisa.value;

    console.log(pesquisa);

    alert(`Obrigado por fazer a pesquisa, ${pesquisa.nome}`)
  }
}

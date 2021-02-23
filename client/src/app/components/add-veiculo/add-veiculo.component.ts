import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo.model';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-add-veiculo',
  templateUrl: './add-veiculo.component.html',
  styleUrls: ['./add-veiculo.component.css']
})
export class AddVeiculoComponent implements OnInit {
  hidden = false
  buttonText = 'salvar'
  buttonSave = true
  messageSuccess = 'Veículo salvo com sucesso!'
  spinnerMode: ProgressSpinnerMode = 'determinate';
  veiculo: Veiculo = {
    placa: '',
    chassi: undefined,
    renavam: undefined,
    modelo: undefined,
    marca: '',
    ano: undefined
  };
  submitted = false;
  inputs = [
    {label: 'Placa', bind: 'placa'},
    {label: 'Chassi', bind: 'chassi'},
    {label: 'Renavam', bind: 'renavam'},
    {label: 'Marca', bind: 'marca'},
    {label: 'Modelo', bind: 'modelo'},
    {label: 'Ano', bind: 'ano'} 
  ]

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
  }
  saveVeiculo(): void {
    this.hidden = true
    const data = {
      placa: this.veiculo.placa,
      chassi: this.veiculo.chassi,
      renavam: this.veiculo.renavam,
      modelo: this.veiculo.modelo,
      marca: this.veiculo.marca,
      ano: this.veiculo.ano
    };
    this.buttonSave = false;
    this.spinnerMode = 'indeterminate';
    this.veiculoService.create(data)
     .subscribe(
      res => {
        console.log(res)
        setTimeout(()=> {
          this.buttonSave = true;
          this.spinnerMode = 'determinate';
          this.submitted = true;
        }, 1000)
      },
      error => {
        console.log(error)
    });
  }

  newVeiculo(): void {
    this.submitted = false;
    this.veiculo = {
      placa: '',
      chassi: undefined,
      renavam: undefined,
      modelo: undefined,
      marca: '',
      ano: undefined
    };
  }
}

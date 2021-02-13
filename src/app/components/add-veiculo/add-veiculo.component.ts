import { Component, OnInit } from '@angular/core';
import { Veiculo } from 'src/app/models/veiculo.model';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-add-veiculo',
  templateUrl: './add-veiculo.component.html',
  styleUrls: ['./add-veiculo.component.css']
})
export class AddVeiculoComponent implements OnInit {

  veiculo: Veiculo = {
    placa: '',
    chassi: 0,
    renavam: 0,
    modelo: 0,
    marca: '',
    ano: 0
  };
  submitted = false;

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
  }
  
  saveVeiculo(): void {
    const data = {
      placa: this.veiculo.placa,
      chassi: this.veiculo.chassi,
      renavam: this.veiculo.renavam,
      modelo: this.veiculo.modelo,
      marca: this.veiculo.marca,
      ano: this.veiculo.ano
    };

    this.veiculoService.create(data)
      .subscribe(
        res => {
          console.log(res);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newVeiculo(): void {
    this.submitted = false;
    this.veiculo = {
      placa: '',
      chassi: 0,
      renavam: 0,
      modelo: 0,
      marca: '',
      ano: 0
    };
  }

}

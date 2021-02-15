import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo.model';

@Component({
  selector: 'app-veiculo-list',
  templateUrl: './veiculo-list.component.html',
  styleUrls: ['./veiculo-list.component.css']
})
export class VeiculoListComponent implements OnInit {
  
  veiculos?: Veiculo[];
  currentVeiculo?: Veiculo;
  currentIndex = -1;
  placa = '';
  chassi = 0;
  renavam = 0;
  modelo = 0;
  marca = '';
  ano = 0;

  constructor(
    private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router) 
  { }

  ngOnInit(): void {
  	this.retrieveVeiculos();
  }

  retrieveVeiculos(): void {
    this.veiculoService.getAll()
      .subscribe(
        data => {
          this.veiculos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveVeiculos();
    this.currentVeiculo = undefined;
    this.currentIndex = -1;
  }

  setActiveVeiculo(veiculo: Veiculo, index: number): void {
    this.currentVeiculo = veiculo;
    this.currentIndex = index;
  }

  removeAllVeiculos(): void {
    this.veiculoService.deleteAll()
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/mean/veiculos']);
          this.retrieveVeiculos();
        },
        error => {
          console.log(error);
        });
  }

  searchChassi(): void {
    this.currentVeiculo = undefined;
    this.currentIndex = -1;

    this.veiculoService.findByChassi(this.chassi)
      .subscribe(
        data => {
          this.veiculos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  deleteVeiculo(id: number): void {
    this.veiculoService.delete(id)
      .subscribe(
        res => {
          console.log(res);
          window.location.reload();
        },
        error => {
          console.log(error);
        });
  }

}

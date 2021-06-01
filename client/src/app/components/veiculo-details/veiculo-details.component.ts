import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo.model';

@Component({
  selector: 'app-veiculo-details',
  templateUrl: './veiculo-details.component.html',
  styleUrls: ['./veiculo-details.component.css']
})
export class VeiculoDetailsComponent implements OnInit {
  currentVeiculo: Veiculo = {
    placa: '',
    chassi: 0,
    renavam: 0,
    modelo: 0,
    marca: '',
    ano: 0,
  };
  message = '';

  constructor(
    private veiculoService: VeiculoService,
    private route: ActivatedRoute,
    private router: Router) 
  { }

  ngOnInit(): void {
  	this.message = '';
    this.getVeiculo(this.route.snapshot.params.id);
  }

  getVeiculo(id: string): void {
  this.veiculoService.get(id)
    .subscribe(
      data => {
        this.currentVeiculo = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });
  }

  updateVeiculo(): void {
  	this.message = '';

    this.veiculoService.update(this.currentVeiculo.id, this.currentVeiculo)
      .subscribe(
        res => {
          console.log(res);
          this.message = res.message ? res.message : 'Este veículo foi atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteVeiculo(): void {
    this.veiculoService.delete(this.currentVeiculo.id)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/']);
        },
        error => {
          console.log(error);
        });
  }

}

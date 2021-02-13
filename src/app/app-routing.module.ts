import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VeiculosListComponent } from './components/veiculos-list/veiculos-list.component';
import { VeiculoDetailsComponent } from './components/veiculo-details/veiculo-details.component';
import { AddVeiculoComponent } from './components/add-veiculo/add-veiculo.component';

const routes: Routes = [
  { path: '', redirectTo: 'veiculos', pathMatch: 'full' },
  { path: 'veiculos', component: VeiculosListComponent },
  { path: 'veiculos/:id', component: VeiculoDetailsComponent },
  { path: 'add', component: AddVeiculoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

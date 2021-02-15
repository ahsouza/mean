import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VeiculoListComponent } from './components/veiculo-list/veiculo-list.component';
import { VeiculoDetailsComponent } from './components/veiculo-details/veiculo-details.component';
import { AddVeiculoComponent } from './components/add-veiculo/add-veiculo.component';

const routes: Routes = [
  { path: '', redirectTo: 'add', pathMatch: 'full' },
  { path: '/mean/veiculos', component: VeiculoListComponent },
  { path: '/mean/veiculos/:id', component: VeiculoDetailsComponent },
  { path: '/mean/add', component: AddVeiculoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddVeiculoComponent } from './components/add-veiculo/add-veiculo.component';
import { VeiculoDetailsComponent } from './components/veiculo-details/veiculo-details.component';
import { VeiculoListComponent } from './components/veiculo-list/veiculo-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AddVeiculoComponent,
    VeiculoDetailsComponent,
    VeiculoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

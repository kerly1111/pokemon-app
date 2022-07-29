import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokemonComponent } from './pokemon.component';
import { PokemonRoutingModule } from "./pokemon-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    PokemonComponent
  ],
  imports: [
    PokemonRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [PokemonComponent]
})
export class PokemonModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPokemonComponent } from './admin-pokemon.component';
import {MainRoutingModule} from "../../main-routing.module";
import {CommonModule} from "@angular/common";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DialogComponent} from "../dialog/dialog.component";
import {of} from "rxjs";

describe('AdminPokemonComponent', () => {
  let component: AdminPokemonComponent;
  let fixture: ComponentFixture<AdminPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MainRoutingModule,
        CommonModule,
        MatDialogModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AdminPokemonComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Cargar todos los pokemon', () => {
    component.getAllPokemons();
    expect(component).toBeTruthy();
  });

  it('Modal nuevo pokemon', () => {
    component.newPokemon();
    expect(component).toBeTruthy();
  });

  it('Modal editar pokemon', () => {
    component.editPokemon();
    expect(component).toBeTruthy();
  });

  it('Modal de confirmacion para eliminar pokemon', () => {
    component.deletePokemon({
      id:1890,
      name: 'Pikachu',
      image: 'https:www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png',
      attack: 100,
      defense: 80,
      hp: 1000,
      type: 'n/a'
    });
    expect(component).toBeTruthy();
  });

  it('Buscar pokemon', () => {
    component.searchPokemon();
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import {PokemonService} from "../../../../shared/service/pokemon.service";
import {PokemonVo} from "../../../../shared/vo/pokemon-vo";
import {Form, FormControl} from "@angular/forms";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../dialog/dialog.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {constans} from "../../../../shared/constans/constans";
import {of} from "rxjs";
import {DialogConfirmComponent} from "../dialog-confirm/dialog-confirm.component";

@Component({
  selector: 'app-admin-pokemon',
  templateUrl: './admin-pokemon.component.html',
  styleUrls: ['./admin-pokemon.component.css']
})
export class AdminPokemonComponent implements OnInit {

  pokemonList: PokemonVo[] = [];
  pokemonListTemp: PokemonVo[] = [];
  search: FormControl;

  constructor(private pokemonService: PokemonService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
    this.search = new FormControl();
  }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokemonService.findAll().subscribe( pokemons => {
      this.pokemonList  = pokemons;
      this.pokemonListTemp  = pokemons;
    })
  }

  searchPokemon() {
    this.pokemonList = this.pokemonListTemp;
    this.pokemonList= this.pokemonList.filter(pokemon => {
      return pokemon.name?.toLocaleLowerCase().match(this.search.value.toLocaleLowerCase());
    });
  }

  openDialog(title: string, idPokemon?: number): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '800px',
      data: {
        title: title,
        idPokemon: !!idPokemon ? idPokemon : undefined
      },
    });
    dialogRef.afterClosed().subscribe({
      complete: () =>
        of(dialogRef.componentInstance.resultState())
          .subscribe({
            next: (response: boolean) => {
              if(response){
                this.snackBar.open(!!idPokemon ? constans.SERVICES.MESSAGES.POKEMON.UPDATE : constans.SERVICES.MESSAGES.POKEMON.SAVE,
                  'Cerrar', {
                  duration: 5000,
                  verticalPosition: 'top',
                  horizontalPosition: 'end',
                  panelClass: [constans.SERVICES.ALERT_COLOR.SUCCESS]
                });
                this.getAllPokemons();
              }
            }
        })
    });
  }

  newPokemon() {
    this.openDialog("Nuevo Pokemon",undefined);
  }

  editPokemon(idPokemon?: number) {
    this.openDialog("Editar Pokemon", idPokemon);
  }

  deletePokemon(pokemon: PokemonVo){
    if(!!pokemon){
      const dialogRef = this.dialog.open(DialogConfirmComponent, {
        width: '400px',
        data: {
          title: `¿Esta seguro que desea eliminar el pokemon "${pokemon.name}"?`
        },
      });
      dialogRef.afterClosed().subscribe((result: boolean) => {
        if(!!result && !!pokemon.id){
          this.pokemonService.deletePokemon(pokemon.id).subscribe(response => {
            if(response.success){
              this.snackBar.open(constans.SERVICES.MESSAGES.POKEMON.DELETE, 'Cerrar', {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'end',
                panelClass: [constans.SERVICES.ALERT_COLOR.SUCCESS]
              });
              this.getAllPokemons();
            }
          })
        }
      });
    }
  }
}

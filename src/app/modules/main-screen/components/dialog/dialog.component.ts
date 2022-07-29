import {Component, Inject, Input, OnInit, Optional} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PokemonVo} from "../../../../shared/vo/pokemon-vo";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {concat, of} from 'rxjs';
import {PokemonService} from "../../../../shared/service/pokemon.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {constans} from "../../../../shared/constans/constans";

export interface DialogData {
  title: string;
  idPokemon: number;

}

@Component({
  selector: 'pokemon-dialog',
  templateUrl: './dialog.component.html',
})

export class DialogComponent implements OnInit {

  requestForm: FormGroup;
  pokemon: PokemonVo;
  successResult: boolean;
  new: boolean;

  constructor(@Optional() public dialogRef: MatDialogRef<DialogComponent>,
              private pokemonService: PokemonService,
              private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) {  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    concat(
      of(this.initForm())
    ).subscribe({
      complete: () => {
        if(!!this.data.idPokemon){
          this.pokemonService.findById(this.data.idPokemon).subscribe((response: PokemonVo) => {
            this.requestForm.patchValue({
              id: response.id,
              name: response.name,
              image: response.image,
              attack: response.attack,
              defense: response.defense,
              hp: response.hp,
              type: response.type,
            });
            this.new = false;
          })
        }
      }
    })
  }

  initForm(): void{
    this.requestForm = new FormGroup({
      id: new FormControl(undefined, undefined),
      name: new FormControl(undefined, [Validators.required]),
      image: new FormControl(undefined, [Validators.required]),
      attack: new FormControl(0, [Validators.required]),
      defense: new FormControl(0, [Validators.required]),
      hp: new FormControl(0, [Validators.required]),
      type: new FormControl(undefined, [Validators.required])
    });
    this.new = true;
  }

  rangeAttack(value: number) {
    if (value >= 100) {
      return Math.round(value / 100);
    }
    return value;
  }

  rangeDefense(value: number) {
    if (value >= 100) {
      return Math.round(value / 100);
    }
    return value;
  }

  rangeHp(value: number) {
    if (value >= 100) {
      return Math.round(value / 100);
    }
    return value;
  }

  resultState(): boolean {
    return this.successResult;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save(): void {
    this.successResult = false;
    if(this.requestForm.valid){
      if(this.new){
        this.newPokemon();
      }else{
        this.updatePokemon();
      }
    }else{
      this.snackBar.open(constans.SERVICES.MESSAGES.POKEMON.VALIDATE.concat("\n")
          .concat(this.requestForm.controls['name'].invalid ? `${constans.SERVICES.MESSAGES.POKEMON.VALUES.NAME} \n` : '')
          .concat(this.requestForm.controls['image'].invalid ? `${constans.SERVICES.MESSAGES.POKEMON.VALUES.IMAGE} \n` : '')
          .concat(this.requestForm.controls['type'].invalid ? `${constans.SERVICES.MESSAGES.POKEMON.VALUES.TIPO} \n` : '')
        , 'Cerrar', {
        duration: 5000,
        verticalPosition: 'top',
        horizontalPosition: 'end',
        panelClass: [constans.SERVICES.ALERT_COLOR.ERROR]
      });
    }
  }

  newPokemon(): void {
    this.pokemonService.savePokemon({
      name: this.requestForm.controls["name"].value,
      image: this.requestForm.controls["image"].value,
      attack: this.requestForm.controls["attack"].value,
      defense: this.requestForm.controls["defense"].value,
      hp: this.requestForm.controls["hp"].value,
      type: this.requestForm.controls["type"].value,
      idAuthor: constans.SERVICES.BASE_SERVICES.AUTHOR
    }).subscribe(response => {
      this.pokemon = response;
      if(!!this.pokemon) {
        this.successResult = true;
        this.dialogRef.close();
      }else{
        this.snackBar.open(response.data, 'Cerrar', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass: [constans.SERVICES.ALERT_COLOR.ERROR]
        });
      }
    });
  }
  updatePokemon(): void{
    this.pokemonService.updatePokemon(this.data.idPokemon, {
      name: this.requestForm.controls["name"].value,
      image: this.requestForm.controls["image"].value,
      attack: this.requestForm.controls["attack"].value,
      defense: this.requestForm.controls["defense"].value,
      hp: this.requestForm.controls["hp"].value,
      type: this.requestForm.controls["type"].value,
      idAuthor: constans.SERVICES.BASE_SERVICES.AUTHOR
    }).subscribe(response => {
      this.pokemon = response;
      if(!!this.pokemon) {
        this.successResult = true;
        this.dialogRef.close();
      }else{
        this.snackBar.open(response.data, 'Cerrar', {
          duration: 5000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass: [constans.SERVICES.ALERT_COLOR.ERROR]
        });
      }
      });
  }
}

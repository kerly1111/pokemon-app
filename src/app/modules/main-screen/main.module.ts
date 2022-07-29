import {NgModule} from "@angular/core";
import { AdminPokemonComponent } from "./components/admin-pokemon/admin-pokemon.component";
import { DialogComponent } from "./components/dialog/dialog.component";
import { MainRoutingModule } from "./main-routing.module";
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSliderModule} from "@angular/material/slider";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {DialogConfirmComponent} from "./components/dialog-confirm/dialog-confirm.component";

@NgModule({
  declarations: [
    AdminPokemonComponent,
    DialogComponent,
    DialogConfirmComponent
  ],
  imports: [
    MainRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    MatDialogModule,
    MatSliderModule,
    MatSnackBarModule
  ],
  exports: [
    AdminPokemonComponent,
  ]
})
export class MainModule { }

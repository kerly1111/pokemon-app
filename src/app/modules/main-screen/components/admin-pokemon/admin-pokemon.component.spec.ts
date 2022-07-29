import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPokemonComponent } from './admin-pokemon.component';
import {MainRoutingModule} from "../../main-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSliderModule} from "@angular/material/slider";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {DialogComponent} from "../dialog/dialog.component";
import {DialogConfirmComponent} from "../dialog-confirm/dialog-confirm.component";
import {HttpClientModule} from "@angular/common/http";

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
        HttpClientModule
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
});

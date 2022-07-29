import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DialogComponent} from "./dialog.component";
import {MainRoutingModule} from "../../main-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatSliderModule} from "@angular/material/slider";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {HttpClientModule} from "@angular/common/http";
import {BrowserModule, By} from "@angular/platform-browser";
import {PokemonService} from "../../../../shared/service/pokemon.service";
import {PokemonVo} from "../../../../shared/vo/pokemon-vo";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MainRoutingModule,
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        FormsModule,
        MatDialogModule,
        MatSliderModule,
        MatSnackBarModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      declarations: [ DialogComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize', () => {
    component.data.idPokemon = 1754;
    component.ngOnInit();
    expect(component).toBeTruthy();
  });

  it('Debe retornar formulario invalido ', function () {
    component.requestForm.patchValue({
      name: 'Charmander'
    })
    expect(component.requestForm.invalid).toBeTrue();
  });

  it('Debe retornar formulario valido ', function () {
    component.requestForm.patchValue({
      name: 'Charmander',
      image: 'https://www.pngmart.com/files/13/Charmander-PNG-HD.png',
      attack: 60,
      defense: 40,
      hp: 100,
      type: 'Dragon',
    })
    expect(component.requestForm.invalid).toBeFalse();
  });

  it('Guardar un pokemon nuevo con datos imcompletos', function () {
    component.new = true;
    component.requestForm.patchValue({
      name: 'Charmander',
      image: 'https://www.pngmart.com/files/13/Charmander-PNG-HD.png',
      attack: 60,
      defense: 40
    });
    const btnElement = fixture.debugElement.query(By.css('#btnSave'));
    btnElement.nativeElement.click();
    expect(component).toBeTruthy();
  });

  it('Guardar un pokemon nuevo', function () {
    component.new = true;
    component.requestForm.patchValue({
      name: 'Charmander',
      image: 'https://www.pngmart.com/files/13/Charmander-PNG-HD.png',
      attack: 60,
      defense: 40,
      hp: 100,
      type: 'Dragon'
    });
    const btnElement = fixture.debugElement.query(By.css('#btnSave'));
    btnElement.nativeElement.click();
    expect(component.successResult).toBeFalse();
  });

  it('Actualizar un pokemon existente', function () {
    component.new = false;
    component.data.idPokemon = 1754;
    component.requestForm.patchValue({
      name: 'Pikachu',
      image: 'https:www.pngmart.com/files/2/Pikachu-PNG-Transparent-Image.png',
      attack: 100,
      defense: 80,
      hp: 1000,
      type: 'n/a'
    });
    const btnElement = fixture.debugElement.query(By.css('#btnSave'));
    btnElement.nativeElement.click();
    expect(component.successResult).toBeFalse();
  });

  it('Buscar un pokemon existente', function () {
    const pokemonService = TestBed.inject(PokemonService);
    pokemonService.findById(1754).subscribe((response: PokemonVo) => {
      component.successResult =  !!response ? true : false;
      expect(component.successResult).toBeTrue();
    });

  });

  it('Eliminar un pokemon existente', function () {
    const pokemonService = TestBed.inject(PokemonService);
    pokemonService.deletePokemon(1889).subscribe((response: PokemonVo) => {
      component.successResult =  !!response ? true : false;
      expect(component.successResult).toBeTrue();
    });
  });

  it('should close modal', () => {
    const btnElement = fixture.debugElement.query(By.css('#btnCancel'));
    btnElement.nativeElement.click();
    expect(component.successResult).toBeFalse();
  });

  it('Buscar pokemon', () => {
    component.findPokemon();
    expect(component).toBeTruthy();
  });

  it('Estado de resultado al guardar', () => {
    component.resultState();
    expect(component).toBeTruthy();
  });

  it('Guardar nuevo pokemon', () => {
    component.newPokemon();
    expect(component).toBeTruthy();
  });
});

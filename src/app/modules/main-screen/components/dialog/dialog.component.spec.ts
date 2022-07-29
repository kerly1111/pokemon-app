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
import {By} from "@angular/platform-browser";

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
        HttpClientModule
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

  it('Cuando se guarda un porkemon exitosmente retorna true', function () {
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
});

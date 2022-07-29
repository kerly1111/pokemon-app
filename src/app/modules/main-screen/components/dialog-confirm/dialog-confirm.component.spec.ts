import {ComponentFixture, TestBed} from "@angular/core/testing";
import {DialogConfirmComponent} from "./dialog-confirm.component";
import {MainRoutingModule} from "../../main-routing.module";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {MatSliderModule} from "@angular/material/slider";
import {MatSnackBarModule} from "@angular/material/snack-bar";

describe('DialogConfirmComponent', () => {
  let component: DialogConfirmComponent;
  let fixture: ComponentFixture<DialogConfirmComponent>;

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
        MatSnackBarModule
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
      declarations: [ DialogConfirmComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DialogConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

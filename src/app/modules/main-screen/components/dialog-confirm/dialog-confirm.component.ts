import {Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PokemonVo} from "../../../../shared/vo/pokemon-vo";

export interface DialogConfirmInterface {
  title: string;
  body: string;

}

@Component({
  selector: 'dialog-confirm',
  templateUrl: './dialog-confirm.component.html'
})
export class DialogConfirmComponent {

  successResult: boolean;

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogConfirmInterface) {}

  onNoClick(): void {
    this.successResult = false;
    this.dialogRef.close();
  }
}

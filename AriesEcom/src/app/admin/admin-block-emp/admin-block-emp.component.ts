import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/api-service.service';

@Component({
  selector: 'app-admin-block-emp',
  templateUrl: './admin-block-emp.component.html',
  styleUrls: ['./admin-block-emp.component.scss']
})
export class AdminBlockEmpComponent implements OnInit {

  blockUrl : string = `https://localhost:44321/api/Warehouse/blockEmp`;
  constructor(
    private apiService : ApiServiceService,
    private dialogRef : MatDialogRef<AdminBlockEmpComponent>,
    @Inject(MAT_DIALOG_DATA) private data : any
  ) { }

  ngOnInit(): void {
  }

  onClickBlock(){
    console.log(this.data)
    this.apiService.getMethod(`${this.blockUrl}/${this.data}`).subscribe((res) => {
      console.log(res)
      this.dialogRef.close();
    })
  }

  onClickClose(){
    this.dialogRef.close();
  }
}

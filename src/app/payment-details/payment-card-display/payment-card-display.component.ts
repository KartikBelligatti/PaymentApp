import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-card-display',
  templateUrl: './payment-card-display.component.html',
  styles: [
  ]
})
export class PaymentCardDisplayComponent implements OnInit {

  constructor(public service:PaymentDetailService, private toastr:ToastrService){
  }
  ngOnInit(): void {
      this.service.refreshList() 
    }
    populateForm(selectedRecord:PaymentDetail){
      this.service.formdata=Object.assign({},selectedRecord);
    }

    onDelete(id:number){
      this.service.deletePaymentDetail(id)
      .subscribe({
        next:res=>{
          this.service.list=res as PaymentDetail[]
          this.toastr.error('Deleted Successfully', 'Payment Detail Register')
        },
        error:err=>{
          console.log(err)
        }
      })
    }

}

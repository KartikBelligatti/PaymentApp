import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { from } from 'rxjs';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-details-form',
  templateUrl: './payment-details-form.component.html',
  styles: [
  ]
})
export class PaymentDetailsFormComponent {
  constructor(public service:PaymentDetailService, private toastr:ToastrService){

  }
  onSubmit(_form:NgForm){
    this.service.formSubmitted=true
    if(_form.valid){
      if(this.service.formdata.paymentDetailId==0){
        this.insertRecord(_form)
      }
      else{
        this.updateRecord(_form)
      }
      

    }
    
  }
  insertRecord(_form:NgForm){
    this.service.postPaymentDetail()
    .subscribe({
      next:res=>{
        this.service.list=res as PaymentDetail[]
        this.service.resetForm(_form)
        this.toastr.success('Inserted Successfully', 'Payment Detail Register')
      },
      error:err=>{
        console.log(err)
      }
    })
  }
  updateRecord(_form:NgForm){
    this.service.putPaymentDetail()
    .subscribe({
      next:res=>{
        this.service.list=res as PaymentDetail[]
        this.service.resetForm(_form)
        this.toastr.info('Updated Successfully', 'Payment Detail Register')
      },
      error:err=>{
        console.log(err)
      }
    })
  }
}

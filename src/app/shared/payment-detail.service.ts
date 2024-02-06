import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PaymentDetail } from './payment-detail.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  url:string=environment.apiBaseUrl+'/PaymentDetail'
  list:PaymentDetail[]=[];
  formdata: PaymentDetail=new PaymentDetail()
  formSubmitted: boolean=false;
  constructor(private http:HttpClient) { }

  refreshList(){
    this.http.get(this.url)
    .subscribe({
      next:res=>{this.list=res as PaymentDetail[]},
      error:err=>{console.log(err)}
    })
  }
  postPaymentDetail(){
    return this.http.post(this.url, this.formdata)
  }

  putPaymentDetail(){
    return this.http.put(this.url+'/'+this.formdata.paymentDetailId, this.formdata)
  }

  deletePaymentDetail(id:number){
    return this.http.delete(this.url+'/'+id)
  }

  resetForm(form:NgForm){
    form.form.reset()
    this.formdata=new PaymentDetail()
    this.formSubmitted=false
  }
}

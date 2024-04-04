import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-payment-gateway',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './payment-gateway.component.html',
  styleUrl: './payment-gateway.component.css'
})
export class PaymentGatewayComponent {

  transactionId: string = "";
  paymentSuccess: boolean = false;
  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
  amount: number = 0;

  constructor(private router: Router, private payment: PaymentService) { }

  convertToUSD(inrAmount: number): number {
    const exchangeRate = 83.34;
    const usdAmount = inrAmount / exchangeRate;
    return parseFloat(usdAmount.toFixed(2));
  }

  ngOnInit(): void {
    this.amount = this.convertToUSD(window.totalPrice);
    window.paypal.Buttons(
      {
        style: {
          layout: 'horizontal',
          color: 'blue',
          shape: 'rect',
          label: 'paypal'
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.amount.toString(),
                  currency_code: 'USD'
                }
              }
            ]
          });
        },
        onApprove: (data: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            if (details.status === 'COMPLETED') {
              // this.payment.transactionID = details.id;
              this.transactionId = details.id;
              this.paymentSuccess = true;
            }
          });
        },
        onError: (error: any) => {
          console.log(error);
        }
      }

    ).render(this.paymentRef.nativeElement);
  }

  cancel() {
    this.router.navigate(['/cart-page'])
  }


}

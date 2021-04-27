import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ship-info',
  templateUrl: './ship-info.component.html',
  styleUrls: ['./ship-info.component.scss']
})
export class ShipInfoComponent implements OnInit {

  shipForm = new FormGroup({
    country: new FormControl('', [Validators.required]),
    region: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required, Validators.minLength(3)]),
    postal: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  cardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    number: new FormControl('', [Validators.required,
    Validators.pattern('(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\\d{3})\\d{11})')]),
    secureCode: new FormControl('', [Validators.required, Validators.min(100), Validators.max(999)]),
    expDate: new FormControl('', [Validators.required, Validators.pattern('(0[1-9]|1[0-2])\\/?([0-9]{4}|[0-9]{2})')]),
  });

  currentStep: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentStep = 0;
  }


  get shipAddress(): AbstractControl { return this.shipForm.get('address'); }
  get shipPostal(): AbstractControl { return this.shipForm.get('postal'); }
  get shipCity(): AbstractControl { return this.shipForm.get('city'); }
  get shipRegion(): AbstractControl { return this.shipForm.get('region'); }
  get shipCountry(): AbstractControl { return this.shipForm.get('country'); }

  get cardName(): AbstractControl { return this.cardForm.get('name'); }
  get cardNumber(): AbstractControl { return this.cardForm.get('number'); }
  get cardCode(): AbstractControl { return this.cardForm.get('secureCode'); }
  get cardExpDate(): AbstractControl { return this.cardForm.get('expDate'); }

  checkShipForm(): void {
    if (this.shipForm.valid) { this.currentStep = 1; }
    else { alert('No se han ingresado todos los datos de envío'); }
  }

  checkCardForm(): void {
    if (this.cardForm.valid) {
      this.router.navigate(['/home']);
    }
    else { alert('No se han ingresado todos los datos de pago'); }
  }

}


/* Credit Card Validation from https://stackoverflow.com/questions/9315647/regex-credit-card-number-tests
    https://stackoverflow.com/questions/20430391/regular-expression-to-match-credit-card-expiration-date
*/

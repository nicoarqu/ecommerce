import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

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
    type: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    number: new FormControl('', [Validators.required, Validators.minLength(6)]),
    secureCode: new FormControl('', [Validators.required, Validators.minLength(3)]),
    expDate: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
  });

  currentStep: number;

  constructor() { }

  ngOnInit(): void {
    this.currentStep = 0;
  }


  get address(): AbstractControl { return this.shipForm.get('address'); }

  checkShipForm(): void {
    this.currentStep++;
  }

}

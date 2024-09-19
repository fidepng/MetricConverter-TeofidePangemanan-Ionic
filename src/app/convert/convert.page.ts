import { Component } from '@angular/core';

@Component({
  selector: 'app-convert',
  templateUrl: './convert.page.html',
  styleUrls: ['./convert.page.scss'],
})
export class ConvertPage {
  fromUnit: string = 'mm';
  toUnit: string = 'cm';
  value: number = 0;
  result: number = 0;

  conversionRates: { [key: string]: number } = {
    mm: 1,
    cm: 10,
    m: 1000,
    km: 1000000,
  };

  units: string[] = ['mm', 'cm', 'm', 'km'];

  convert() {
    if (this.value !== null && !isNaN(this.value)) {
      const fromRate = this.conversionRates[this.fromUnit];
      const toRate = this.conversionRates[this.toUnit];
      this.result = (this.value * fromRate) / toRate;
    } else {
      this.result = 0;
    }
  }

  formatResult(): string {
    return this.result.toLocaleString('en-US', { maximumFractionDigits: 4 });
  }

  swapUnits() {
    [this.fromUnit, this.toUnit] = [this.toUnit, this.fromUnit];
    this.convert();
  }
}

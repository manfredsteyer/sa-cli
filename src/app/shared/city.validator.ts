import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  standalone: true,
  selector: 'input[appCity]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidator,
      multi: true,
    },
  ],
})
export class CityValidator implements Validator {
  public validate(c: AbstractControl): ValidationErrors {
    if (
      c.value === 'Graz' ||
      c.value === 'Hamburg' ||
      c.value === 'Frankfurt' ||
      c.value === 'Wien' ||
      c.value === 'Mallorca'
    ) {
      return {};
    }

    return {
      appCity: true,
    };
  }
}

import {FormControl, FormGroup} from '@angular/forms';
export function mobileValidator(control: FormControl): any {
  const myReg = /^13[0-9]{1}|18[0-9]{1}|15[0-9]{1}[0-9]{8}$/;
  const valid = myReg.test(control.value);
  console.log('mobile校验结果:' + valid);
  return valid ? null : {'mobile': true} ;
}

export function equalValidator(group: FormGroup):any {
  let password: FormControl = group.get("password") as FormControl;
  let cPassword:FormControl = group.get("confirmPass") as FormControl;
  let valid = (password.value === cPassword.value);
  return valid ? null :{"equal": true};
}

import {FormControl, FormGroup} from '@angular/forms';
export function mobileValidator(control: FormControl): any {
  const myReg = /^1(3|4|5|7|8)\d{9}$/;
  const valid = myReg.test(control.value);
  console.log('mobile校验结果:' + valid);
  return valid ? null : {'mobile': true};
}

export function equalValidator(group: FormGroup):any {
  let password: FormControl = group.get("password") as FormControl;
  let cPassword: FormControl = group.get("confirmPass") as FormControl;
  let valid = null;
  if(password && cPassword) {
    valid = (password.value === cPassword.value);
  }
  return valid ? null :{"equal": {
    desc:"密码和确认密码不一致"
  }};
}

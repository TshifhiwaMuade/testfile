import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Correct import statement for Router

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent {
  form: FormGroup = this.fb.group({
    userName: ['', Validators.required],
    passWord: ['', Validators.required],
  });

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {}

  login() {
    let user = this.authService.login(this.form.value.userName, this.form.value.passWord);

    if (!user) {
      alert('Invalid username or password');
    } else {
      this.router.navigateByUrl('/dashboard');
    }
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  isLoggingIn = true;

  constructor() { }

  ngOnInit(): void {
    this.user = new User();
    this.user.email = "my.test.account@nativescript.org"; //FOR TESTING ONLY
    this.user.password = "mypassword"; //FOR TESTING ONLY
  }

  signUp() {
    this.userService.register(this.user)
        .subscribe(
            () => {
                alert("Your account was successfully created.");
                this.toggleDisplay();
            },
            (exception) => {
                if (exception.error && exception.error.description) {
                    alert(exception.error.description);
                } else {
                    alert(exception)
                }
            }
        );
  }

  toggleDisplay() {
      this.isLoggingIn = !this.isLoggingIn;
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from "../services/user/user.model";
import { UserService } from "../services/user/user.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  providers: [UserService],
  templateUrl: './login.component.tns.html',
  styleUrls: ['./login.component.tns.css']
})
export class LoginComponent implements OnInit {
  
    user: User;
    isLoggingIn = true;
  
    constructor(private router: Router, private userService: UserService) {
      this.user = new User();
      this.user.email = "my.test.account@nativescript.org"; //FOR TESTING ONLY
      this.user.password = "mypassword"; //FOR TESTING ONLY
    }
  
    ngOnInit(): void {
    }

    // submit() {
    //     if (this.isLoggingIn) {
    //         this.login();
    //     } else {
    //         this.signUp();
    //     }
    // }

    // login() {
    //     this.userService.login(this.user)
    //       .subscribe(
    //         () => this.router.navigate(["/home"]),
    //         (exception) => {
    //             if(exception.error && exception.error.description) {
    //                 alert(exception.error.description);
    //             } else {
    //                 alert(exception)
    //             }
    //         }
    //       );
    //   }

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

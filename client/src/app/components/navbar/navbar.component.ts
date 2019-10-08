import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngFlashMessagesService: NgFlashMessageService
  ) { }

  onLogoutClick() {
    this.authService.logout(); // Logout user
    this.ngFlashMessagesService.showFlashMessage({
      // Array of messages each will be displayed in new line
      messages: ["You are logged out"], 
      // Whether the flash can be dismissed by the user defaults to false
      dismissible: true, 
      // Time after which the flash disappears defaults to 2000ms
      timeout: false,
      // Type of flash message, it defaults to info and success, warning, danger types can also be used
      type: 'alert-info'
    });
    this.router.navigate(['/']); // Navigate back to home page
  }

  ngOnInit() {
  }

}

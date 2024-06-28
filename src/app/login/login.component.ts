import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Correct import for FormsModule
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute for route handling

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule] // Correctly importing FormsModule here
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  error: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Listen for query parameters to check for errors
    this.route.queryParams.subscribe(params => {
      this.error = params['error'] === 'true';
    });
  }

  loginWithGoogle() {
    // Redirects to Google OAuth2 endpoint
    window.location.href = 'http://localhost:8080/oauth2/authorization/google';
  }

  login() {
    console.log('Logging in with:', this.username, this.password);
  }
}

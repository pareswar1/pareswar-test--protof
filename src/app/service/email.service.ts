import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private apiUrl = 'https://your-api-url.com/send-email'; // Replace with your email-sending API URL

  constructor(private http: HttpClient) {}

  sendEmail(): Observable<any> {
    const emailData = {
      to: 'pareswarmallick8@gmail.com',
      subject: 'Web Connect Mail',
      message: 'This is a hard-coded test email.',
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post(this.apiUrl, emailData, { headers });
  }
}

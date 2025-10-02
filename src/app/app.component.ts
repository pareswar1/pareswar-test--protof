import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { EmailService } from './service/email.service';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  profileImage: string | null = "../assets/images/Media.jpg";
  isMenuOpen = false;

  projects = [
    { name: 'NRI-Booking', image: '../assets/project/image.png', description: 'Welcome to NRIBooking.com, where your journey to India becomes our passion and purpose.' },
    { name: 'NRI-Booking', image: '../assets/project/image.png', description: 'Welcome to NRIBooking.com, where your journey to India becomes our passion and purpose.' },
    { name: 'NRI-Booking', image: '../assets/project/image.png', description: 'Welcome to NRIBooking.com, where your journey to India becomes our passion and purpose.' },

    // { name: 'VUIS', image: '../assets/project/p4.png', description: 'Current Employment Statistics (CES) - November 2024' },
    // { name: 'PTSI', image: '../assets/project/ptsi.png', description: 'Post-Tensioning Companies in India providing “best-in-class” integrated solutions for Unbonded Post-Tensioning System' }
  ];

  galleryImages = [
    { src: '../assets/images/4.jpeg', alt: 'Gallery Image 1' },
    { src: '../assets/images/5.jpeg', alt: 'Gallery Image 1' },
    { src: '../assets/images/3.jpeg', alt: 'Gallery Image 1' },
    { src: '../assets/images/1.jpeg', alt: 'Gallery Image 1' },
    { src: '../assets/images/12.jpg', alt: 'Gallery Image 1' },
    { src: '../assets/images/11.JPG', alt: 'Gallery Image 1' },
    { src: '../assets/images/2.jpeg', alt: 'Gallery Image 1' },
  ];

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }



  private routerSubscription: Subscription | null = null;

  ngOnInit() {

    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.handleScreenChange();
      }
      // this.onDocumentClick()
    });
  }

  @HostListener('window:resize', ['$event'])
  @HostListener('document:visibilitychange', [])
  handleScreenChange() {

    this.isMenuOpen = false
  }

  // @HostListener('document:click', ['$event'])
  // onDocumentClick() {
  //   this.isMenuOpen = false
  // }


  successMessage: string = '';
  errorMessage: string = '';

  constructor(private emailService: EmailService, private router: Router) { }


  onSendEmail() {
    this.emailService.sendEmail().subscribe(
      (response) => {
        this.successMessage = 'Email sent successfully!';
        this.errorMessage = '';
      },
      (error) => {
        this.successMessage = '';
        this.errorMessage = 'Failed to send email.';
        console.error(error);
      }
    );
  }


  smoothScrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Scrolls to the top of the element
      });
    }
    this.isMenuOpen = false
  }


  submit(){
    console.log("form submit") 
  }

}


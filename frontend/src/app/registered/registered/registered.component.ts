import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registered',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './registered.component.html',
  styleUrl: './registered.component.css'
})
export class RegisteredComponent implements OnInit {
  users:any[]=[];
  constructor(private http: HttpClient){}
  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/api/users')
    .subscribe(data =>{
      this.users =data;
    });
  }
}

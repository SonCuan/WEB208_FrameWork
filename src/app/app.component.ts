import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My_Angular';
  student: {
    fullName : string,
    gender : "Nam" | "Nu" , 
    age : number,
    picture : string, 
    agvScore : number,
  } = {
    fullName : "Nguyen Van A", 
    gender : "Nam",
    age : 20,
    picture : "https://picsum.photos/200",
    agvScore : 10
  }
  getProfile (){ 
    return `trash`
  }
 }

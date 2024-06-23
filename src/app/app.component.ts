import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { ButtonModule } from 'primeng/button';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

  @Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButtonModule, ButtonModule,HeaderComponent,FooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ToDoList';
}

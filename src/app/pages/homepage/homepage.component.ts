import { Component } from '@angular/core';
import { GeneratorComponent } from "../../generator/generator/generator.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [GeneratorComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

}

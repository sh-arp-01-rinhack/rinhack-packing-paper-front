import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { columns, TemplateData } from '../../model/generator-template';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [JsonPipe, CommonModule, FormsModule],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss'
})
export class GeneratorComponent {
  columnsEnumKeys: number[]

  cols = columns

  constructor() {
    this.columnsEnumKeys = Object.keys(this.cols)
      .splice(0, Object.values(this.cols).length / 2)
      .map(i => parseInt(i))
  }

  model: TemplateData = {
    paper: {
      width: 1000,
      height: 1000,
    },
    border: {
      width: 10,
      color: '#ffffff'
    },
    imageColumns: 4,
    imageMixSeed: undefined
  }
}

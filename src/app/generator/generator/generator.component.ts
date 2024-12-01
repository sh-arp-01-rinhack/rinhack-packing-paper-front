import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { columns, TemplateData } from '../../model/generator-template';
import { CommonModule, JsonPipe } from '@angular/common';
import { SpinnerComponent } from "../../utility/spinner/spinner.component";
import { PackingService } from '../../services/net/packing.service';
import { catchError, map, repeat, shareReplay } from 'rxjs';
import { WithLoadingPipe } from '../../pipes/with-loading.pipe';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [JsonPipe, CommonModule, FormsModule, SpinnerComponent, SpinnerComponent, WithLoadingPipe, NgbAlert],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss'
})
export class GeneratorComponent {
  private readonly packingService = inject(PackingService)

  columnsEnumKeys: number[]

  cols = columns

  templates$ = this.packingService.getTemplates().pipe(
    shareReplay({ refCount: true }),
    repeat(2),
    map((data) => {
      data.forEach(i => i.data = `data:image/jpeg;base64,${i.data}`)
      return data
    }),
    catchError((err) => {
      throw err
    })
  )

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

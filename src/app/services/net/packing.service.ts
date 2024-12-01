import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TemplateEntry } from '../../model/templates';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackingService {

  constructor() { }

  private readonly http = inject(HttpClient)

  getTemplates(): Observable<Array<TemplateEntry>> {
    return this.http.get<Array<TemplateEntry>>(`${environment.templatesBaseUri}/report/exports`)
  }
}

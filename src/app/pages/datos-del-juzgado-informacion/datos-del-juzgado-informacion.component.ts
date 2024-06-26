import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'select2';

@Component({
  selector: 'app-datos-del-juzgado-informacion',
  templateUrl: './datos-del-juzgado-informacion.component.html',
  styleUrls: ['./datos-del-juzgado-informacion.component.scss']
})
export class DatosDelJuzgadoInformacionComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function() {
      $('.mi-select').select2({
        placeholder: 'Select an option'
      });
    });
  }
}

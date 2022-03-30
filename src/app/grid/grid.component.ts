import { Component, OnInit } from '@angular/core';

import { RxjsService } from '../services/rxjs.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public name: string = '';

  constructor(private rxjsService: RxjsService) { }

  ngOnInit(): void {
  this.rxjsService.getName().subscribe({
    next: this.handleGetNameSuccess.bind(this)
    });
  }

  private handleGetNameSuccess(name: string) {
    this.name = name;
  }

}

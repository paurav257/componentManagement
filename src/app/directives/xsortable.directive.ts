import {Directive, ElementRef, EventEmitter, Output} from '@angular/core';
import {AfterViewInit} from '@angular/core';

declare var jQuery: any;

@Directive({
  selector: '[appXSortable]'
})

export class xSortableDirective implements AfterViewInit {
  @Output() newIndexes = new EventEmitter();

  initialIndex: any;

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    this.appSortable(this);
  }

  appSortable(refe) {
    jQuery(this.el.nativeElement).sortable({
      axis: 'x',
      start: function (event, ui) {
        console.log('Old position: ' + ui.item.index());
        refe.initialIndex = ui.item.index();
      },
      stop: function (event, ui) {
        console.log('New position: ' + ui.item.index());
        refe.newIndexes.emit({
          startIndex: refe.initialIndex,
          endIndex: ui.item.index()
        });
      }
    });
  }
}

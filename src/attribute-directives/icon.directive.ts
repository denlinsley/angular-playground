import {Directive, ElementRef, Input, OnInit} from 'angular2/core';

@Directive({
  selector: '[faIcon]'
})
export class IconDirective implements OnInit {
  @Input('faIcon') iconName: string;

  constructor(private el: ElementRef) { }

  // define some aliases for common use cases
  // otherwise, use the icon name passed in
  private _aliases = {
    add: 'fa fa-plus',
    back: 'fa fa-arrow-left',
    cancel: 'fa fa-times',
    close: 'fa fa-times',
    trash: 'fa fa-trash-o',
    edit: 'fa fa-pencil-square-o',
    forward: 'fa fa-arrow-right',
    help: 'fa fa-life-ring',
    info: 'fa fa-info-circle',
    location: 'fa fa-map-marker',
    mail: 'fa fa-envelope',
    save: 'fa fa-check',
    send: 'fa fa-paper-plane-o',
    view: 'fa fa-folder-open',
    warning: 'fa fa-exclamation-triangle',
  };

  private setClassName() {
    this.el.nativeElement.className = this._aliases[this.iconName] || `fa fa-${this.iconName}`;
  }

  ngOnInit() {
    this.setClassName()
  }
}

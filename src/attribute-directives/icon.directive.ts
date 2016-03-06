import {Directive, ElementRef, Input} from 'angular2/core';

@Directive({
  selector: '[myIcon]'
})
export class IconDirective {
  @Input('myIcon') iconName: string;

  constructor(private el: ElementRef) {
    console.log('this.iconName', this.iconName);
    this.getClassName();
  }

  // define some aliases for common use cases
  // otherwise, use the icon name passed in
  private _aliases = {
    add: 'fa fa-plus',
    back: 'fa fa-arrow-left',
    cancel: 'fa fa-times',
    close: 'fa fa-times',
    delete: 'fa fa-trash-o',
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

  private _faClassName = this._aliases[this.iconName];

  private getClassName() {
    console.log('this.iconName', this.iconName);
    console.log('this._faClassName', this._faClassName);
    if (!this._faClassName) {
      this._faClassName = `fa fa-${this.iconName}`;
    }

    this.el.nativeElement.className = this._faClassName;
  }
}

import {Component, Input} from 'angular2/core';


@Component({
  selector: 'fa-icon',
  template: '<i [class]="getClassName()"></i>'
})
export class IconComponent {
  @Input() name: string;

  private _aliases = {
    add: 'fa fa-plus',
    back: 'fa fa-arrow-left',
    cancel: 'fa fa-times',
    close: 'fa fa-times',
    edit: 'fa fa-pencil-square-o',
    forward: 'fa fa-arrow-right',
    help: 'fa fa-life-ring',
    info: 'fa fa-info-circle',
    location: 'fa fa-map-marker',
    mail: 'fa fa-envelope',
    save: 'fa fa-check',
    send: 'fa fa-paper-plane-o',
    trash: 'fa fa-trash-o',
    view: 'fa fa-folder-open',
    warning: 'fa fa-exclamation-triangle',
  };

  private getClassName() {
    return this._aliases[this.name] || `fa fa-${this.name}`;
  }
}

import {
  Component,
  ElementRef,
  inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { NgReact } from '../../../../react-platform/src/app/ng-react';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import App from '../../../../react-platform/src/app/app';

@Component({
  selector: 'poc2-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit, OnDestroy {
  private ngReact = inject(NgReact);
  private root = this.ngReact.createRoot(inject(ElementRef).nativeElement);

  ngOnInit() {
    this.ngReact.render(this.root, App);
  }

  ngOnDestroy() {
    this.root.unmount();
  }
}

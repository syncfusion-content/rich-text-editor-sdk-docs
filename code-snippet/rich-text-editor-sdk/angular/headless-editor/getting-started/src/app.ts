import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, Inject } from '@angular/core';
import {
  HeadlessEditor,
  basicExtensions,
  placeholderExtension
} from '@syncfusion/ej2-headless-editor';
 
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html'
})
export class App implements AfterViewInit, OnDestroy {
  @ViewChild('editor')
  editorRef!: ElementRef<HTMLDivElement>;
 
  private editor!: HeadlessEditor;
 
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
 
  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
 
    this.editor = HeadlessEditor.create({
      extensions: [basicExtensions, placeholderExtension]
    });
 
    this.editor.mount(this.editorRef.nativeElement);
  }
 
  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }
}
 
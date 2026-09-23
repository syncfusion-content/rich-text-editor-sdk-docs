import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import {
    HeadlessEditor,
    basicExtensions,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit, OnDestroy {
    @ViewChild('editor', { static: true })
    public editorElement!: ElementRef<HTMLDivElement>;

    private editor: HeadlessEditor | null = null;

    public ngAfterViewInit(): void {
        this.editor = HeadlessEditor.create({
            extensions: [
                basicExtensions,
                placeholderExtension
            ]
        });

        this.editor.mount(this.editorElement.nativeElement);
    }

    public ngOnDestroy(): void {
        if (this.editor) {
            this.editor.destroy();
            this.editor = null;
        }
    }
}
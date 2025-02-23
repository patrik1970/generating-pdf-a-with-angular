# PDF/A Generator with Angular

This project is an Angular application that generates PDF/A documents using the `pdfmake` library. The application includes a button that, when clicked, generates and downloads a PDF/A-3a compliant document.

## Project Structure

```
.angular/
.cache/
.editorconfig
.gitignore
.vscode/
angular.json
package.json
README.md
src/
  app/
    app-routing.module.ts
    app.component.css
    app.component.html
    app.component.spec.ts
    app.component.ts
    pdfmake-config.ts
  assets/
  favicon.ico
  index.html
  main.ts
  styles.css
tsconfig.app.json
tsconfig.json
tsconfig.spec.json
```

## Key Files

### app.component.ts

This file defines the main component of the application. It includes the logic for generating the PDF/A document.

```typescript
import { Component } from '@angular/core';
import { setPdfMakeVfs } from './pdfmake-config';
import pdfMake from 'pdfmake/build/pdfmake';

// Set the vfs for PDFMake
setPdfMakeVfs();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PDF/A Generator';

  generatePDF() {
    const docDefinition: any = {
      version: '1.5',
      subset: 'PDF/A-3a',
      tagged: true,
      displayTitle: true,
      info: {
        title: 'Awesome PDF document from pdfmake'
      },
      content: [
        'PDF/A document for archive'
      ]
    };

    pdfMake.createPdf(docDefinition).download('pdfa-3a-file.pdf');
  }
}
```

### app.component.html

This file contains the HTML template for the main component. It includes a button that triggers the PDF generation.

```html
<button (click)="generatePDF()">Ladda ner till (PDF/A)</button>
```

### pdfmake-config.ts

This file configures the `pdfmake` library by setting the virtual file system (vfs) for font files.

```typescript
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

export function setPdfMakeVfs() {
  (pdfMake as any).vfs = pdfFonts.vfs;
}
```

### app.component.spec.ts

This file contains unit tests for the main component.

```typescript
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'generating-pdf-a-with-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('generating-pdf-a-with-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, generating-pdf-a-with-angular');
  });
});
```

## Running the Project

To run the project, use the following commands:

1. Install dependencies:
   ```sh
   npm install
   ```

2. Start the development server:
   ```sh
   ng serve
   ```

3. Open your browser and navigate to `http://localhost:4200`.

## Building the Project

To build the project for production, use the following command:

```sh
ng build
```

This will create a `dist/` directory with the production build of the application.

## Testing the Project

To run the unit tests, use the following command:

```sh
ng test
```

This will execute the unit tests defined in the `*.spec.ts` files.

Similar code found with 1 license type

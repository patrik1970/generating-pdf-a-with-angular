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
    const docDefinition: any ={
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

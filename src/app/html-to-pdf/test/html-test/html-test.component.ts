import { Component, OnInit } from '@angular/core';
import { BasicTestDataObject } from '../test-data/test-data-object';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

@Component({
  selector: 'app-html-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './html-test.component.html',
  styleUrl: './html-test.component.css'
})
export class HtmlTestComponent implements OnInit {

  public basicTestData: BasicTestDataObject[] = [];

  public ngOnInit(): void {
    this.createBasicTestData();
  }

  /**
   * Created from: https://github.com/simonbengtsson/jsPDF-AutoTable
   */
  public generatePDFFromClick(): void {
    const el = document.getElementById('pdf-content');
    console.log('CURRENT DOC', el)
    const pdfDoc = new jsPDF("p", "pt", "letter");
    autoTable(pdfDoc, { html: '#pdf-table' });
    // pdfDoc.html(el as HTMLElement, 
    //   {
    //   callback: (doc) => {
    //     doc.save('html-table-to-pdf.pdf');
    //   },
    //   x: 10,
    //   y: 10,
    //   autoPaging: 'text'
    //   });
      pdfDoc.save('html-table-to-pdf.pdf');
  }

  private createBasicTestData(): void {
    const amountOfData = 50;
    for(let i = 0; i < amountOfData; i++) {
      const btd = new BasicTestDataObject();
      btd.param1 = `Param ${i}`;
      btd.bool1 = i % 2 === 0;
      btd.number1 = i * 42;
      this.basicTestData.push(btd);
    }
  }
}

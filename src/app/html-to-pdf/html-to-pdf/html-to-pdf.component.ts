import { Component, ContentChild, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { PDFPageSettings } from '../models/pdf-page-settings';

@Component({
  selector: 'app-html-to-pdf',
  standalone: true,
  imports: [],
  templateUrl: './html-to-pdf.component.html',
  styleUrl: './html-to-pdf.component.css'
})
export class HtmlToPdfComponent implements OnInit {

  @ContentChild(String) report: string;
  
  public ngOnInit(): void {
    console.log('ON IN IT: ', this, this.report )
  }

  /**
   * Creates PDF with clean broken table on page break from: https://github.com/simonbengtsson/jsPDF-AutoTable
   */
  public generatePDFWithDataTable(fileName: string, settings: PDFPageSettings): void {
    const el = document.getElementById('pdf-content');
    console.log('CURRENT DOC', el)
    const unit = settings.unit ? settings.unit : 'pt';
    const pageSize = settings.pageSize ? settings.pageSize : 'letter';
    const idOfTableHTMLElement = settings.idOfTableHTMLElement ? `#${settings.idOfTableHTMLElement}` : '#pdf-table';

    const pdfDoc = new jsPDF("p", unit, pageSize);
    autoTable(pdfDoc, { html: idOfTableHTMLElement });
      pdfDoc.save(`${fileName}.pdf`);
  }

  /**
   * Basic PDF Gen with jsPDF: https://raw.githack.com/MrRio/jsPDF/master/docs/index.html
   */
    public generatePDF(fileName: string, settings: PDFPageSettings): void {
      const el = document.getElementById('pdf-content');
      console.log('CURRENT DOC', el)
      const unit = settings.unit ? settings.unit : 'pt';
      const pageSize = settings.pageSize ? settings.pageSize : 'letter';
  
      const pdfDoc = new jsPDF("p", unit, pageSize);
      pdfDoc.html(el as HTMLElement, 
        {
        callback: (doc) => {
          doc.save(`${fileName}.pdf`);
        },
        x: 10,
        y: 10,
        autoPaging: 'text'
        });
    }

}

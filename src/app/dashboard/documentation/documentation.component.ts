import {Component} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";


export interface Pdf {
    url: string;
    title: string;
    description: string;
    thumbnail: string;
}

@Component({
    selector: 'app-documentation',
    templateUrl: './documentation.component.html',
    styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent {
    pdfs: Pdf[] = [
        {
            url: 'assets/pdf/invoice.pdf',
            title: 'Getting Started with Programming',
            description: 'A comprehensive guide to get you started with programming.',
            thumbnail: 'assets/thumbnail/thumbnail1.png'
        },
        {
            url: 'assets/pdf/recomandare.pdf',
            title: 'Advanced JavaScript Techniques',
            description: 'Explore advanced JavaScript concepts and techniques.',
            thumbnail: 'assets/thumbnail/thumbnail1.png'
        },
        {
            url: 'assets/pdf/resume.pdf',
            title: 'Advanced JavaScript Techniques',
            description: 'Explore advanced JavaScript concepts and techniques.',
            thumbnail: 'assets/thumbnail/thumbnail1.png'
        },
        // Add more PDF objects here
    ];

    selectedPdf: Pdf | null = this.pdfs[0];

    constructor(public sanitizer: DomSanitizer) {}

    ngOnInit(): void {}

    selectPdf(pdf: Pdf): void {
        this.selectedPdf = pdf;
    }

    downloadPdf(url: string): void {
        window.open(url, '_blank');
    }
}

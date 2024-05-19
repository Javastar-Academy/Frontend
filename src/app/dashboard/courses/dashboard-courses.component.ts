import {Component, ElementRef, ViewChild} from '@angular/core';
import {Pdf} from "../documentation/documentation.component";
interface Video {
    pdf: Pdf;
    url: string;
    title: string;
    description: string;
    thumbnail: string;
}


@Component({
    selector: 'app-courses',
    templateUrl: './dashboard-courses.component.html',
    styleUrls: ['./dashboard-courses.component.css']
})
export class DashboardCoursesComponent {
    @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

    videos: Video[] = [
        {
            url: 'assets/videos/video1.MOV',
            title: 'Introduction to Programming',
            description: 'An introduction to the basics of programming.',
            thumbnail: 'assets/thumbnail/thumbnail1.png',
            pdf: {
                url: 'assets/pdf/invoice.pdf',
                title: 'Getting Started with Programming',
                description: 'A comprehensive guide to get you started with programming.',
                thumbnail: 'assets/thumbnail/thumbnail1.png'
            },
        },
        {
            url: 'assets/videos/video2.MOV',
            title: 'Advanced JavaScript',
            description: 'Deep dive into advanced concepts of JavaScript.',
            thumbnail: 'assets/thumbnail/thumbnail2.png',
            pdf: {
                url: 'assets/pdf/recomandare.pdf',
                title: 'Advanced JavaScript Techniques',
                description: 'Explore advanced JavaScript concepts and techniques.',
                thumbnail: 'assets/thumbnail/thumbnail1.png'
            },
        },
        // Add more video objects here
    ];

    selectedVideo: Video | null = this.videos[0];
    playbackRate: number = 1.0;

    ngOnInit(): void {}

    selectVideo(video: Video): void {
        this.selectedVideo = video;
        this.playbackRate = 1.0;
        if (this.videoPlayer) {
            this.videoPlayer.nativeElement.playbackRate = this.playbackRate;
        }
    }

    changePlaybackRate(delta: number): void {
        if (this.videoPlayer) {
            this.playbackRate = Math.max(0.5, Math.min(2.0, this.playbackRate + delta));
            this.videoPlayer.nativeElement.playbackRate = this.playbackRate;
        }
    }


    downloadPdf(url: string): void {
        window.open(url, '_blank');
    }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

interface GradeItem {
    name: string;
    grade: number;
}

@Component({
    selector: 'app-grades',
    templateUrl: './grades.component.html',
    styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit, AfterViewInit {
    tests: GradeItem[] = [
        { name: 'Test 1', grade: 85 },
        { name: 'Test 2', grade: 90 },
        // Add more tests here
    ];

    homeworks: GradeItem[] = [
        { name: 'Homework 1', grade: 95 },
        { name: 'Homework 2', grade: 88 },
        // Add more homework here
    ];

    finalProject: GradeItem = { name: 'Final Project', grade: 92 };

    extraJobs: GradeItem[] = [
        { name: 'Extra Job 1', grade: 80 },
        { name: 'Extra Job 2', grade: 85 },
        // Add more extra jobs here
    ];

    testsGrade: number = this.calculateAverage(this.tests);
    homeworkGrade: number = this.calculateAverage(this.homeworks);
    finalProjectGrade: number = this.finalProject.grade;
    extraJobsGrade: number = this.calculateAverage(this.extraJobs);
    compositeGrade: number = this.calculateCompositeGrade();

    constructor() {
        Chart.register(...registerables);
    }

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.renderChart();
    }

    calculateAverage(items: GradeItem[]): number {
        const total = items.reduce((sum, item) => sum + item.grade, 0);
        return total / items.length;
    }

    calculateCompositeGrade(): number {
        return (
            (this.testsGrade + this.homeworkGrade + this.finalProjectGrade + this.extraJobsGrade) / 4
        );
    }

    renderChart(): void {
        const ctx = (document.getElementById('gradesChart') as HTMLCanvasElement).getContext('2d');
        if (ctx) {
            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Tests', 'Homework', 'Final Project', 'Extra Jobs'],
                    datasets: [{
                        label: 'Grades',
                        data: [this.testsGrade, this.homeworkGrade, this.finalProjectGrade, this.extraJobsGrade],
                        backgroundColor: ['#ff6f61', '#6b5b95', '#88b04b', '#92a8d1']
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        }
    }
}

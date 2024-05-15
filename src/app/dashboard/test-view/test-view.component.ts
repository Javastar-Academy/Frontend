import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { takeWhile, tap } from 'rxjs/operators';
import { TestsService } from "../../services/test.service";
import { Test } from "../../models/Test";

@Component({
  selector: 'app-test-view',
  templateUrl: './test-view.component.html',
  styleUrls: ['./test-view.component.css']
})
export class TestViewComponent implements OnInit, OnDestroy {
  currentTest: Test;
  currentQuestionIndex: number = 0;
  currentQuestion: any;
  selectedAnswer: string;
  week: number;
  timerSubscription: Subscription;
  seconds: number;
  minutes: number;
  answers: { questionId: number, answer: string }[] = [];
  studentName: string = "None"

  constructor(private route: ActivatedRoute, private router: Router, private testService: TestsService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.week = +params['id'];
      this.loadTestData(this.week);
    });
    this.studentName = localStorage.getItem("firstname")!;
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  loadTestData(weekId: number) {
    this.testService.getTestByWeek(weekId).subscribe(test => {
      this.currentTest = test;
      this.currentQuestion = this.currentTest.questions[this.currentQuestionIndex];
      this.startTimer(this.currentTest.timeInMinutes); // time in minutes is actually in seconds. have to change in backend
      console.log(this.currentTest);
    });
  }

  selectAnswer(answer: string) {
    this.selectedAnswer = answer;
  }

  confirmAnswer() {
    // Store the selected answer with its respective question
    if (this.selectedAnswer) {
      this.answers.push({
        questionId: this.currentQuestion.id,  // Assuming each question has a unique ID
        answer: this.selectedAnswer
      });
    }
    // Move to the next question or finish the test
    if (this.currentQuestionIndex < this.currentTest.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.currentTest.questions[this.currentQuestionIndex];
      this.selectedAnswer = ''; // Reset selected answer for the next question
    } else {
      // All questions are answered, proceed to submit the answers
      this.submitAnswers();
    }
  }

  submitAnswers() {
    this.testService.submitTestAnswers(this.week, this.answers).subscribe({
      next: (response) => {
        console.log('Answers submitted successfully', response);
        this.router.navigate(['/tests']); // Navigate to results or summary page
      },
      error: (error) => {
        console.error('Failed to submit answers', error);
      }
    });
  }

  startTimer(duration: number) {
    this.timerSubscription = interval(1000).pipe(
        takeWhile(val => val <= duration),
        tap(seconds => {
          const timeLeft = duration - seconds;
          this.minutes = Math.floor(timeLeft / 60);
          this.seconds = timeLeft % 60;
        })
    ).subscribe();
  }
}

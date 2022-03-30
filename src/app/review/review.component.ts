import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SubmitreviewService } from '../submitreview.service';
@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  imageFromNet: any =
    'https://images.pexels.com/photos/9785506/pexels-photo-9785506.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

  imageAlt: string = 'our billions sea view';

  constructor(
    private fb: FormBuilder,
    private _submitReviewService: SubmitreviewService
  ) {}
  reviewForm = this.fb.group({
    fullname: [''],
    email: [''],
    review: [''],
  });

  ngOnInit(): void {}

  onSubmit() {
    this._submitReviewService
      .startReviewing(this.reviewForm.value)
      .subscribe({ complete: console.info, error: console.info });
    this.reviewForm.reset();
  }
}

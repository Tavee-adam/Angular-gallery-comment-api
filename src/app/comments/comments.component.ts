import { Component, OnInit } from '@angular/core';
import { CommentService, CommentList } from '../comment.service';
// import { CommentList } from '../other/comment';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
})
export class CommentsComponent implements OnInit {
  imageFromNet: any =
    'https://images.pexels.com/photos/7443413/pexels-photo-7443413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

  imageAlt: string = 'The warm snow';
  public fetchCommentFromServers = [];
  commentlist: CommentList[] = [];
  constructor(private _commentServise: CommentService) {}

  ngOnInit(): void {
    this._commentServise.fetchData().subscribe((data) => {
      console.log(data),
        (this.fetchCommentFromServers = data),
        console.log(this.fetchCommentFromServers),
        (this.commentlist = data),
        console.log('from line 24', this.commentlist);
    });
  }
}

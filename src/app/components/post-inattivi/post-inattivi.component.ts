import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { getPosts, updatePost } from 'src/app/services/post.service';

@Component({
    selector: 'app-post-inattivi',
    templateUrl: './post-inattivi.component.html',
    styleUrls: ['./post-inattivi.component.scss']
})

export class PostInattiviComponent implements OnInit {

    posts!: Post[];

    constructor() {
        getPosts().then(posts => {
            console.log(posts)
            this.posts = posts
            this.inactivePosts()
            console.log(this.posts)
        })
    }

    ngOnInit(): void {
    }

    inactivePosts() {
        this.posts = this.posts.filter(post => !post.active);
    }


    activePost(id: number, i: number) {
        updatePost({ active: true }, id);
        this.posts.splice(i, 1);
    }

}

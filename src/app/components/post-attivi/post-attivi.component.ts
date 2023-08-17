import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { getPosts, updatePost } from 'src/app/services/post.service';

@Component({
    selector: 'app-post-attivi',
    templateUrl: './post-attivi.component.html',
    styleUrls: ['./post-attivi.component.scss']
})

export class PostAttiviComponent implements OnInit {

    posts!: Post[];

    constructor() {
        getPosts().then(posts => {
            console.log(posts)
            this.posts = posts
            this.activePosts()
            console.log(this.posts)
        })
    }

    ngOnInit(): void {
    }

    activePosts() {
        this.posts = this.posts.filter(post => post.active);
    }

    disablePost(id: number, i: number) {
        updatePost({ active: false }, id);
        this.posts.splice(i, 1);
    }

    detailPost(id: number, i: number) {

    }

}

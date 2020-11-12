export class Article {
    title: string;
    link: string;
    votes: number;

    // question mark on votes makes it optional
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
}


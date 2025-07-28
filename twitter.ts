type Tweet = {
    id: number;
    seqId: number;
}

class Twitter {
    private tweets = new Map<number, Tweet[]>();
    private follows = new Map<number, Set<number>>();
    private seqId = 0;

    constructor() {
    }

    postTweet(userId: number, tweetId: number): void {
        const userTweets = this.tweets.get(userId) ?? [];

        // add tweet to user's tweet list and increment seq id
        userTweets.unshift({ id: tweetId, seqId: this.seqId });
        this.seqId++;

        // since we never fetch feeds longer than 10
        // we can optimize max tweets stored
        // per user
        if (userTweets.length > 10)
            userTweets.pop();

        this.tweets.set(userId, userTweets);
    }

    getNewsFeed(userId: number): number[] {
        // we could optimize this by only looking
        // at the initial tweets in followee
        // tweet lists
        let tweets = this.tweets.get(userId) ?? new Array<Tweet>();
        const followees = this.follows.get(userId) ?? [];

        for (let followeeId of followees) {
            const followeeTweets = this.tweets.get(followeeId) ?? [];
            tweets = tweets.concat(followeeTweets);
        }

        return tweets.sort((a, b) => b.seqId - a.seqId).slice(0, 10).map(t => t.id);
    }

    follow(followerId: number, followeeId: number): void {
        const userFollows = this.follows.get(followerId) ?? new Set<number>();
        userFollows.add(followeeId);
        this.follows.set(followerId, userFollows);
    }

    unfollow(followerId: number, followeeId: number): void {
        const userFollows = this.follows.get(followerId) ?? new Set<number>();
        userFollows.delete(followeeId);
        this.follows.set(followerId, userFollows);
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
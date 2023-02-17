package com.poc.twitter.service;

import com.poc.twitter.core.entities.Tweet;

public interface TweetService {
    Iterable<Tweet> findAll();
    void createTweet(Tweet tweet);
}

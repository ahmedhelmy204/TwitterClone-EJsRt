package com.poc.twitter.service;

import com.poc.twitter.core.entities.Tweet;

import java.util.Optional;

public interface TweetService {
    void createTweet(Tweet tweet);
    Optional<Tweet> find(Integer id);
    Iterable<Tweet> findAll();
}

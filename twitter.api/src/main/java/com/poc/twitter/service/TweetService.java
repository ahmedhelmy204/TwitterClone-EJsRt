package com.poc.twitter.service;

import com.poc.twitter.core.entities.Tweet;

import java.util.List;
import java.util.Optional;

public interface TweetService {
    void createTweet(Tweet tweet);
    void deleteTweet(Integer id);
    Optional<Tweet> find(Integer id);
    List<Tweet> findByUsername(String username);
    List<Tweet> findByText(String text);
    Iterable<Tweet> findAll();
}

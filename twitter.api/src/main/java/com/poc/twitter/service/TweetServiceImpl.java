package com.poc.twitter.service;

import com.poc.twitter.api.dto.TweetDto;
import com.poc.twitter.core.entities.Tweet;
import com.poc.twitter.data.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class TweetServiceImpl implements TweetService {

    private TweetRepository tweetRepository;

    @Autowired
    public void TweetServiceImpl(TweetRepository tweetRepository) {
        this.tweetRepository = tweetRepository;
    }

    public Iterable<Tweet> findAll() {
        List<Tweet> tweets = new ArrayList<Tweet>();
        tweets.add(new Tweet(1,"Ahmed", "My first tweet", LocalDate.parse("2022-02-15")));
        tweets.add(new Tweet(2,"Ghadi", "Second Tweet", LocalDate.parse("2022-02-16")));
        tweets.add(new Tweet(3,"Jenny","Third Tweet", LocalDate.parse("2022-02-17")));
        Iterable<Tweet> tweetList= tweetRepository.findAll();
        return tweetList;
    }

    public void createTweet(Tweet tweet){
        tweetRepository.save(tweet);
    }
}

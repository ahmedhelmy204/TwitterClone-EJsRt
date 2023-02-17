package com.poc.twitter.service;

import com.poc.twitter.api.dto.TweetDto;
import com.poc.twitter.core.entities.Tweet;
import com.poc.twitter.data.TweetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TweetServiceImpl implements TweetService {

    private TweetRepository tweetRepository;

    @Autowired
    public void TweetServiceImpl(TweetRepository tweetRepository) {
        this.tweetRepository = tweetRepository;
    }

    public void createTweet(Tweet tweet){
        tweetRepository.save(tweet);
    }

    public void deleteTweet(Integer id){
        tweetRepository.deleteById(id);
    }

    public Optional<Tweet> find(Integer id){
      var tweet =  tweetRepository.findById(id);
      return tweet;
    }

    public List<Tweet> findByUser(String user){
        var tweets =  tweetRepository.findByUser(user);
        return tweets;
    }

    public List<Tweet> findByMessage(String message){
        var tweets =  tweetRepository.findByMessageContaining(message);
        return tweets;
    }

    public Iterable<Tweet> findAll() {
        Iterable<Tweet> tweetList= tweetRepository.findAll();
        return tweetList;
    }
}

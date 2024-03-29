package com.poc.twitter.api.controllers;

import com.poc.twitter.api.dto.TweetDto;
import com.poc.twitter.core.entities.Tweet;
import com.poc.twitter.service.TweetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tweets")
public class TweetsController {
     private TweetService tweetService;

     @Autowired
     public void TweetsController(TweetService tweetService) {
         this.tweetService = tweetService;
     }

    @PostMapping()
    public ResponseEntity createTweet(@RequestBody Tweet tweet) {
         tweetService.createTweet(tweet);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity deleteTweet(@PathVariable Integer id) {
         tweetService.deleteTweet(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<Tweet> getTweet(@PathVariable Integer id){

         Optional<Tweet> tweet = tweetService.find(id);

         if(tweet.isEmpty()) {
            return new ResponseEntity(HttpStatus.NOT_FOUND);
         }
         else {
             return new ResponseEntity<Tweet>(tweet.get(), HttpStatus.OK);
         }
    }

     @GetMapping("/getByUser")
     public ResponseEntity<List<Tweet>> getTweetByUsername(@RequestParam String username){
         List<Tweet> tweets= tweetService.findByUsername(username);
         return new ResponseEntity<List<Tweet>>(tweets, HttpStatus.OK);
     }

     @GetMapping("/getByMessage")
     public ResponseEntity<List<Tweet>> getTweetByMessage(@RequestParam String message){
         List<Tweet> tweets = tweetService.findByMessage(message);
         return new ResponseEntity<List<Tweet>>(tweets, HttpStatus.OK);
     }

     @GetMapping()
     public ResponseEntity<Iterable<Tweet>> getAllTweets(){

         Iterable<Tweet> tweetsList= tweetService.findAll();

         List<TweetDto> tweets = new ArrayList<TweetDto>();

         return new ResponseEntity<Iterable<Tweet>>(tweetsList, HttpStatus.OK);
     }
}

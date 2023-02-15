package com.poc.twitter.api.controllers;

import com.poc.twitter.api.dto.TweetDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/tweets")
public class TweetsController {

    @GetMapping()
    public ResponseEntity<List<TweetDto>> getAllTweets(){

        List<TweetDto> tweets = new ArrayList<TweetDto>();
        tweets.add(new TweetDto(1,"Ahmed", "My first tweet", LocalDate.parse("2022-02-15")));
        tweets.add(new TweetDto(2,"Ghadi", "Second Tweet", LocalDate.parse("2022-02-16")));
        tweets.add(new TweetDto(3,"Jenny","Third Tweet", LocalDate.parse("2022-02-17")));

        return new ResponseEntity<List<TweetDto>>(tweets, HttpStatus.OK);
    }
}

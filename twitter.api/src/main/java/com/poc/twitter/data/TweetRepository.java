 package com.poc.twitter.data;

 import com.poc.twitter.core.entities.Tweet;
 import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

 import java.util.List;

 public interface TweetRepository extends ElasticsearchRepository<Tweet,Integer> {
     List<Tweet> findByUsername(String username);
     List<Tweet> findByTextContaining(String text);
 }

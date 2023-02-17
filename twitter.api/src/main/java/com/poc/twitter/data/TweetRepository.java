package com.poc.twitter.data;

import com.poc.twitter.core.entities.Tweet;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

public interface TweetRepository extends ElasticsearchRepository<Tweet,Integer> {

}

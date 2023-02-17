package com.poc.twitter.core.entities;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import java.time.LocalDate;

@Document(indexName = "tweets")
@Getter
@Setter
public class Tweet {
    @Id
    private Integer id;

    @Field(type = FieldType.Keyword, name = "user")
    private String user;

    @Field(type = FieldType.Text, name = "message")
    private String message;

    @Field(type = FieldType.Date, name = "postDate")
    private LocalDate postDate;

    public Tweet(int id,String user,String message,LocalDate postDate){
        this.id= id;
        this.user = user;
        this.message = message;
        this.postDate=postDate;
    }
}

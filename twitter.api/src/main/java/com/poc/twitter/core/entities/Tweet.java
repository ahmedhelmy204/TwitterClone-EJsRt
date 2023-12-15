package com.poc.twitter.core.entities;

import lombok.Value;
import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldType;

import java.time.LocalDate;

@Document(indexName = "tweets")
@Value
public class Tweet {
    @Id
    private Integer id;

    @Field(type = FieldType.Keyword, name = "displayName")
    private String displayName;

    @Field(type = FieldType.Keyword, name = "username")
    private String username;

    @Field(type = FieldType.Keyword, name = "verified")
    private Boolean verified;

    @Field(type = FieldType.Text, name = "text")
    private String text;

    @Field(type = FieldType.Text, name = "image")
    private String image;

    @Field(type = FieldType.Date, name = "postDate")
    private LocalDate postDate;

    public Tweet(int id, String displayName, String username, Boolean verified,String text, String image,LocalDate postDate){
        this.id= id;
        this.displayName = displayName;
        this.username = username;
        this.verified = verified;
        this.text = text;
        this.image = image;
        this.postDate=postDate;
    }
}

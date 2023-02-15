package com.poc.twitter.api.dto;

import java.time.LocalDate;
import java.util.Date;

public class TweetDto {
    public int Id;
    public String User;
    public String Message;
    public LocalDate PostDate;

    public TweetDto(int id,String user,String message,LocalDate postDate){
        Id= id;
        User = user;
        Message = message;
        PostDate=postDate;
    }
}

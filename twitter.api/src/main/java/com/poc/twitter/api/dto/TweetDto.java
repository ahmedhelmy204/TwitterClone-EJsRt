package com.poc.twitter.api.dto;

import java.time.LocalDate;
import java.util.Date;

public class TweetDto {
    public String DisplayName;
    public String Username;
    public Boolean Verified;
    public String Message;
    public String Image;
    public LocalDate PostDate;

    public TweetDto(String displayName, String username, Boolean verified, String message, String image, LocalDate postDate){
        DisplayName = displayName;
        Username = username;
        Verified = verified;
        Message = message;
        Image = image;
        PostDate=postDate;
    }
}

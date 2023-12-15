package com.poc.twitter.api.dto;

import java.time.LocalDate;
import java.util.Date;

public class TweetDto {
    public int Id;
    public String DisplayName;
    public String Username;
    public Boolean Verified;
    public String Text;
    public String Image;
    public LocalDate PostDate;

    public TweetDto(int id, String displayName, String username, Boolean verified, String text, String image, LocalDate postDate){
        Id= id;
        DisplayName = displayName;
        Username = username;
        Verified = verified;
        Text = text;
        Image = image;
        PostDate=postDate;
    }
}

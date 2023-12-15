package com.poc.twitter.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@RequiredArgsConstructor
public class TwitterWebMvcConfigurer implements WebMvcConfigurer {

    private final CorsOriginConfig corsOriginConfig;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        final String[] allowedCorsOriginsArray = this.corsOriginConfig.getAllowedOrigins().toArray(new String[]{});
        final String[] allowedCorsMethodsArray = this.corsOriginConfig.getAllowedMethods().toArray(new String[]{});

        registry.addMapping("/**")
                .allowedOrigins(allowedCorsOriginsArray)
                .allowedMethods(allowedCorsMethodsArray);

    }
}

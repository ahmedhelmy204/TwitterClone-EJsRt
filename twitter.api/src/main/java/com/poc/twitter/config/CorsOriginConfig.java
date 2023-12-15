package com.poc.twitter.config;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Data
@Configuration
@ConfigurationProperties(prefix = "domain.host.cors-origins")
class CorsOriginConfig {
    private List<String> allowedMethods;
    private List<String> allowedOrigins;
}

// package com.poc.twitter;
//
// import org.springframework.context.annotation.Bean;
// import org.springframework.context.annotation.Configuration;
// import org.springframework.data.elasticsearch.client.ClientConfiguration;
// import org.springframework.data.elasticsearch.client.elc.ElasticsearchConfiguration;
// import org.springframework.data.elasticsearch.client.elc.ReactiveElasticsearchConfiguration;
// import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;
//
// @Configuration
// public class ElasticsearchClientConfig extends ElasticsearchConfiguration {
//
//     @Override
//     public ClientConfiguration clientConfiguration() {
//         return ClientConfiguration.builder()
//                 .connectedTo("localhost:9200")
// //                .usingSsl()
// //                .withProxy("localhost:8080")
//                 // .withBasicAuth("elastic","P@ssw0rd")
//                 .build();
//     }
// }
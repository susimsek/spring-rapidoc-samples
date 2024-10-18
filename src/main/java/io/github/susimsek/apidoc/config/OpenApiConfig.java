package io.github.susimsek.apidoc.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;
import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration(proxyBeanMethods = false)
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .info(new Info()
                .title("User Management REST API")
                .description("""
                                ### Core API

                                This API allows you to manage users in the system. The key functionalities include:

                                - **Create User**: You can add new users.
                                - **Update User**: You can update the details of existing users.
                                - **Delete User**: You can delete users from the system.
                                - **List Users**: You can retrieve all users from the system.
                                """)
                .version("v1.0")
                .contact(new Contact()
                    .name("Şuayb Şimşek")
                    .url("https://github.com/susimsek")
                    .email("contact@susimsek.dev"))
                .license(new License()
                    .name("Apache 2.0")
                    .url("http://springdoc.org")));
    }

    @Bean
    public GroupedOpenApi coreApi() {
        return GroupedOpenApi.builder()
            .group("core")
            .pathsToMatch("/api/users/**")
            .build();
    }
}

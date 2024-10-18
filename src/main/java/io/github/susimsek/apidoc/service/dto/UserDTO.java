package io.github.susimsek.apidoc.service.dto;

import io.swagger.v3.oas.annotations.media.Schema;

@Schema(description = "DTO for user data transfer")
public record UserDTO(

    @Schema(description = "User's unique ID", example = "1", requiredMode = Schema.RequiredMode.REQUIRED)
    Long id,

    @Schema(description = "User's name", example = "John", requiredMode = Schema.RequiredMode.REQUIRED)
    String name,

    @Schema(description = "User's email address", example = "john.doe@example.com", requiredMode = Schema.RequiredMode.REQUIRED)
    String email
) {}

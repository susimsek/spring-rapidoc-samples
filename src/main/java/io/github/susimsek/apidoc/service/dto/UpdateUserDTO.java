package io.github.susimsek.apidoc.service.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

@Schema(description = "DTO for updating an existing user")
public record UpdateUserDTO(

    @JsonIgnore
    @Schema(hidden = true)
    Long id,

    @Schema(description = "User's name", example = "John", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotBlank(message = "Name is mandatory")
    @Size(min = 2, max = 50, message = "Name must be between 2 and 50 characters")
    @Pattern(regexp = "^[A-Za-z]+$", message = "Name must contain only letters")
    String name,

    @Schema(description = "User's email address", example = "john.doe@example.com", requiredMode = Schema.RequiredMode.REQUIRED)
    @NotBlank(message = "Email is mandatory")
    @Email(message = "Email should be valid")
    String email
) {}

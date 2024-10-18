package io.github.susimsek.apidoc.web.rest;

import io.github.susimsek.apidoc.service.UserService;
import io.github.susimsek.apidoc.service.dto.CreateUserDTO;
import io.github.susimsek.apidoc.service.dto.UpdateUserDTO;
import io.github.susimsek.apidoc.service.dto.UserDTO;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.ArraySchema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Validated
@Tag(name = "user", description = "Operations related to user management")
public class UserController {

    private final UserService userService;

    @Operation(summary = "Create a new user", description = "Adds a new user to the system.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "201", description = "User created successfully",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = UserDTO.class))),
        @ApiResponse(responseCode = "400", description = "Invalid input",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = ProblemDetail.class))),
        @ApiResponse(responseCode = "409", description = "User already exists",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = ProblemDetail.class)))
    })
    @PostMapping
    public ResponseEntity<UserDTO> createUser(@Valid @RequestBody CreateUserDTO createUserDTO) {
        UserDTO createdUser = userService.create(createUserDTO);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    @Operation(summary = "Update an existing user", description = "Updates the details of an existing user.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "User updated successfully",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = UserDTO.class))),
        @ApiResponse(responseCode = "400", description = "Invalid input",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = ProblemDetail.class))),
        @ApiResponse(responseCode = "404", description = "User not found",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = ProblemDetail.class)))
    })
    @PutMapping("/{id}")
    public ResponseEntity<UserDTO> updateUser(
        @Parameter(description = "User's unique ID", example = "1")
        @PathVariable @Min(1) @NotNull(message = "ID cannot be null") Long id,
        @Valid @RequestBody UpdateUserDTO updateUserDTO) {
        updateUserDTO = new UpdateUserDTO(id, updateUserDTO.name(), updateUserDTO.email());
        UserDTO updatedUser = userService.update(updateUserDTO);
        return ResponseEntity.ok(updatedUser);
    }

    @Operation(summary = "Get a user by ID", description = "Fetches a user by their ID.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "User found",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = UserDTO.class))),
        @ApiResponse(responseCode = "400", description = "Invalid ID format",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = ProblemDetail.class))),
        @ApiResponse(responseCode = "404", description = "User not found",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = ProblemDetail.class)))
    })
    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUserById(
        @Parameter(description = "User's unique ID", example = "1")
        @PathVariable @Min(1) @NotNull(message = "ID cannot be null") Long id) {
        UserDTO user = userService.findById(id);
        return ResponseEntity.ok(user);
    }

    @Operation(summary = "Get all users", description = "Fetches all users.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "200", description = "List of users",
            content = @Content(mediaType = "application/json",
                array = @ArraySchema(schema = @Schema(implementation = UserDTO.class))))
    })
    @GetMapping
    public ResponseEntity<List<UserDTO>> getAllUsers() {
        List<UserDTO> users = userService.findAll();
        return ResponseEntity.ok(users);
    }

    @Operation(summary = "Delete a user by ID", description = "Deletes a user by their ID.")
    @ApiResponses(value = {
        @ApiResponse(responseCode = "204", description = "User deleted successfully", content = @Content),
        @ApiResponse(responseCode = "400", description = "Invalid ID format",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = ProblemDetail.class))),
        @ApiResponse(responseCode = "404", description = "User not found",
            content = @Content(mediaType = "application/json", schema = @Schema(implementation = ProblemDetail.class)))
    })
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(
        @Parameter(description = "User's unique ID", example = "1")
        @PathVariable @Min(1) @NotNull(message = "ID cannot be null") Long id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }
}

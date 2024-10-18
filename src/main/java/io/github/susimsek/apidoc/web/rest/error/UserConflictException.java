package io.github.susimsek.apidoc.web.rest.error;

import lombok.Getter;

@Getter
public class UserConflictException extends RuntimeException {
    private final String email;

    public UserConflictException(String email) {
        super("User with email " + email + " already exists");
        this.email = email;
    }
}

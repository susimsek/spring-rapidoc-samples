package io.github.susimsek.apidoc.web.rest.error;

import lombok.Getter;

@Getter
public class UserNotFoundException extends RuntimeException {
    private final Long userId;

    public UserNotFoundException(Long userId) {
        super("User with ID " + userId + " not found");
        this.userId = userId;
    }
}

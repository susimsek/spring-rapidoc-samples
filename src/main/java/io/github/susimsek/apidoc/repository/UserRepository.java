package io.github.susimsek.apidoc.repository;

import io.github.susimsek.apidoc.domain.User;
import java.util.*;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.stereotype.Repository;

@Repository
public class UserRepository {

    private final Map<Long, User> users = new HashMap<>();
    private final AtomicLong counter = new AtomicLong();

    public Optional<User> findById(Long id) {
        return Optional.ofNullable(users.get(id));
    }

    public Optional<User> findByEmail(String email) {
        return users.values().stream()
            .filter(user -> user.getEmail().equals(email))
            .findFirst();
    }

    public List<User> findAll() {
        return new ArrayList<>(users.values());
    }

    public User save(User user) {
        user.setId(Optional.ofNullable(user.getId()).orElseGet(counter::incrementAndGet));
        users.put(user.getId(), user);
        return user;
    }

    public void deleteById(Long id) {
        users.remove(id);
    }
}

package io.github.susimsek.apidoc.service;

import io.github.susimsek.apidoc.domain.User;
import io.github.susimsek.apidoc.repository.UserRepository;
import io.github.susimsek.apidoc.service.dto.CreateUserDTO;
import io.github.susimsek.apidoc.service.dto.UpdateUserDTO;
import io.github.susimsek.apidoc.service.dto.UserDTO;
import io.github.susimsek.apidoc.service.mapper.UserMapper;
import io.github.susimsek.apidoc.web.rest.error.UserConflictException;
import io.github.susimsek.apidoc.web.rest.error.UserNotFoundException;
import java.util.List;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;
    private final UserRepository userRepository;

    // Create a new user
    public UserDTO create(CreateUserDTO createUserDTO) {
        // Check if a user with the given email already exists
        userRepository.findByEmail(createUserDTO.email())
                .ifPresent(existingUser -> {
                    throw new UserConflictException(createUserDTO.email());
                });

        // If no user exists, map the DTO to a User entity and save it
        User user = userMapper.toUser(createUserDTO);
        User savedUser = userRepository.save(user);
        return userMapper.toUserDTO(savedUser);
    }

    // Update an existing user (Partial Update)
    public UserDTO update(UpdateUserDTO updateUserDTO) {
        // Find the user by ID, if not found throw UserNotFoundException
        User user = userRepository.findById(updateUserDTO.id())
                .orElseThrow(() -> new UserNotFoundException(updateUserDTO.id()));

        // Use MapStruct to apply the partial update from UpdateUserDTO
        userMapper.updateUserFromDTO(updateUserDTO, user);
        User updatedUser = userRepository.save(user);
        return userMapper.toUserDTO(updatedUser);
    }

    // Get all users
    public List<UserDTO> findAll() {
        return userRepository.findAll().stream()
                .map(userMapper::toUserDTO)
                .toList();
    }

    // Find a user by ID
    public UserDTO findById(Long id) {
        return userRepository.findById(id)
                .map(userMapper::toUserDTO)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    // Delete a user by ID
    public void delete(Long id) {
        // Check if the user exists, if not throw UserNotFoundException
        userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));

        // Remove the user from the repository
        userRepository.deleteById(id);
    }
}

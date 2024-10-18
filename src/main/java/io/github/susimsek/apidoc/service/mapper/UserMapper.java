package io.github.susimsek.apidoc.service.mapper;

import io.github.susimsek.apidoc.domain.User;
import io.github.susimsek.apidoc.service.dto.CreateUserDTO;
import io.github.susimsek.apidoc.service.dto.UpdateUserDTO;
import io.github.susimsek.apidoc.service.dto.UserDTO;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface UserMapper {

    // Maps CreateUserDTO to User entity
    User toUser(CreateUserDTO createUserDTO);

    // Maps UpdateUserDTO to User entity
    User toUser(UpdateUserDTO updateUserDTO);

    // Maps User entity to UserDTO
    UserDTO toUserDTO(User user);

    // Partial update: Updates the existing User entity with data from UpdateUserDTO
    void updateUserFromDTO(UpdateUserDTO updateUserDTO, @MappingTarget User user);
}

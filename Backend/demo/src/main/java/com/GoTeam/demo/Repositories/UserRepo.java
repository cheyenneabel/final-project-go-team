package com.GoTeam.demo.Repositories;

import com.GoTeam.demo.Models.Matches;
import com.GoTeam.demo.Models.UserModel;
import org.springframework.data.repository.CrudRepository;
import java.util.Optional;
import java.util.UUID;

public interface UserRepo extends CrudRepository<UserModel, Long> {
    Optional<UserModel> findByEmail(String email);
}

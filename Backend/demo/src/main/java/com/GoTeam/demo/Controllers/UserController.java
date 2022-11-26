package com.GoTeam.demo.Controllers;

import com.GoTeam.demo.Models.UserModel;
import com.GoTeam.demo.Repositories.UserRepo;
import org.json.JSONObject;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    private UserRepo userRepo;
    public UserController(UserRepo userRepo) {
        this.userRepo = userRepo;
    }

    @PostMapping("/signup")
    public UserModel signUp(@RequestBody UserModel incomingUser){
        UserModel newUser = new UserModel();
        newUser.setFirstName(incomingUser.getFirstName());
        newUser.setLastName(incomingUser.getLastName());
        newUser.setCity(incomingUser.getCity());
        newUser.setSkillLevel(incomingUser.getSkillLevel());
        newUser.setEmail(incomingUser.getEmail());
        newUser.setPassword(BCrypt.hashpw(incomingUser.getPassword(), BCrypt.gensalt(10)));
        userRepo.save(newUser);
        return newUser;
    }

    @PostMapping("/login")
    public boolean login(@RequestBody String body){
        JSONObject jsonObject = new JSONObject(body);
        String incomingEmail = jsonObject.getString("email");
        if(incomingEmail != null){
            UserModel user = userRepo.findByEmail(incomingEmail).get();
            boolean pwMatch = BCrypt.checkpw(jsonObject.getString("password"), user.getPassword());
            return pwMatch;
        }
        return  false;
    }
}

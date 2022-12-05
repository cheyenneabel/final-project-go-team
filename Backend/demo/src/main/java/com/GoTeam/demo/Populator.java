package com.GoTeam.demo;

import com.GoTeam.demo.Models.Matches;
import com.GoTeam.demo.Models.UserModel;
import com.GoTeam.demo.Repositories.MatchesRepository;
import com.GoTeam.demo.Repositories.UserRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component


public class Populator implements CommandLineRunner {
    private MatchesRepository matchrepo;
    private UserRepo userRepo;

    public Populator(MatchesRepository matchrepo, UserRepo userRepo) {
        this.matchrepo = matchrepo;
        this.userRepo = userRepo;

    }

    @Override
    public void run(String... args) throws Exception {

        Matches match1 = new Matches("Columbus","7/25","Beginner","6:30pm");
        matchrepo.save(match1);
        Matches match2 = new Matches("Hilliard","7/26","Intermediate","4:00pm");
        matchrepo.save(match2);
        Matches match3 = new Matches("Westerville","7/24","Advanced","7:00pm");
        matchrepo.save(match3);
        Matches match4 = new Matches("Gahanna","7/28","Expert","9:00pm");
        matchrepo.save(match4);


        UserModel user1 = new UserModel("Omar@gmail.com","Omar1","Omar","AlKhulaidi","Intermediate","Hilliard", match2);
        userRepo.save(user1);
        UserModel user2 = new UserModel("Cheyenne@gmail.com","Cheyenne2","Cheyenne","Abel","Beginner","Columbus", match1);
        userRepo.save(user2);
        UserModel user3 = new UserModel("Ayanle@gmail.com","Ayanle3","Ayanle","Dahir","Advanced","Westerviille", match3);
        userRepo.save(user3);
        UserModel user4 = new UserModel("Thana@gmail.com","Thana4","Thana","Jaradat","Expert","Gahanna", match4);
        userRepo.save(user4);



    }
}
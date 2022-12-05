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

        Matches match1 = new Matches("Columbus","9/20","beginner","6:30");
        matchrepo.save(match1);
        Matches match2 = new Matches("Cleveland","8/24","pro","4:00");
        matchrepo.save(match2);
        UserModel user1 = new UserModel("lol@lol.com", "$2a$10$CsqfzRjPBvTOlGcfnI4YDuVd5pHvbu9HLklUXTorrG2QSGYTJT8Mq", "T","J", "pro", "dublin", match1, match2);
        userRepo.save(user1);
    }
}

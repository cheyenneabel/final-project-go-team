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

        Matches match1 = new Matches("Columbus","2022-07-25","Beginner","06:30");

        matchrepo.save(match1);
        Matches match2 = new Matches("Hilliard","2022-07-26","Intermediate","04:00");
        matchrepo.save(match2);
        Matches match3 = new Matches("Westerville","2022-07-24","Advanced","07:00");
        matchrepo.save(match3);
        Matches match4 = new Matches("Gahanna","2022-07-28","Expert","09:00");
        matchrepo.save(match4);
        Matches match5 = new Matches("Clevland", "2022-08-01", "Intermediate", "18:00");
        matchrepo.save(match5);
        Matches match6 = new Matches("Clevland", "2022-08-01", "Expert", "21:30");
        matchrepo.save(match6);
        Matches match7 = new Matches("Dublin", "2022-12-09", "Expert", "15:30");
        matchrepo.save(match7);

        UserModel user1 = new UserModel("Omar@gmail.com","$2a$10$5.hpSTgVQLlpa3LyvmcrUOFccv1pOsfrXOvzFWD5mqgdXmm.R0k/K","Omar","AlKhulaidi","Intermediate","Hilliard", match2);
        userRepo.save(user1);
        UserModel user2 = new UserModel("Cheyenne@gmail.com","$2a$10$99fZhjsreFcc1Yq.iUglz.uaCJ78J0wcGZCxHP5535ymgBGoI81xK","Cheyenne","Abel","Beginner","Columbus", match1);
        userRepo.save(user2);
        UserModel user3 = new UserModel("Ayanle@gmail.com","$2a$10$gca5KcgqhAlMxxn.wvLY1.49XzI31GLO7mifV0mIXWZUuT1z3pddG","Ayanle","Dahir","Advanced","Westerville", match3);
        userRepo.save(user3);
        UserModel user4 = new UserModel("Thana@gmail.com","$2a$10$OKFl3O2PI8X4UZ8nrTePs.I0ZOZj5Y7euV3sSxrlrzSPkRqVkz2Hu","Thana","Jaradat","Expert","Columbus", match4);
        userRepo.save(user4);
        UserModel user5 = new UserModel("Thanaa@gmail.com","$2a$10$CsqfzRjPBvTOlGcfnI4YDuVd5pHvbu9HLklUXTorrG2QSGYTJT8Mq","Thanaa","Jaradat","Expert","Dublin", match7);
        userRepo.save(user5);
        

    }
}
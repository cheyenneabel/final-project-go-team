package com.GoTeam.demo.Controllers;

import com.GoTeam.demo.Models.Matches;
import com.GoTeam.demo.Models.UserModel;
import com.GoTeam.demo.Repositories.MatchesRepository;
import com.GoTeam.demo.Repositories.UserRepo;
import org.apache.catalina.User;
import org.springframework.web.bind.annotation.*;

import java.sql.Time;
import java.util.Date;
import java.util.Optional;
import java.util.UUID;


@RestController
public class MatchesController {
    private MatchesRepository matchesRepo;
    private UserRepo userRepo;

    public MatchesController(MatchesRepository matchesrepo, UserRepo userRepo) {
        this.matchesRepo = matchesrepo;
        this.userRepo= userRepo;
    }

    @GetMapping("/matchesLocation/{location}")
    public Iterable<Matches> getAllLocations(@PathVariable String location) {
        return matchesRepo.findByLocation(location);
    }

    @GetMapping("/matchesDate/{date}")
    public Iterable<Matches> getAllDates(@PathVariable String date) {
        return matchesRepo.findByDate(date);
    }

    @GetMapping("/matchesTime/{time}")
    public Iterable<Matches> getAllTimes(@PathVariable String time) {
        return matchesRepo.findByTime(time);
    }

    @GetMapping("/matchesSkillLevel/{skillLevel}")
    public Iterable<Matches> getSkillLevels(@PathVariable String skillLevel) {
        return matchesRepo.findBySkillLevel(skillLevel);
    }

    @GetMapping("/DateAndTime/{date}/{time}")
    public Iterable<Matches> getDateAndTime(@PathVariable String date, @PathVariable String time) {
        return matchesRepo.findByDateAndTime(date, time);
    }

    @GetMapping("/LocationAndTime/{location}/{time}")
    public Iterable<Matches> getLocationAndTime(@PathVariable String location, @PathVariable String time) {
        return matchesRepo.findByLocationAndTime(location, time);
    }

    @GetMapping("/skillLevelAndTime/{skillLevel}/{time}")
    public Iterable<Matches> getSkillLevelAndTime(@PathVariable String skillLevel, @PathVariable String time) {
        return matchesRepo.findBySkillLevelAndTime(skillLevel, time);
    }

    @GetMapping("/LocationAndDate/{location}/{date}")
    public Iterable<Matches> getLocationAndDate(@PathVariable String location, @PathVariable String date) {
        return matchesRepo.findByLocationAndDate(location, date);
    }

    @GetMapping("/LocationAndSkillLevel/{location}/{skillLevel}")
    public Iterable<Matches> getLocationAndSkillLevel(@PathVariable String location, @PathVariable String skillLevel) {
        return matchesRepo.findByLocationAndSkillLevel(location, skillLevel);
    }

    @GetMapping("/DateAndSkillLevel/{date}/{skillLevel}")
    public Iterable<Matches> getDateAndSkillLevel(@PathVariable String date, @PathVariable String skillLevel) {
        return matchesRepo.findByDateAndSkillLevel(date, skillLevel);
    }

    @GetMapping("/DateAndTimeAndLocation/{date}/{time}/{location}")
    public Matches getDateAndLocationAndTime(@PathVariable String date, @PathVariable String location, @PathVariable String time) {
        return matchesRepo.findByDateAndTimeAndLocation(date, time, location).get();

    }

    @GetMapping("/skillLevelAndTimeAndLocation/{skillLevel}/{time}/{location}")
    public Iterable<Matches> getSkillLevelAndTimeAndLocation(@PathVariable String skillLevel, @PathVariable String time, @PathVariable String location) {
        return matchesRepo.findBySkillLevelAndTimeAndLocation(skillLevel, time, location);

    }

    @GetMapping("/DateAndSkillLevelAndLocation/{date}/{skillLevel}/{location}")
    public Iterable<Matches> getDateAndSkillLevelAndLocation(@PathVariable String date, @PathVariable String skillLevel, @PathVariable String location) {
        return matchesRepo.findBySkillLevelAndDateAndLocation(skillLevel, date, location);
    }

    @GetMapping("/DateAndSkillLevelAndLocationAndTime/{date}/{skillLevel}/{location}/{time}")
    public Matches getDateAndSkillLevelAndLocationAndTime(@PathVariable String date, @PathVariable String skillLevel, @PathVariable String location, @PathVariable String time) {
        return matchesRepo.findBySkillLevelAndDateAndLocationAndTime(skillLevel, date, location, time).get();
    }

    @GetMapping("/DateAndSkillLevelAndTime/{date}/{skillLevel}/{time}")
    public Iterable<Matches> getDateAndSkillLevelAndTime(@PathVariable String date, @PathVariable String skillLevel, @PathVariable String time) {
        return matchesRepo.findBySkillLevelAndDateAndTime(skillLevel, date, time);
    }

    @PostMapping("/Schedule/{id}")
    public void schedule(@RequestBody Matches match, @PathVariable UUID id) {
        Optional<Matches> existingMatch = matchesRepo.findByDateAndTimeAndLocation(match.getDate(), match.getTime(), match.getLocation());
        if (existingMatch.isEmpty()) {
            UserModel existingUser = userRepo.findById(id).get();
            existingUser.setMatches(existingMatch.get());
            matchesRepo.save(match);
        }
    }

    @GetMapping("/Matches")
    public Iterable<Matches> getAllMatches() {
        return matchesRepo.findAll();
    }

    @DeleteMapping("/DeleteMatch/{date}/{skillLevel}/{location}/{time}")
    public void Matches(@PathVariable String time, @PathVariable String date, @PathVariable String skillLevel, @PathVariable String location) {
        Matches matches = matchesRepo.findBySkillLevelAndDateAndLocationAndTime(skillLevel, date, location, time).get();
        long matchesId = matches.getId();
        matchesRepo.deleteById(matchesId);

    }
    @PutMapping("/combined")
    public Matches updateMatch(@RequestBody Matches incomingMatch){
        Matches matches = matchesRepo.findBySkillLevelAndDateAndLocationAndTime(incomingMatch.getSkillLevel(), incomingMatch.getDate(), incomingMatch.getLocation(), incomingMatch.getTime()).get();
        matches.setDate(incomingMatch.getDate());
        matches.setTime(incomingMatch.getTime());
        matches.setLocation(incomingMatch.getLocation());
        matches.setSkillLevel(incomingMatch.getSkillLevel());
        return matches;
    }
    @PutMapping("/join/{email}")
    public Matches joinMatch(@PathVariable String email, @RequestBody Matches incomingMatch){
        Optional <Matches> matches = matchesRepo.findBySkillLevelAndDateAndLocationAndTime(incomingMatch.getSkillLevel(), incomingMatch.getDate(), incomingMatch.getLocation(), incomingMatch.getTime());
        if(matches.isPresent() && matches.get().getUsers().size() == 1){
            matches.get().setUsers(userRepo.findByEmail(email).get());
            return matches.get();
        }
        return null;
    }


    }
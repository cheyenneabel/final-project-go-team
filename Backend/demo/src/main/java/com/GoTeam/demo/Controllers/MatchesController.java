package com.GoTeam.demo.Controllers;

import com.GoTeam.demo.Models.Matches;
import com.GoTeam.demo.Repositories.MatchesRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
public class MatchesController {
    private MatchesRepository matchesRepo;

    public MatchesController(MatchesRepository matchesrepo) {
        matchesRepo = matchesrepo;
    }

    @GetMapping("/location")
    public Iterable<Matches> getAllLocations() {
        return matchesRepo.findAll();
    }

    @GetMapping("/date")
    public Iterable<Matches> getAllDates() {
        return matchesRepo.findAll();
    }

    @GetMapping("/time")
    public Iterable<Matches> getAllTimes() {
        return matchesRepo.findAll();
    }

    @GetMapping("/level")
    public Iterable<Matches> getSkillLevels() {
        return matchesRepo.findAll();
    }

    @GetMapping("/DateAndTime/{date}/{time}")
    public Iterable<Matches> getDateAndTime(@PathVariable int date, @PathVariable int time) {
        return matchesRepo.findByDateAndTime(date, time);
    }

    @GetMapping("/LocationAndTime/{location}/{time}")
    public Iterable<Matches> getLocationAndTime(@PathVariable String location, @PathVariable int time) {
        return matchesRepo.findByLocationAndTime(location, time);
    }

    @GetMapping("/skillLevelAndTime/{skillLevel}/{time}")
    public Iterable<Matches> getSkillLevelAndTime(@PathVariable String skillLevel, @PathVariable int time) {
        return matchesRepo.findBySkillLevelAndTime(skillLevel, time);
    }

    @GetMapping("/LocationAndDate/{location}/{date}")
    public Iterable<Matches> getLocationAndDate(@PathVariable String location, @PathVariable int date) {
        return matchesRepo.findByLocationAndDate(location, date);
    }

    @GetMapping("/LocationAndSkillLevel/{location}/{skillLevel}")
    public Iterable<Matches> getLocationAndSkillLevel(@PathVariable String location, @PathVariable String skillLevel) {
        return matchesRepo.findByLocationAndSkillLevel(location, skillLevel);
    }

    @GetMapping("/DateAndSkillLevel/{date}/{skillLevel}")
    public Iterable<Matches> getDateAndSkillLevel(@PathVariable int date, @PathVariable String skillLevel) {
        return matchesRepo.findByDateAndSkillLevel(date, skillLevel);
    }

    @GetMapping("/DateAndTimeAndLocation/{date}/{time}/{location}")
    public Matches getDateAndLocationAndTime(@PathVariable int date, @PathVariable String location, @PathVariable int time) {
        return matchesRepo.findByDateAndTimeAndLocation(date, time, location).get();

    }

    @GetMapping("/skillLevelAndTimeAndLocation/{skillLevel}/{time}/{location}")
    public Iterable<Matches> getSkillLevelAndTimeAndLocation(@PathVariable String skillLevel, @PathVariable int time, @PathVariable String location) {
        return matchesRepo.findBySkillLevelAndTimeAndLocation(skillLevel, time, location);

    }

    @GetMapping("/DateAndSkillLevelAndLocation/{date}/{skillLevel}/{location}")
    public Iterable<Matches> getDateAndSkillLevelAndLocation(@PathVariable int date, @PathVariable String skillLevel, @PathVariable String location) {
        return matchesRepo.findBySkillLevelAndDateAndLocation(skillLevel, date, location);
    }

    @GetMapping("/DateAndSkillLevelAndLocationAndTime/{date}/{skillLevel}/{location}/{time}")
    public Matches getDateAndSkillLevelAndLocationAndTime(@PathVariable int date, @PathVariable String skillLevel, @PathVariable String location, @PathVariable int time) {
        return matchesRepo.findBySkillLevelAndDateAndLocationAndTime(skillLevel, date, location, time).get();
    }
    @GetMapping("/DateAndSkillLevelAndTime/{date}/{skillLevel}/{time}")
    public Iterable<Matches> getDateAndSkillLevelAndTime(@PathVariable int date, @PathVariable String skillLevel, @PathVariable int time) {
        return matchesRepo.findBySkillLevelAndDateAndTime(skillLevel, date, time);
    }
    @PostMapping("/Schedule")
    public void schedule(@RequestBody Matches match) {
        Optional <Matches> existingMatch = matchesRepo.findByDateAndTimeAndLocation(match.getDate(),match.getTime(),match.getLocation());
        if(existingMatch.isEmpty()){
            matchesRepo.save(match);
        }
    }
}
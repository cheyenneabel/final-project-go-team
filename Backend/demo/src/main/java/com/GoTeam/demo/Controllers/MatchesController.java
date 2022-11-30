package com.GoTeam.demo.Controllers;

import com.GoTeam.demo.Models.Matches;
import com.GoTeam.demo.Repositories.MatchesRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class MatchesController {
    private MatchesRepository Matchesrepo;

    public MatchesController(MatchesRepository matchesrepo) {
        Matchesrepo = matchesrepo;
    }

    @GetMapping("/location")
    public Iterable<Matches> getAllLocations() {
        return Matchesrepo.findAll();
    }

    @GetMapping("/date")
    public Iterable<Matches> getAllDates() {
        return Matchesrepo.findAll();
    }

    @GetMapping("/time")
    public Iterable<Matches> getAllTimes() {
        return Matchesrepo.findAll();
    }

    @GetMapping("/level")
    public Iterable<Matches> getSkillLevels() {
        return Matchesrepo.findAll();
    }

    @GetMapping("/DateAndTime/{date}/{time}")
    public Iterable<Matches> getDateAndTime(@PathVariable int date, @PathVariable int time) {
        return Matchesrepo.findByDateAndTime(date, time);
    }

    @GetMapping("/LocationAndTime/{location}/{time}")
    public Iterable<Matches> getLocationAndTime(@PathVariable String location, @PathVariable int time) {
        return Matchesrepo.findByLocationAndTime(location, time);
    }

    @GetMapping("/skillLevelAndTime/{skillLevel}/{time}")
    public Iterable<Matches> getSkillLevelAndTime(@PathVariable String skillLevel, @PathVariable int time) {
        return Matchesrepo.findBySkillLevelAndTime(skillLevel, time);
    }

    @GetMapping("/LocationAndDate/{location}/{date}")
    public Iterable<Matches> getSkillLevelAnd(@PathVariable String location, @PathVariable int date) {
        return Matchesrepo.findByLocationAndDate(location, date);
    }
}


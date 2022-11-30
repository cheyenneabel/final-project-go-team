package com.GoTeam.demo.Repositories;

import com.GoTeam.demo.Models.Matches;
import org.springframework.data.repository.CrudRepository;

public interface MatchesRepository extends CrudRepository<Matches,Long>{
    Iterable <Matches> findByDateAndTime(int date, int time);
    Iterable <Matches> findByLocationAndTime(String location, int time);
    Iterable <Matches> findBySkillLevelAndTime(String skillLevel, int time);

    Iterable <Matches> findByLocationAndDate(String location, int date);

    Iterable <Matches> findByLocationAndSkillLevel(String location, String skillLevel);

    Iterable <Matches> findByDateAndSkillLevel(int date, String skillLevel);

    Iterable <Matches> findByDateAndTimeAndLocation(int date, int time, String location);

    Iterable <Matches> findBySkillLevelAndTimeAndLocation(String skillLevel, int time, String location);

    Iterable <Matches> findBySkillLevelAndDateAndLocation(String skillLevel, int date, String location);

    Iterable <Matches> findBySkillLevelAndDateAndLocationAndTime(String skillLevel, int date, String location, int time);

    Iterable <Matches> findBySkillLevelAndDateAndTime(String skillLevel, int date, int time);



}
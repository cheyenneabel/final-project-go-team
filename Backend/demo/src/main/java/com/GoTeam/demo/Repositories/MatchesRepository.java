package com.GoTeam.demo.Repositories;

import com.GoTeam.demo.Models.Matches;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface MatchesRepository extends CrudRepository<Matches,Long>{
    Iterable <Matches> findByDateAndTime(int date, int time);
    Iterable <Matches> findByLocationAndTime(String location, int time);
    Iterable <Matches> findBySkillLevelAndTime(String skillLevel, int time);

    Iterable <Matches> findByLocationAndDate(String location, int date);

    Iterable <Matches> findByLocationAndSkillLevel(String location, String skillLevel);

    Iterable <Matches> findByDateAndSkillLevel(int date, String skillLevel);

    Optional <Matches> findByDateAndTimeAndLocation(int date, int time, String location);

    Iterable <Matches> findBySkillLevelAndTimeAndLocation(String skillLevel, int time, String location);

    Iterable <Matches> findBySkillLevelAndDateAndLocation(String skillLevel, int date, String location);

    Optional <Matches> findBySkillLevelAndDateAndLocationAndTime(String skillLevel, int date, String location, int time);

    Iterable <Matches> findBySkillLevelAndDateAndTime(String skillLevel, int date, int time);





}
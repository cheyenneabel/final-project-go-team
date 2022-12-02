package com.GoTeam.demo.Repositories;

import com.GoTeam.demo.Models.Matches;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface MatchesRepository extends CrudRepository<Matches,Long>{

    Iterable <Matches> findByDateAndTime(String date, String time);
    Iterable <Matches> findByLocationAndTime(String location, String time);
    Iterable <Matches> findBySkillLevelAndTime(String skillLevel, String time);

    Iterable <Matches> findByLocationAndDate(String location, String date);

    Iterable <Matches> findByLocationAndSkillLevel(String location, String skillLevel);

    Iterable <Matches> findByDateAndSkillLevel(String date, String skillLevel);

    Optional <Matches> findByDateAndTimeAndLocation(String date, String time, String location);

    Iterable <Matches> findBySkillLevelAndTimeAndLocation(String skillLevel, String time, String location);

    Iterable <Matches> findBySkillLevelAndDateAndLocation(String skillLevel, String date, String location);

    Optional <Matches> findBySkillLevelAndDateAndLocationAndTime(String skillLevel, String date, String location, String time);

    Iterable <Matches> findBySkillLevelAndDateAndTime(String skillLevel, String date, String time);

    Iterable <Matches> findByLocation(String location);

    Iterable <Matches> findByDate(String date);

    Iterable <Matches> findByTime(String time);

    Iterable <Matches> findBySkillLevel(String skillLevel);





}
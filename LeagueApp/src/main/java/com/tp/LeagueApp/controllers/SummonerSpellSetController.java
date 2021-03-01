package com.tp.LeagueApp.controllers;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.SummonerSpellSet;
import com.tp.LeagueApp.services.LeagueAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class SummonerSpellSetController {
    @Autowired
    LeagueAppService service;

    //User summonerSpellSetName in JSON request!!
    //CREATE
    @PostMapping("/new/summonerSpellSet")
    public ResponseEntity createNewRuneSet(@RequestBody SummonerSpellSet toAdd) {
        SummonerSpellSet toReturn = null;
        try {
            toReturn = service.createNewSummonerSpellSet(toAdd);
        }
        catch(Exception | InvalidSummonerSpellException | EmptySummonerSpellListException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toReturn);
    }

    //READ
    @GetMapping("/summonerSpellSets")
    public ResponseEntity getAllSummonerSpellSets() {
        List<SummonerSpellSet> toReturn = service.getAllSummonerSpellSets();

        return ResponseEntity.ok(toReturn);
    }

    @GetMapping("/summonerSpellSets/id/{summonerSpellSetId}")
    public ResponseEntity getSummonerSpellSetsById(@PathVariable Integer summonerSpellSetId) {
        SummonerSpellSet toReturn = new SummonerSpellSet();
        try {
            toReturn = service.getSummonerSpellSetById(summonerSpellSetId);
        }
        catch(NullIdException | InvalidSetException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toReturn);
    }

    //UPDATE
    @PutMapping("/update/summonerSpellSet")
    public String updateSummonerSpellSet(@RequestBody SummonerSpellSet toUpdate) {
        try {
            service.updateSummonerSpellSet(toUpdate);
            return "Summoner Spell Set " + toUpdate.getSummonerSpellSetId() + " successfully updated.";
        }
        catch(Exception e) {
            return e.getMessage();
        }
    }

    //DELETE
    @DeleteMapping("/delete/summonerSpellSet/id/{summSpellSetId}")
    public String deleteSummonerSpellSetById(@PathVariable Integer summSpellSetId) {
        try {
            service.deleteSummonerSpellSetById(summSpellSetId);
            return "Summoner Spell Set " + summSpellSetId + " successfully deleted.";
        }
        catch(NullIdException | InvalidSetException e) {
            return e.getMessage();
        }
    }
}

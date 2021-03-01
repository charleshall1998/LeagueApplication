package com.tp.LeagueApp.controllers;

import com.tp.LeagueApp.exceptions.InvalidSetException;
import com.tp.LeagueApp.exceptions.NullIdException;
import com.tp.LeagueApp.exceptions.NullNameException;
import com.tp.LeagueApp.models.SummonerSpell;
import com.tp.LeagueApp.services.LeagueAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SummonerSpellController {
    @Autowired
    LeagueAppService service;

    //READ
    @GetMapping("/summonerSpells")
    public ResponseEntity getAllSummonerSpells() {
        List<SummonerSpell> toReturn = service.getAllSummonerSpells();

        return ResponseEntity.ok(toReturn);
    }

    @GetMapping("/summonerSpells/name/{summonerSpellName}")
    public ResponseEntity getSummonerSpellByName(@PathVariable String summonerSpellName) {
        SummonerSpell toReturn = new SummonerSpell();
        try {
            toReturn = service.getSummonerSpellByName(summonerSpellName);
        }
        catch(NullNameException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toReturn);
    }

    @GetMapping("/summonerSpells/id/{summonerSpellId}")
    public ResponseEntity getSummonerSpellById(@PathVariable Integer summonerSpellId) {
        SummonerSpell toReturn = new SummonerSpell();
        try {
            toReturn = service.getSummonerSpellById(summonerSpellId);
        }
        catch(NullIdException | InvalidSetException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toReturn);
    }
}

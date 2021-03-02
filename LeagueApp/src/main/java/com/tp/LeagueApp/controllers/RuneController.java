package com.tp.LeagueApp.controllers;

import com.tp.LeagueApp.exceptions.InvalidSetException;
import com.tp.LeagueApp.exceptions.NullIdException;
import com.tp.LeagueApp.exceptions.NullNameException;
import com.tp.LeagueApp.models.Rune;
import com.tp.LeagueApp.services.LeagueAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class RuneController {

    @Autowired
    LeagueAppService service;

    //READ
    @GetMapping("/runes")
    public ResponseEntity getAllRunes() {
        List<Rune> toReturn = service.getAllRunes();

        return ResponseEntity.ok(toReturn);
    }

    @GetMapping("/runes/name/{runeName}")
    public ResponseEntity getRuneByName(@PathVariable String runeName) {
        Rune toReturn = new Rune();
        try {
            toReturn = service.getRuneByName(runeName);
        }
        catch(NullNameException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toReturn);
    }

    @GetMapping("/runes/id/{runeId}")
    public ResponseEntity getRuneByName(@PathVariable Integer runeId) {
        Rune toReturn = new Rune();
        try {
            toReturn = service.getRuneById(runeId);
        }
        catch(NullIdException | InvalidSetException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toReturn);
    }

}

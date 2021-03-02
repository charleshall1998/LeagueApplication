package com.tp.LeagueApp.controllers;

import com.tp.LeagueApp.models.Champion;
import com.tp.LeagueApp.services.LeagueAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ChampionController {

    @Autowired
    LeagueAppService service;

    //READ
    @GetMapping("/champions")
    public ResponseEntity getAllChampions() {
        List<Champion> toReturn = service.getAllChampions();

        return ResponseEntity.ok(toReturn);
    }

    @GetMapping("/champions/name/{championName}")
    public ResponseEntity getChampionByName(@PathVariable String championName) {
        Champion toReturn = new Champion();
        try {
            toReturn = service.getChampionByName(championName);
        }
        catch(Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toReturn);
    }

    @GetMapping("/champions/id/{championId}")
    public ResponseEntity getChampionById(@PathVariable Integer championId) {
        Champion toReturn = new Champion();
        try {
            toReturn = service.getChampionById(championId);
        }
        catch(Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toReturn);
    }

}

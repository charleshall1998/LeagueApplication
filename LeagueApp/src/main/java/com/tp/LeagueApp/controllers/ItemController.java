package com.tp.LeagueApp.controllers;

import com.tp.LeagueApp.exceptions.InvalidItemException;
import com.tp.LeagueApp.models.Item;
import com.tp.LeagueApp.services.LeagueAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ItemController {

    @Autowired
    LeagueAppService service;

    //READ
    @GetMapping("/items")
    public ResponseEntity getAllItemSets() {
        List<Item> toReturn = service.getAllItems();

        return ResponseEntity.ok(toReturn);
    }

    @GetMapping("/items/name/{itemName}")
    public ResponseEntity getItemByName(@PathVariable String itemName) {
        Item toReturn = new Item();
        try {
            toReturn = service.getItemByName(itemName);
        }
        catch(Exception | InvalidItemException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toReturn);
    }

    @GetMapping("/items/id/{itemId}")
    public ResponseEntity getItemById(@PathVariable Integer itemId) {
        Item toReturn = new Item();
        try {
            toReturn = service.getItemById(itemId);
        }
        catch(Exception | InvalidItemException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toReturn);
    }

}

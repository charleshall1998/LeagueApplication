package com.tp.LeagueApp.controllers;

import com.tp.LeagueApp.exceptions.*;
import com.tp.LeagueApp.models.ItemSet;
import com.tp.LeagueApp.services.LeagueAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class ItemSetController {

    @Autowired
    LeagueAppService service;

    //CREATE
    @PostMapping("/new/itemSet")
    public ResponseEntity createNewItemSet(@RequestBody ItemSet toAdd) {
        ItemSet toReturn = null;
        try {
            toReturn = service.createNewItemSet(toAdd);
        }
        catch(EmptyItemListException | NullSetException | InvalidItemException | DuplicateComponentException | MaxNameLengthException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toReturn);
    }

    //READ
    @GetMapping("/itemSets")
    public ResponseEntity getAllItemSets() {
        List<ItemSet> toReturn = service.getAllItemSets();

        return ResponseEntity.ok(toReturn);
    }

    @GetMapping("/itemSets/id/{itemSetId}")
    public ResponseEntity getItemSetsById(@PathVariable Integer itemSetId) {
        ItemSet toReturn = new ItemSet();
        try {
            toReturn = service.getItemSetById(itemSetId);
        }
        catch(NullIdException | InvalidSetException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }

        return ResponseEntity.ok(toReturn);
    }

    //UPDATE
    @PutMapping("/update/itemSet")
    public String updateItemSet(@RequestBody ItemSet toUpdate) {
        try {
            service.updateItemSet(toUpdate);
            return "Item Set " + toUpdate.getItemSetId() + " successfully updated.";
        }
        catch(Exception e) {
            return e.getMessage();
        }
    }

    //DELETE
    @DeleteMapping("/delete/itemSet/id/{itemSetId}")
    public String deleteItemSetById(@PathVariable Integer itemSetId) {
        try {
            service.deleteItemSetById(itemSetId);
            return "Item Set " + itemSetId + " successfully deleted.";
        }
        catch(NullIdException | InvalidSetException e) {
            return e.getMessage();
        }
    }

}

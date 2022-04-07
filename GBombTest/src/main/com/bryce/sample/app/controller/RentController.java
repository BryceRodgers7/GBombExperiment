package com.bryce.sample.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.bryce.sample.app.dto.GBombGame;
import com.bryce.sample.app.model.GBombRent;
import com.bryce.sample.app.model.GBombSearch;
import com.bryce.sample.app.model.GBombStore;

@Controller
public class RentController {
	@GetMapping("/rent")
	  public String rentForm(@ModelAttribute GBombGame game, Model model) {
	    model.addAttribute("game", new GBombGame("myFirstGame!!!"));
	    return "rentView";
	  }
	
	@RequestMapping(value="/rent", method=RequestMethod.POST, params="action=rent")
	  public String rentSubmit(@ModelAttribute GBombRent rent, Model model) {
		GBombGame blah = rent.getGame();
		System.out.println("received rent request for game " + blah.getTitle());
	    model.addAttribute("rent", rent);
	    return "rentConfirmed";
	  }
	  
	  
}
package com.bryce.sample.app.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.bryce.sample.app.dto.GBombGame;
import com.bryce.sample.app.model.GBombRent;
import com.bryce.sample.app.model.GBombSearch;
import com.bryce.sample.app.model.GBombStore;

@Controller
public class SearchController {
	@RequestMapping(value="/search", method=RequestMethod.GET)
	  public String searchForm(Model model) {
	    model.addAttribute("search", new GBombSearch());
	    return "search";
	  }
	
	@RequestMapping(value="/search", method=RequestMethod.POST, params="action=stored")
	  public String viewRentedGames(Model model) {
	    model.addAttribute("store", new GBombStore());
	    return "stored";
	  }
	
	@RequestMapping(value="/search", method=RequestMethod.POST, params="action=search")
	  public ModelAndView searchSubmit(GBombSearch search, Model model) {
		ModelAndView mav = new ModelAndView("result");
	    // hit search endpoint
		// http://www.giantbomb.com/api/search/?api_key=[YOUR-KEY]&format=json&query="metroid prime"&resources=game
		String searchString = search.getQuery();
		System.out.println("search string is " + searchString);
	    // turn json into obj
		// scan thru results doc and add each to mav
		search.setGame(new GBombGame(searchString));
		search.setGameString(searchString);
		// model.addAttribute("search", search);
		mav.addObject("search", search);
	    return mav;
	  }
	
	@RequestMapping(value="/search", method=RequestMethod.POST, params="action=rent")
	  public String rentGames(GBombGame game, Model model) {
		String gameString = game.getTitle();
		System.out.println("why is game string null??:" + gameString);
	    GBombRent rent = new GBombRent(game);
	    model.addAttribute("rent", rent);
	    return "rentView";
	  }
}
package com.bryce.sample.app.model;

import org.springframework.web.bind.annotation.ModelAttribute;

import com.bryce.sample.app.dto.GBombGame;

public class GBombRent {

	
    public GBombGame game;
	
  private boolean rented;

  public GBombRent(GBombGame game) {
	  this.game = game;
  }
  
  @ModelAttribute("game")
  public GBombGame getGame() {
    return game;
  }

  public void setGame(GBombGame game) {
    this.game = game;
  }

  @ModelAttribute("rented")
	public boolean isRented() {
		return rented;
	}
	
	public void setRented(boolean rented) {
		this.rented = rented;
	}
  
  
}

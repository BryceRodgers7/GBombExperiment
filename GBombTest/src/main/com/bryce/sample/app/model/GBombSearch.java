package com.bryce.sample.app.model;

import org.springframework.web.bind.annotation.ModelAttribute;

import com.bryce.sample.app.dto.GBombGame;

public class GBombSearch {

  private String query;
  private GBombGame game;
  private String gameString;

  @ModelAttribute("query")
  public String getQuery() {
    return query;
  }

  public void setQuery(String query) {
    this.query= query;
  }

  @ModelAttribute("game")
public GBombGame getGame() {
	return game;
}

public void setGame(GBombGame game) {
	this.game = game;
}

@ModelAttribute("gameString")
public String getGameString() {
	return gameString;
}

public void setGameString(String gameString) {
	this.gameString = gameString;
}
  
  
}

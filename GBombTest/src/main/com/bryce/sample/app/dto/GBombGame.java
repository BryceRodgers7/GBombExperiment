package com.bryce.sample.app.dto;

public class GBombGame {

	
	private long id;
	private String title;
	
	public GBombGame(String title) {
		this.title = title;
	}

	  public long getId() {
	    return id;
	  }

	  public void setId(long id) {
	    this.id = id;
	  }

	  public String getTitle() {
	    return title;
	  }

	  public void setTitle(String title) {
	    this.title = title;
	  }
}

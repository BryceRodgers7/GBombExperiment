package com.bryce.sample.gbomb;

public class GBombApiResponse {

	private int status_code;
	private String error;
	private int number_of_total_results;
	private int number_of_page_results;
	private int limit;
	private int offset;
	private String results;
	public int getStatus_code() {
		return status_code;
	}
	public void setStatus_code(int status_code) {
		this.status_code = status_code;
	}
	public String getError() {
		return error;
	}
	public void setError(String error) {
		this.error = error;
	}
	public int getNumber_of_total_results() {
		return number_of_total_results;
	}
	public void setNumber_of_total_results(int number_of_total_results) {
		this.number_of_total_results = number_of_total_results;
	}
	public int getNumber_of_page_results() {
		return number_of_page_results;
	}
	public void setNumber_of_page_results(int number_of_page_results) {
		this.number_of_page_results = number_of_page_results;
	}
	public int getLimit() {
		return limit;
	}
	public void setLimit(int limit) {
		this.limit = limit;
	}
	public int getOffset() {
		return offset;
	}
	public void setOffset(int offset) {
		this.offset = offset;
	}
	public String getResults() {
		return results;
	}
	public void setResults(String results) {
		this.results = results;
	}
	
	
	
}
package com.bryce.sample.app.controller;

import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.web.bind.annotation.RequestMapping;

public class IndexController implements ErrorController{
	private static final String PATH = "/error";

    @RequestMapping(value = PATH)
    public String error() {
        return "Error handling";
    }


    public String getErrorPath() {
        return PATH;
    }
}
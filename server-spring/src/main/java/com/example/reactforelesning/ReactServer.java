package com.example.reactforelesning;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class ReactServer {

    @CrossOrigin
    @RequestMapping(method = RequestMethod.GET, path = "/hello")
    public String siHei(){
        return "Hello world";
    }

}

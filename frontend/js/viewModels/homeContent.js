/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Home content module, example of singleton view model object.
 */
define(['knockout', 'ojs/ojknockout', 'ojs/ojbutton'], function(ko) {
   return {
      title: 'Welcome to the JET Router demo',
      description: [{
         line: 'This application demonstrate how the Jet Router \
library can simplify building large application.'
      }, {
         line: 'This is a single page application made of 3 independent components: \
Home, Book and Tables. You are currently looking at the Home component.'
      }]
   };
});
/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Header module
 */
define(['knockout', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojtoolbar'],
        function(ko) {
   /**
    * The view model for the header module
    */ 
   function viewModel() {

      // Data for application name
      var appName = {
        'id': 'sample',
        'name': 'JET sample application using ojModule and ojRouter'
      };

      this.appId = appName.id;
      this.appName = appName.name;
   };

   return viewModel;
});
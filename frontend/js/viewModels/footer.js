/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Footer module
 */
define(['knockout',
  'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojtoolbar'
   ], function(ko) {
   /**
    * The view model for the footer module
    */
   function viewModel() {
      var templateData = {
         'footer_links': [
            new navModel('About Oracle', 
                         'aboutOracle',
                         'http://www.oracle.com/us/corporate/index.html#menu-about'),
            new navModel('Contact Us', 
                         'contactUs',
                         'http://www.oracle.com/us/corporate/contact/index.html'),
            new navModel('Legal Notices', 
                         'legalNotices',
                         'http://www.oracle.com/us/legal/index.html'),
            new navModel('Terms Of Use', 
                         'termsOfUse',
                         'http://www.oracle.com/us/legal/terms/index.html'),
            new navModel('Your Privacy Rights', 
                         'yourPrivacyRights',
                         'http://www.oracle.com/us/legal/privacy/index.html')
         ]
      };

      this.footerLinks = templateData.footer_links;
      this.ojVersion = ko.observable('v' + oj.version + ', rev: ' + oj.revision);
   };

   function navModel(name, id, linkTarget) {
      this.name = name;
      this.linkId = id;
      this.linkTarget = linkTarget;
   };

   return viewModel;
});
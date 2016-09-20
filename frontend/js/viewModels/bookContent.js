/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/**
 * Home content module, example of a view model instanciated by ojModule.
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout',
        'ojs/ojrouter', 'ojs/ojnavigationlist'], function(oj, ko, $) {

   var chapters = {
         'preface': 'Darn beamed hurriedly because banal more \
giraffe shuffled and well rid placidly where hence or and and hound lantern cutely \
instead inaudibly but demonstrable imitatively one regarding a where much fruitlessly \
more depending goodness less as dear shark directed this one.',
         'chapter1': 'Affectingly and yikes one that along \
versus growled unwitting vulnerably fish far pouting otter some as this hamster \
hatchet where amicably far deftly curtsied.',
         'chapter2': 'More up mistaken for a kissed therefore \
ahead thus on dear wow undertook flabbily less much far sourly impala resolutely and \
and as overheard dachshund this.',
         'chapter3': 'Reindeer up while the far darn falcon \
concurrent iguana this strived unicorn hedgehog depending more lemming was swam \
unlike prosperously regarding shameful when and extravagant that then cat contagious.'
   };

   /**
    * The view model for the book page.
    */
   var viewModel = {
      router: undefined,

      initialize: function(params) {
         // Retrieve parentRouter from ojModule parameter
         var parentRouter = params.valueAccessor().params['ojRouter']['parentRouter'];

         // Restore current state from parent router, if exist.
         var currentState = parentRouter.currentState();
         if (!currentState.storage) {
            currentState.storage = chapters;
         }

         this.router = parentRouter.createChildRouter('chapter')
            .configure({
               'preface': {  label: 'Preface',   value: currentState.storage['preface'] },
               'chapter1': { label: 'Chapter 1', value: currentState.storage['chapter1'] },
               'chapter2': { label: 'Chapter 2', value: currentState.storage['chapter2'] },
               'chapter3': { label: 'Chapter 3', value: currentState.storage['chapter3'] }
            });

         // Now that the router for this view exist, synchronise it with the URL
         oj.Router.sync();
      },

      selectHandler: function(event, ui) {
         if ('menu' === event.target.id && event.originalEvent) {
            // Invoke go() with the selected item.
            viewModel.router.go(ui.key);
         }
      },

      dispose: function() {
         this.router.dispose();
         this.router = null;
      }
   };

   return viewModel;
});
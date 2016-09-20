requirejs.config({
   // Path mappings for the logical module names
   paths:
   //injector:mainReleasePaths
   {
      'knockout': 'libs/knockout/knockout-3.4.0',
      'jquery': 'libs/jquery/jquery-3.1.0',
      'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.0',
      'promise': 'libs/es6-promise/es6-promise',
      'hammerjs': 'libs/hammer/hammer-2.0.8',
      'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.0.min',
      'ojs': 'libs/oj/v2.1.0/debug',
      'ojL10n': 'libs/oj/v2.1.0/ojL10n',
      'ojtranslations': 'libs/oj/v2.1.0/resources',
      'signals': 'libs/js-signals/signals',
      'text': 'libs/require/text'
   }
   //endinjector
   ,
   // Shim configurations for modules that do not expose AMD
   shim: {
      'jquery': {
         exports: ['jQuery', '$']
      },
      'jqueryui': {
         deps: ['jquery']
      }
   }
});

require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojmodule', 'ojs/ojrouter', 'text'],
function(oj, ko, $)
{
    var router = oj.Router.rootInstance;

    router.configure({
        'home':   { label: 'Home',   value: 'homeContent', isDefault: true },
        'book':   { label: 'Book',   value: 'bookContent' },
        'tables': { label: 'Tables', value: 'tablesContent' }
    });

    var viewModel = {
        router: router
    };

    oj.Router.sync().then(
        function() {
            ko.applyBindings(viewModel);
            $('#globalBody').show();
        },
        function(error) {
            oj.Logger.error('Error when starting router: ' + error.message);
        }
    );
}
);

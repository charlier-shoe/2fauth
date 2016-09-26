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
      }
    }
});

require(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojbutton', 'ojs/ojknockout', 'ojs/ojmenu', 'ojs/ojmodule', 'ojs/ojrouter', 'ojs/ojtoolbar', 'text'],
function(oj, ko, $)
{
    oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();
    var router = oj.Router.rootInstance;
    router.configure({
        'Home':       { label: 'Home',       value: 'home',      isDefault: true },
        'Preference': { label: 'Preference', value: 'preference' }
    });

    function viewModel() {
        var self = this;
        self.appName = '2fauth Sample';

        self.router = router;
        self.selectMenuItem = function(event, ui) {
            self.router.go(ui.item.children("a").text());
        }
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

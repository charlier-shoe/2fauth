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
        'text': 'libs/require/text',
        'mcs': 'libs/mcs/mcs'
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

require(['ojs/ojcore', 'knockout', 'jquery', 'mobilebackend', 'ojs/ojbutton', 'ojs/ojinputtext', 'ojs/ojknockout'],
function(oj, ko, $, mbe)
{
    function loginViewModel() {
        var self = this;
        self.username = ko.observable();
        self.password = ko.observable();

        self.login = function(data, event) {
            mbe.login(self.username(), self.password(),
                function(statusCode, message) {
                    location.href = "./index.html";
                },
                function(statusCode, message) {
                    alert('Invalid Credentials');
                }
            );
        }
    }

    $(document).ready(
        function()
        {
            ko.applyBindings(new loginViewModel(), document.getElementById('loginBody'));
        }
    );
}
);

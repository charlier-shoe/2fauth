define(['mcs'],
function()
{
    var mcs_config = {
        'logLevel': mcs.logLevelInfo,
        'mobileBackends': {
            '2fauth': {
                'default': true,
                'baseUrl': '(your baseUrl)',
                'authorization': {
                    'basicAuth': {
                        'backendId': '(your mobile backend id)',
                        'anonymousToken': '(your mobile backend anonymous token)'
                    },
                    'oAuth': {
                        'clientId': '(your oauth client id)',
                        'clientSecret': '(your oauth client secret)',
                        'tokenEndpoint': '(your oauth token endpoint)'
                    }
                }
            }
        }
    };

    function MobileBackend() {
        var self = this;
        self.mbe;

        function init() {
            mcs.MobileBackendManager.setConfig(mcs_config);
            self.mbe = mcs.MobileBackendManager.getMobileBackend('2fauth');
            self.mbe.setAuthenticationType('basicAuth');
        }

        // login
        self.login = function (username, password, success, failure) {
            self.mbe.Authorization.authenticate(username, password, success, failure);
        };

        // logout
        self.logout = function () {
            self.mbe.Authorization.logout();
        };

        init();
    }

    return new MobileBackend();
}
);

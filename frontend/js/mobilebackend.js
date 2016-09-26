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
    mcs.MobileBackendManager.setConfig(mcs_config);
    var mbe = mcs.MobileBackendManager.getMobileBackend('2fauth');
    mbe.setAuthenticationType('oAuth');

    function MobileBackend() {
        // define members
    }

    MobileBackend.prototype.authenticate = function(username, password, success, error) {
        mbe.Authorization.authenticate(username, password,
                function(statusCode, message) {
                    sessionStorage.setItem('token', mbe.Authorization.getAccessToken());
                    success(statusCode, message);
                },
                function() {
                    error(statusCode, message);
                }
        );
    };

    MobileBackend.prototype.getCurrentUser = function(success, error) {
        // handle exceptional case
        mbe.Authorization.setAccessToken(sessionStorage.getItem('token'));
        mbe.Authorization.getCurrentUser(
                function(statusCode, user) {
                    success(statusCode, user);
                },
                function(statusCode, user) {
                    error(statusCode, user);
                }
        );
    }

    return new MobileBackend();
}
);

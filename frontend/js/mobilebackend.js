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
    var mbe = mcs.MobileBackendManager.getMobileBackend('FIF_Technician_xx');
    mbe.setAuthenticationType('basicAuth');
    return mbe;
}
);

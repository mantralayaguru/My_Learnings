
            (function() {
                // Dynamic values from page request
                
            var script = document.getElementById("celtra-script-1");
            if (!script || script.tagName.toLowerCase() !== 'script')
               throw 'Element with id equal to scriptId does not exist or is not a script.';
        
                var runtimeParams = {"deviceInfo":{"deviceType":"Desktop","primaryHardwareType":"Desktop","mobileDevice":false,"osName":"OSX","osVersion":"10.9.5","platform":"DesktopPlatform","platformVersion":null,"browserName":"Chrome","browserVersion":"56.0.2924.87","browserRenderingEngine":"WebKit","vendor":"Google","model":"Chrome - OS X"},"ipDmaCode":null,"authToken":"33d178a01226032b2c043b0bbfe0fcdd","externalLineItemId":"978023216","tapadPlatformAdvIds":[],"ipCity":"Bangalore","externalSiteId":"21393776","destinationDefinitions":[],"ipCountryCode":"IN","gpsLat":"","customAudiences":{},"clientTimeZoneOffsetInMinutes":-330,"externalPlacementId":"21468896","ipRegionName":"Karnataka","ipAreaCode":null,"tapadCookieIds":[],"accountId":"73fad8b4","derivedAudiences":{},"dynamicContent":{},"externalSiteName":"javaworld.com","ipPostalCode":null,"purpose":"live","externalAdServer":"DFPPremium","authBasis":"1490685282928,a8873531,77498eb3","gpsLng":"","neustarSegment":null,"variantChoices":{},"scriptId":"celtra-script-1","tapadMD5PlatformAdvIds":[],"language":"en","ipLat":12.9833,"tapadSHA1PlatformAdvIds":[],"ipCountryName":"India","pippioId":null,"ipMetroCode":null,"sessionId":"s1490685282x3f356135ff1b94x00783943","clickUrl":"https:\/\/adclick.g.doubleclick.net\/pcs\/click?xai=AKAOjst1sx3ahigw2H1aixtscw6zBMiIwAuB_Mh49k7nbd9-5m-Hyk1tnaxJxlJmHeLhQWkDFTCmQa2UFOaFDURCxK5Hvun8-MFPSBqb_COCP292xOnn_BTkM9MqItD2eJhZzlmG1ca4M1uk0EkohN4S-XGAUo9RJQqvxo_0f_5QhxvmvKLlbWLYHGc7pu-SOmcwLNza-bBE4BAw1Kb_gPwB2nGBqEfnLV5QtdA3vprYnycvLWvfx6-HZjQ1FAew59j6J58dKCPl4X431k0&sig=Cg0ArKJSzOEVLHQ7j5kvEAE&urlfix=1&adurl=","clientTimestamp":"1490669428.115","expandDirection":"down","weather":{"windy":"0","currentCondition":"sunny","apparentTemperature":33},"ipTimeZone":"Asia\/Kolkata","ipRegionCode":"19","tagVersion":"4","ipLng":77.58331,"clickEvent":"advertiser","secure":0,"platformAdvIdTrackingLimited":null,"platformAdvId":null,"customIdentifiers":{},"externalCreativeId":"113585477576","hostPageLoadId":"7750811518085692","placementId":"77498eb3","firstPage":1,"supplierId":null,"monotypeProjectId":"c46ed090-3671-4163-a85b-b06b4038ae38","iosAdvId":null,"iosAdvIdTrackingLimited":null,"androidAdvId":null,"androidAdvIdTrackingLimited":null};
                runtimeParams.redirectJsClientTimestamp = new Date() / 1000;
                
                var macros = function (x) {
                    if (x instanceof Array) {
                        return x.map(macros);
                    } else {
                        var macroTags = [['{celtraPlacementId}', "77498eb3"],
                                         ['{celtraCreativeId}', "a8873531"],
                                         ['{celtraCreativeVariant}', ""],
                                         ['{celtraCreativeVariant:urlenc}', ""],
                                         ['{celtraAccountId}', "73fad8b4"],
                                         ['{celtraCampaignId}', "ee362082"],
                                         ['{celtraSupplierId}', null],
                                         ['{celtraProto}',"http"],
                                         ['%%CACHEBUSTER%%', (Math.random()+'').slice(2)],
                                         ['{celtraRandom}', (Math.random()+'').slice(2)],
                                         ['{celtraPlatformAdvId}', null],
                                         ['{celtraPlatformAdvIdTrackingLimited}', ""],
                                         ['{celtraSessionId}', "s1490685282x3f356135ff1b94x00783943"],
                                         ['{celtraIosAdvId}', null],
                                         ['{celtraIosAdvIdTrackingLimited}', ""],
                                         ['{celtraIosAdvIdTrackingLimitedBoolStr}', ""],
                                         ['{celtraAndroidAdvId}', null],
                                         ['{celtraAndroidAdvIdTrackingLimited}', ""],
                                         ['{celtraAndroidAdvIdTrackingLimitedBoolStr}', ""],
                                         ['%s', "http"],
                                         ['%n', (Math.random()+'').slice(2)],
                                         ['{celtraCreativeId:int}', 2827433265],
                                         ['{celtraPlacementId:int}', 2001309363],
                                         ['{celtraCampaignId:int}', 3996524674],
                                         ['{celtraSupplierId:int}', 0],
                                         ['{celtraExternalCreativeId}', "113585477576"],
                                         ['{celtraExternalCreativeName}', ""],
                                         ['{celtraExternalPlacementId}', "21468896"],
                                         ['{celtraExternalPlacementName}', ""],
                                         ['{celtraExternalSiteId}', "21393776"],
                                         ['{celtraExternalSiteName}', "javaworld.com"],
                                         ['{celtraExternalSupplierId}', ""],
                                         ['{celtraExternalSupplierName}', ""],
                                         ['{celtraExternalSessionId}', ""]

                                        ];
                        return macroTags.reduce(function(str, replacementRule, idx, arr) {
                            return str.replace(new RegExp(replacementRule[0], 'ig'), replacementRule[1] ? replacementRule[1] : '');
                        }, x);
                    }
                };
        

                // Dynamic values that we do not want to pass forward in urls,
                // so we look them up on every page request based on runtimeParams
                var urlOpenedOverrideUrls = {};
                var storeOpenedOverrideUrls = {};
                var urlOpenedUrlAppendage = "";
                var clickThroughDestinationUrl = null;

                // Less dynamic values for payload request
                var payloadBase = "http:\/\/cache.celtra.com\/api\/creatives\/a8873531\/compiled\/web.js";
                var cacheParams = {"v": "5-b7b444f40f", "secure": 0, "inmobi": typeof imraid !== 'undefined' && typeof _im_imai !== 'undefined' ? '1' : '0'};

                var trackers = (function() {
            return [

        // 3rd-party tracker (regular)
        function(event) {
            if (event.name == 'adLoading')
                return {urls: macros([])};

            if (event.name == 'firstInteraction')
                return {urls: macros([])};

            if (event.name == 'creativeLoaded')
                return {urls: macros([])};

            if (event.name == 'viewable00')
                return {urls: macros([])};

            if (event.name == 'viewable501')
                return {urls: macros([])};

            if (event.name == 'videoPlayInitiated')
                return {urls: macros([])};

            if (event.name == 'videoStart')
                return {urls: macros([])};

            if (event.name == 'videoFirstQuartile')
                return {urls: macros([])};

            if (event.name == 'videoMidpoint')
                return {urls: macros([])};

            if (event.name == 'videoThirdQuartile')
                return {urls: macros([])};

            if (event.name == 'videoComplete')
                return {urls: macros([])};

            if (event.name == 'custom')
                return {urls: macros({}[event.label] || [])};

            if (event.name == 'urlOpened')
                return {urls: macros({}[event.label] || [])};

            if (event.name == 'storeOpened')
                return {urls: macros({}[event.label] || [])};


        },

        // 3rd-party tracker (click regular)
        function(event) {
            if (event.name === "firstInteraction")
                return {urls: macros([]), events: [{name: 'click'}] };
        },

                // Ad server tracker
                function(event) {
                    if (event.name === "firstInteraction")
                        return {urls: macros(["https:\/\/adclick.g.doubleclick.net\/pcs\/click?xai=AKAOjst1sx3ahigw2H1aixtscw6zBMiIwAuB_Mh49k7nbd9-5m-Hyk1tnaxJxlJmHeLhQWkDFTCmQa2UFOaFDURCxK5Hvun8-MFPSBqb_COCP292xOnn_BTkM9MqItD2eJhZzlmG1ca4M1uk0EkohN4S-XGAUo9RJQqvxo_0f_5QhxvmvKLlbWLYHGc7pu-SOmcwLNza-bBE4BAw1Kb_gPwB2nGBqEfnLV5QtdA3vprYnycvLWvfx6-HZjQ1FAew59j6J58dKCPl4X431k0&sig=Cg0ArKJSzOEVLHQ7j5kvEAE&urlfix=1&adurl="]), events: [{name: 'clickReportedToSupplier'}] };
                }
]
        })();
                trackers.urlsAndEventsFor = function(event) {
                    return this.reduce(function(acc, tracker) {
                        var ue = tracker(event) || {};
                        return {
                            urls:   acc.urls.concat(ue.urls || []),
                            events: acc.events.concat(ue.events || [])
                        };
                    }, {urls: [], events: []});
                };
                
                var adLoadingEvent = {"name":"adLoading","sessionId":"s1490685282x3f356135ff1b94x00783943"};
                adLoadingEvent.clientTimestamp = new Date/1000;

                trackers.urlsAndEventsFor(adLoadingEvent).urls.forEach(function(url) {
                    // On IE 8+ URLs containing '%' character sometimes throw an error and
                    // stop current JS run loop. One solution  would be to look for that
                    // and replace it with '%25', but we've decided not to modify incoming
                    // URLs, because this issue is really a combination of two external
                    // problems: broken URL on a buggy browser.
                    // https://celtra.atlassian.net/browse/MAB-4476
                    try {
                        (new Image).src = url;
                    } catch(e) {}
                });

                // Build payload url
                var pairs = [];
                for (var k in cacheParams)
                    pairs.push(encodeURIComponent(k) + '=' + encodeURIComponent(cacheParams[k]));
                var payloadUrl = payloadBase + '?' + pairs.join('&');
                
                // Request and run payload
                var payload = document.createElement('script');
                payload.src = payloadUrl;
                payload.onload = function() {
                    runtimeParams.payloadJsClientTimestamp = new Date() / 1000;
                    window.celtraDeviceInfoRuntimeParams = runtimeParams.deviceInfo;
                    window.celtra.payloads[payloadUrl](script, runtimeParams, trackers, urlOpenedOverrideUrls, storeOpenedOverrideUrls, macros, urlOpenedUrlAppendage, clickThroughDestinationUrl);
                };
                script.parentNode.insertBefore(payload, script.nextSibling);
        
            })();
            
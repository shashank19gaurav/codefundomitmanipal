cordova.define("info.quatinus.cordova.plugins.installedApps.installedApps", function(require, exports, module) { /*global cordova, module*/

module.exports = {
    getPackages: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "InstalledApps", "getPackages", []);
    },
    getNames: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "InstalledApps", "getNames", []);
    },
    getNamesAndPackages: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "InstalledApps", "getNamesAndPackages", []);
    }

};

});

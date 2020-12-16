(function () {
    'use strict';

    musicManager.directive ('notifyDirective', directive);
    /** @ngInject */
    function directive() {
        return {
            restrict: 'AE',
            templateUrl: 'directive/notify/notify.template.html',
            scope: {},
        }
    }

} ());
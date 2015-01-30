/**
 * Created by ricardov on 1/22/2015.
 */
(function () {

    'use strict'

    angular.module('app')
        .factory('expensesDataService', function ($http) {

            var service = {
                getExpenses: getExpenses,
                persistExpenses: persistExpenses
            };

            return service;


            function getExpenses() {
                return [

                    new ExpenseItem('Taxi', 'To airport', 89.95),
                    new ExpenseItem('Lunch', 'At airport', 15.40),
                    new ExpenseItem('Coffee', 'Starbucks', 4.93)

                ];
            };

            function reportExpenses() {
                //some work
            }

            function persistExpenses(reportExpenses) {
                //do some work
                var success = true;
                if (success) {
                    reportExpenses();
                }
            };

        });

})();
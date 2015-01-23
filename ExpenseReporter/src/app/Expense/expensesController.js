/**
 * Created by ricardov on 1/22/2015.
 */
(function(){

    'use strict'

    angular.module('app')
        .controller('expensesController', function(expensesDataService){

            var vm = this;

            vm.activate = activate;
            vm.expenseItems = [];

            activate();


            function activate(){

                vm.expenseItems = expensesDataService.getExpenses();

            }


        });

})();
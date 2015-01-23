/**
 * Created by ricardov on 1/22/2015.
 */
describe('expensesController', function(){

    var $controllerConstructor, scope;

    beforeEach(module('app'));

    beforeEach(inject(function($controller, $rootScope){

        $controllerConstructor = $controller;
        scope = $rootScope.$new();

    }));

    it('should have three expense items', function(){
        var ctrl = $controllerConstructor('expensesController', {$scope:scope});
        expect(ctrl.expenseItems.length).toBe(3);


    });

});
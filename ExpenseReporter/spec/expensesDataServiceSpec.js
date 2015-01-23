/**
 * Created by ricardov on 1/22/2015.
 */
describe('expensesDataService', function(){

    beforeEach(module('app'));

    it('should return three expense items', inject(function(expensesDataService){
        expect(expensesDataService.getExpenses().length).toBe(3);
    }));

});
/**
 * Created by ricardov on 1/22/2015.
 */
describe('expensesDataService', function () {

    beforeEach(module('app'));


    it('should return three expense items', inject(function (expensesDataService) {
        expect(expensesDataService.getExpenses().length).toBe(3);
    }));

    it('should return a taxi expense', inject(function (expensesDataService) {
        var expenseItems = expensesDataService.getExpenses();
        var testExpenseItem = new ExpenseItem('Taxi', 'To airport', 89.95);
        expect(expenseItems).toContain(testExpenseItem);
    }));


    describe('reasonable expenses', function () {
        var taxi, dinner;

        beforeEach(function () {
            jasmine.addMatchers(customMatchers);
        });

        beforeEach(function () {
            taxi = new ExpenseItem('Taxi', 'To airport', 89.95);
            dinner = new ExpenseItem('Dinner', 'Dinner with John and Ward', 189.95);
        });

        it('taxi should be a reasonable expense', function () {

            expect(taxi).toBeAReasonableExpense();
        });

        it('dinner should not be a reasonable expense', function () {

            expect(dinner).not.toBeAReasonableExpense();
        });
    });

});
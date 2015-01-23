/**
 * Created by ricardov on 1/21/2015.
 */
describe("Expense objects", function(){

    it("should be of type ExpenseItem", function(){
        var expenseItem = new ExpenseItem();
        var expense = new Expense(expenseItem);
        expect(expense.expenseItem).toBe(expenseItem);
    });

});
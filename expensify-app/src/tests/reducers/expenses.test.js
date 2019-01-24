import expensesReducer from '../../reducers/expenses';

const expenses = [{
    id:'1',
    description: 'gum',
    note:'',
    amount:195,
    createdAt:0
},
{
    id:'2',
    description: 'gum',
    note:'',
    amount:195,
    createdAt:0
}];

test('should set default state',()=>{
    const state = expensesReducer(undefined, '@@INIT');
    expect(state).toEqual([]);
});

test('should add expense',()=>{
    const expense = {
        id:'3',
        description: 'gum',
        note:'',
        amount:195,
        createdAt:0
    }
    const action = {
        type: 'ADD_EXPENSE', 
        expense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should remove expense',()=>{
    const action = {
        type: 'REMOVE_EXPENSE', 
        id:expenses[0].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});

test('should not remove expense if id not exist',()=>{
    const action = {
        type: 'REMOVE_EXPENSE', 
        id:555
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense',()=>{
    var action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount: 100000
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state[0].amount).toBe(100000);
})

test('should not edit expense if id not exist',()=>{
    var action = {
        type: 'EDIT_EXPENSE',
        id: 555,
        updates: {
            amount: 100000
        }
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})
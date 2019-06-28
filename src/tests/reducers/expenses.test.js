import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id,
  });

  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const state = expensesReducer(expenses, {
    type: 'REMOVE_EXPENSE',
    id: -1,
  });

  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: '4',
    description: 'Coffee',
    note: 'SF Coffee',
    amount: 495,
    createdAt: 0,
  };
  const state = expensesReducer(expenses, { type: 'ADD_EXPENSE', expense });
  expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      note: 'edit note',
    },
  });

  expect(state[1].note).toBe('edit note');
});

test('should not edit expense if id not found', () => {
  const state = expensesReducer(expenses, {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      note: 'edit note',
    },
  });

  expect(state).toEqual(expenses);
});

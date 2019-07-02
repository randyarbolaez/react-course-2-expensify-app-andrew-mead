import totalExpenses from '../../selectors/total-expenses';
import expenses from '../fixtures/expenses';

test('should return 0 if no expenses', () => {
  const expenses = [];

  const result = totalExpenses(expenses);
  expect(result).toBe(0);
});

test('should correctly add up a single expense', () => {
  const expenses = [
    {
      id: '1',
      description: 'Gum',
      note: '',
      amount: 195,
      createdAt: 0,
    },
  ];

  const result = totalExpenses(expenses);
  expect(result).toBe(195);
});

test('should correctly add up multiple expenses', () => {
  const result = totalExpenses(expenses);
  expect(result).toBe(114195);
});

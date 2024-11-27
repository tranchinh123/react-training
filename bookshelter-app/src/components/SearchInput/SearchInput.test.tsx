import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from '.';

describe('SearchInput Component', () => {
  const mockOnHandleChange = jest.fn();
  const mockOnHandleKeyDown = jest.fn();

  beforeEach(() => {
    render(
      <SearchInput
        searchTerm="test"
        onHandleChange={mockOnHandleChange}
        onHandleKeyDown={mockOnHandleKeyDown}
      />
    );
  });

  test('matches snapshots', () => {
    const { container } = render(
      <SearchInput
        searchTerm="test"
        onHandleChange={mockOnHandleChange}
        onHandleKeyDown={mockOnHandleKeyDown}
      />
    );
    expect(container).toMatchSnapshot();
  });

  test('renders with the correct searchTerm', () => {
    const input = screen.getByPlaceholderText('Search books');
    expect(input).toHaveValue('test');
  });

  test('calls onHandleChange when input value changes', () => {
    const input = screen.getByPlaceholderText('Search books');
    fireEvent.change(input, { target: { value: 'new search' } });

    expect(mockOnHandleChange).toHaveBeenCalledTimes(1);
    expect(mockOnHandleChange).toHaveBeenCalledWith('new search');
  });

  test('calls onHandleKeyDown when a key is pressed', () => {
    const input = screen.getByPlaceholderText('Search books');
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(mockOnHandleKeyDown).toHaveBeenCalledTimes(1);
  });

  test('renders the Glass icon', () => {
    const { container } = render(
      <SearchInput
        searchTerm="test"
        onHandleChange={mockOnHandleChange}
        onHandleKeyDown={mockOnHandleKeyDown}
      />
    );
    const glassIcon = container.querySelector('svg');
    expect(glassIcon).toBeInTheDocument();
  });
});

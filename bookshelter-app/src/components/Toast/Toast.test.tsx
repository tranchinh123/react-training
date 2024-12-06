import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ToastMessage from './';
import { Toast } from '../../types';

describe('ToastMessage', () => {
  test('should renders successfully toast message', () => {
    const toast: Toast = { message: 'Operation successful!', type: 'success' };

    render(<ToastMessage toast={toast} />);

    expect(screen.getByText('Operation successful!')).toBeInTheDocument();

    const toastElement = screen
      .getByText('Operation successful!')
      .closest('div');
    expect(toastElement).toHaveClass('toastSuccess');
  });

  test('should renders failed toast message', () => {
    const toast: Toast = { message: 'Operation failed!', type: 'error' };

    render(<ToastMessage toast={toast} />);

    expect(screen.getByText('Operation failed!')).toBeInTheDocument();

    const toastElement = screen.getByText('Operation failed!').closest('div');
    expect(toastElement).toHaveClass('toastFailed');
  });

  test('should does not render when toast is null', () => {
    const { container } = render(<ToastMessage toast={null} />);

    expect(container).toBeEmptyDOMElement();
  });
});

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ToastProvider } from './ToastContext';
import { useToast } from '../hooks/useToast';

// Mock Component Toast
jest.mock('../components/Toast', () => {
  return jest.fn(({ toast }) => <div>{`${toast.type}: ${toast.message}`}</div>);
});

describe('ToastProvider', () => {
  test('Show toast when call showToast()', async () => {
    const TestComponent = () => {
      const { showToast } = useToast();

      return (
        <button onClick={() => showToast('Test message', 'success')}>
          Show Toast
        </button>
      );
    };

    render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    );

    fireEvent.click(screen.getByText('Show Toast'));

    expect(
      await screen.findByText('success: Test message')
    ).toBeInTheDocument();

    await waitFor(
      () => {
        expect(
          screen.queryByText('success: Test message')
        ).not.toBeInTheDocument();
      },
      { timeout: 3500 }
    );
  });

  test('does not show toast initially', () => {
    render(
      <ToastProvider>
        <div>Component Test</div>
      </ToastProvider>
    );

    expect(
      screen.queryByText(/success: Test message/i)
    ).not.toBeInTheDocument();
  });
});

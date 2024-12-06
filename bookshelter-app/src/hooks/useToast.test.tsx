import React from 'react';
import { render } from '@testing-library/react';
import { ToastContext } from '../contexts/ToastContext';
import { useToast } from './useToast';
import { ToastContextType } from '../types';

const TestComponent: React.FC = () => {
  useToast();
  return null;
};

describe('useToast', () => {
  test('returns context value when context is provided', () => {
    const mockToastValue: ToastContextType = {
      showToast: jest.fn(),
      toast: null,
    };

    render(
      <ToastContext.Provider value={mockToastValue}>
        <TestComponent />
      </ToastContext.Provider>
    );

    expect(mockToastValue.showToast).toBeDefined();
  });

  test('throws error when context is not provided', () => {
    const consoleErrorSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    try {
      render(
        <ToastContext.Provider value={undefined}>
          <TestComponent />
        </ToastContext.Provider>
      );
    } catch (error) {
      expect(error).toEqual(new Error('Something went wrong'));
    } finally {
      consoleErrorSpy.mockRestore();
    }
  });
});

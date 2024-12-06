import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ErrorBoundary from './ErrorBoundary';

describe('ErrorBoundary', () => {
  const FallbackComponent = () => <div>Error occurred!</div>;

  test('renders children when no error occurs', () => {
    render(
      <ErrorBoundary fallback={<FallbackComponent />}>
        <div>Child Component</div>
      </ErrorBoundary>
    );

    expect(screen.getByText('Child Component')).toBeInTheDocument();
  });

  test('renders fallback component when an error occurs', () => {
    const ProblematicComponent = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary fallback={<FallbackComponent />}>
        <ProblematicComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Error occurred!')).toBeInTheDocument();
  });

  test('logs error to console when an error occurs', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    const ProblematicComponent = () => {
      throw new Error('Test error');
    };

    render(
      <ErrorBoundary fallback={<FallbackComponent />}>
        <ProblematicComponent />
      </ErrorBoundary>
    );

    expect(consoleErrorSpy).toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from '.';

describe('Input Component', () => {
  test('matches snapshots', () => {
    const labelText = 'Username';
    const ref = React.createRef<HTMLInputElement>();

    const { container } = render(<Input label={labelText} ref={ref} />);
    expect(container).toMatchSnapshot();
  });

  test('should renders the label and input', () => {
    const labelText = 'Username';
    const ref = React.createRef<HTMLInputElement>();

    render(<Input label={labelText} ref={ref} />);

    const labelElement = screen.getByLabelText(labelText);
    expect(labelElement).toBeInTheDocument();

    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();

    expect(inputElement).toHaveAttribute('id', 'input');
  });

  test('should forward the ref correctly', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(<Input label="Test Label" ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

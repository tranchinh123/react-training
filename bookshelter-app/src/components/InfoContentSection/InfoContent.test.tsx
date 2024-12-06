import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InfoContentSection from '.';

describe('InfoContentSection component', () => {
  const props = {
    author: 'John Doe',
    publishedYear: 2021,
    publisher: 'Example Publisher',
  };

  test('should renders author, published year, and publisher', () => {
    render(<InfoContentSection {...props} />);

    expect(screen.getByText(/author:/i)).toBeInTheDocument();
    expect(screen.getByText(props.author)).toBeInTheDocument();

    expect(screen.getByText(/published:/i)).toBeInTheDocument();
    expect(screen.getByText(props.publishedYear)).toBeInTheDocument();

    expect(screen.getByText(/publisher:/i)).toBeInTheDocument();
    expect(screen.getByText(props.publisher)).toBeInTheDocument();
  });

  test('matches snapshot', () => {
    const { container } = render(<InfoContentSection {...props} />);
    expect(container).toMatchSnapshot();
  });
});

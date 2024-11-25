import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MainContentSection from '.';

describe('MainContent Component', () => {
  const props = {
    cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
    description:
      'Veniam laborum sint magna in sit pariatur irure laboris anim et. Consequat ex duis sunt et labore consequat nisi',
  };

  test('matches snapshots', () => {
    const { container } = render(<MainContentSection {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('render MainContent component correctly', () => {
    render(<MainContentSection {...props} />);

    const imgElement = screen.getByRole('img', { name: /image of the book/i });
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute('src', props.cover);

    const descriptionElement = screen.getByText(props.description);
    expect(descriptionElement).toBeInTheDocument();
  });
});

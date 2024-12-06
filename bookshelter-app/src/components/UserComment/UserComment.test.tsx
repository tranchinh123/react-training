import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserComments from '.';
import { Comment } from '../../types';

const comments: Comment[] = [
  {
    id: 1,
    author: 'John',
    comment: 'Hello!',
  },
  {
    id: 2,
    author: 'Henry',
    comment: 'Test!',
  },
];
describe('UserComment Component', () => {
  test('matches snapshots', () => {
    const { container } = render(<UserComments comments={comments} />);
    expect(container).toMatchSnapshot();
  });

  test('should renders comments correctly', () => {
    render(<UserComments comments={comments} />);

    comments.forEach((comment) => {
      expect(screen.getByText(comment.author)).toBeInTheDocument();
      expect(screen.getByText(comment.comment)).toBeInTheDocument();
    });
  });

  test('should renders nothing when there are no comments', () => {
    const { container } = render(<UserComments comments={[]} />);
    const commentElements = container.querySelectorAll('.userComment');
    expect(commentElements.length).toBe(0);
  });

  test('should does not re-render when comments do not change', () => {
    const { rerender } = render(<UserComments comments={comments} />);

    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    rerender(<UserComments comments={comments} />);

    expect(consoleSpy).not.toHaveBeenCalled();

    consoleSpy.mockRestore();
  });
});

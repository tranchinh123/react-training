import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UserComments from '.';
import { comments } from '../../__mocks__/fileData';

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
});

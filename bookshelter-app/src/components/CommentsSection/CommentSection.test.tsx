// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import CommentSection from './';
// import '@testing-library/jest-dom';
// import { edit } from '../../services/api';
// import { useToast } from '../../hooks/useToast';

// // Mock the necessary modules
// jest.mock('../../services/api');
// jest.mock('../../hooks/useToast', () => ({
//   useToast: () => ({
//     showToast: jest.fn(),
//   }),
// }));

// const mockShowToast = useToast().showToast;

// describe('CommentSection', () => {
//   const mockBook = {
//     id: '63d7755f50f3cca31911ea67',
//     title: 'Nostrud commodo sint reprehenderit duis ad sit aute.',
//     author: 'Naomi',
//     category: 'contemporary',
//     publishedYear: 2016,
//     publisher: 'Liliana',
//     description: 'Some description...',
//     cover: 'https://i.ibb.co/ZSRxJHH/book-1.png',
//     comments: [
//       {
//         id: 1,
//         author: 'David',
//         comment: 'In dolore ad commodo proident sit commodo ad et in magna id.',
//       },
//     ],
//   };

//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test('renders without crashing', () => {
//     render(<CommentSection book={mockBook} />);
//     expect(screen.getByText(/comments/i)).toBeInTheDocument();
//   });

//   test('toggles comments visibility', () => {
//     render(<CommentSection book={mockBook} />);

//     fireEvent.click(screen.getByText(/comments/i));
//     expect(screen.getByText(/leave a comment/i)).toBeInTheDocument();

//     fireEvent.click(screen.getByText(/comments/i));
//     expect(screen.queryByText(/leave a comment/i)).not.toBeInTheDocument();
//   });

//   test('shows validation errors on invalid input', async () => {
//     render(<CommentSection book={mockBook} />);
//     fireEvent.click(screen.getByText(/comments/i));

//     const submitButton = screen.getByRole('button', { name: /post comment/i });

//     fireEvent.click(submitButton);

//     expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
//     expect(await screen.findByText(/comment is required/i)).toBeInTheDocument();
//   });

//   test('posts a comment successfully', async () => {
//     (edit as jest.Mock).mockResolvedValueOnce({}); // Mock successful API response

//     render(<CommentSection book={mockBook} />);
//     fireEvent.click(screen.getByText(/comments/i)); // Show comments section

//     const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
//     const commentInput = screen.getByLabelText(/comment/i) as HTMLInputElement;
//     const submitButton = screen.getByRole('button', { name: /post comment/i });

//     fireEvent.change(nameInput, { target: { value: 'John Doe' } });
//     fireEvent.change(commentInput, { target: { value: 'Great book!' } });

//     fireEvent.click(submitButton);

//     await waitFor(() => {
//       expect(mockShowToast).toHaveBeenCalledWith(
//         'Post comment success',
//         'success'
//       );
//       expect(nameInput.value).toBe('');
//       expect(commentInput.value).toBe('');
//     });
//   });

//   test('handles API error gracefully', async () => {
//     (edit as jest.Mock).mockRejectedValueOnce(new Error('API error'));

//     render(<CommentSection book={mockBook} />);
//     fireEvent.click(screen.getByText(/comments/i)); // Show comments section

//     const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
//     const commentInput = screen.getByLabelText(/comment/i) as HTMLInputElement;
//     const submitButton = screen.getByRole('button', { name: /post comment/i });

//     fireEvent.change(nameInput, { target: { value: 'John Doe' } });
//     fireEvent.change(commentInput, { target: { value: 'Great book!' } });

//     fireEvent.click(submitButton);

//     await waitFor(() => {
//       expect(mockShowToast).toHaveBeenCalledWith(
//         'An unexpected error occurred. Please try again.',
//         'error'
//       );
//     });
//   });
// });

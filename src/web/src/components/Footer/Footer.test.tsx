
import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders made by text', () => {
  const { getByText } = render(
    <Footer />
  );

  expect(getByText(/Made by rtacr/i)).toBeInTheDocument();
});

import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login'; // Ajuste o caminho conforme necessário

test('Login component renders and submits correctly', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  // Check if the form elements are rendered
  expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();

  // Simulate user input
  fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'test@example.com' } });
  fireEvent.change(screen.getByLabelText(/Senha/i), { target: { value: 'password' } });

  // Simulate form submission
  fireEvent.click(screen.getByRole('button', { name: /Login/i }));

  // Check if the login was successful (adjust according to your logic)
  expect(screen.queryByText(/Email ou senha estão invalidos/i)).not.toBeInTheDocument();
});

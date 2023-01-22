import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import BookingsForm from './BookingsForm';

test('Renders the bookings form heading', () => {
  render(<BookingsForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

test('Render bookings main', () => {
  render(<BookingsForm />);
  const bkdate = screen.getByTestId("test-booking-date");
  const bktime = screen.getByTestId("test-booking-time");
  const bkguests = screen.getByTestId("test-booking-guests");
  const bkoccasion = screen.getByTestId("test-booking-occasion");
  // const bookinglist = screen.getByTestId("test-bookings-list");
  const bookButton = screen.getByTestId("test-booking-reserve");
  expect(bookButton).toBeDisabled();
});

test('Validate booking button', () => {
  render(<BookingsForm />);
  const bkdate = screen.getByTestId("test-booking-date");
  const bktime = screen.getByTestId("test-booking-time");
  const bkguests = screen.getByTestId("test-booking-guests");
  const bkoccasion = screen.getByTestId("test-booking-occasion");
  // const bookinglist = screen.getByTestId("test-bookings-list");
  const bookButton = screen.getByTestId("test-booking-reserve");
  fireEvent.change(bkdate, {target: { value: '2023-01-24'}});
  fireEvent.change(bktime, {target: { value: '17:00'}});
  fireEvent.change(bkguests, {target: { value: '5'}});
  fireEvent.change(bkoccasion, {target: { value: 'Anniversary'}});
  expect(bookButton).toBeEnabled();
});


import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

interface BookingContextValue {
  openBooking: (serviceName?: string) => void;
}

const BookingContext = createContext<BookingContextValue>({ openBooking: () => {} });

export const useBooking = () => useContext(BookingContext);

interface BookingState {
  open: boolean;
  service?: string;
}

export const BookingProvider = ({
  children,
  renderModal,
}: {
  children: ReactNode;
  renderModal: (state: BookingState, close: () => void) => ReactNode;
}) => {
  const [state, setState] = useState<BookingState>({ open: false });

  const openBooking = useCallback((serviceName?: string) => {
    setState({ open: true, service: serviceName });
  }, []);

  const close = useCallback(() => setState((s) => ({ ...s, open: false })), []);

  return (
    <BookingContext.Provider value={{ openBooking }}>
      {children}
      {renderModal(state, close)}
    </BookingContext.Provider>
  );
};

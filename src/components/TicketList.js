import TicketItem from "./TicketItem";

export default function TicketList({ tickets, dispatch }) {
  return (
    <div className="ticket-list">
      {tickets.map((ticket) => (
        <TicketItem dispatch={dispatch} ticket={ticket} key={ticket.id} />
      ))}
    </div>
  );
}

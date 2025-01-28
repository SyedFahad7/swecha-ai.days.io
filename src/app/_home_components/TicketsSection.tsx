import { tickets } from '@/data/tickets';

export default function TicketsSection() {
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
          Tickets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="relative border border-yellow-900/30 rounded-lg p-4 flex flex-col"
            >
              <h3 className="text-center text-lg p-1 rounded-full mx-auto text-purple-300/80">
                {ticket.title}
              </h3>
              <ul className="list-disc pl-5">
                {ticket.benefits.map((benefit, i) => (
                  <li key={i} className="text-gray-300">
                    {benefit}
                  </li>
                ))}
                {ticket.masterClassUrl && (
                  <li className="text-gray-300 list-none">
                    <a href={ticket.masterClassUrl} className="text-purple-300 underline">
                      {ticket.masterClassUrl}
                    </a>
                  </li>
                )}
              </ul>
              <p className="text-gray-200 text-lg">Available Till: {ticket.availableUntil}</p>
              <p className="text-purple-300/80 text-lg pt-4">
                Price: ₹{ticket.price.toLocaleString()}
              </p>
              <button className="text-right border border-yellow-500 border-2 p-1 rounded-none w-24 ml-auto mt-auto hover:bg-yellow-500/20">
                Buy Ticket
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

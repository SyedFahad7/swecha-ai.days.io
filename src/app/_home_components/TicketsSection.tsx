import { tickets } from '@/data/tickets';

export default function TicketsSection() {
  return (
    <section className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
          Tickets
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="group h-[500px] relative overflow-hidden rounded-lg border border-yellow-900/30 bg-gradient-to-br from-purple-900/10 via-transparent to-yellow-900/10 hover:from-purple-900/20 hover:to-yellow-900/20 transition-colors duration-500"
            >
              <div className="flex flex-col h-full p-8">
                {/* Title with gradient effect */}
                <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                  {ticket.title}
                </h3>

                {/* Benefits list with improved styling */}
                <div className="flex-grow mb-6">
                  <ul className="space-y-3">
                    {ticket.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-400 leading-relaxed flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-yellow-500/30 mt-2 mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                    {ticket.masterClassUrl && (
                      <li className="text-gray-400 leading-relaxed mt-2">
                        <a
                          href={ticket.masterClassUrl}
                          className="text-purple-300 hover:text-purple-200 transition-colors duration-300 flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                          </svg>
                          View Masterclass
                        </a>
                      </li>
                    )}
                  </ul>
                </div>

                {/* Details section with border */}
                <div className="grid grid-cols-2 gap-4 py-4 border-t border-yellow-900/30">
                  <div>
                    <div className="text-yellow-300/60 text-sm mb-1">Available Till</div>
                    <div className="text-yellow-100">{ticket.availableUntil}</div>
                  </div>
                  <div>
                    <div className="text-yellow-300/60 text-sm mb-1">Price</div>
                    <div className="text-yellow-100">₹{ticket.price.toLocaleString()}</div>
                  </div>
                </div>

                {/* Buy button */}
                <button className="w-full mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-900/20 to-purple-900/20 border border-yellow-500/30 text-yellow-200 hover:from-yellow-900/30 hover:to-purple-900/30 transition-all duration-300 font-medium">
                  Buy Ticket
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

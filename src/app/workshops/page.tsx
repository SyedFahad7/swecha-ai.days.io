import Link from 'next/link';

const workshops = [
  {
    id: 'ai-personality',
    title: 'Crafting AI Personality & Temperament',
    description: 'Explore the art of designing AI systems with distinct personalities. Learn to create AI agents with emotional intelligence and appropriate response patterns.',
    duration: '3 hours',
    instructor: 'Dr. Maya Patel',
    expertise: 'AI Psychology Expert',
    level: 'Advanced',
    prerequisites: ['Basic ML knowledge', 'Python programming'],
    topics: [
      'Emotional response mapping',
      'Personality matrix design',
      'Ethical considerations',
      'Behavioral testing'
    ],
    category: 'AI Design'
  },
  {
    id: 'ethical-bounds',
    title: 'Setting Ethical Boundaries in AI',
    description: 'Hands-on workshop on implementing ethical guidelines and moral frameworks in AI systems. Create AIs that respect human values and societal norms.',
    duration: '4 hours',
    instructor: 'Prof. Sarah Chen',
    expertise: 'AI Ethics Researcher',
    level: 'Intermediate',
    prerequisites: ['Understanding of AI basics', 'Interest in ethics'],
    topics: [
      'Moral framework implementation',
      'Boundary setting techniques',
      'Value alignment',
      'Safety protocols'
    ],
    category: 'AI Ethics'
  },
  {
    id: 'emotional-intelligence',
    title: 'Building Emotional Intelligence in AI',
    description: 'Learn to develop AI systems that can understand and respond to human emotions appropriately, creating more meaningful human-AI interactions.',
    duration: '3 hours',
    instructor: 'Dr. Alex Kumar',
    expertise: 'Human-AI Interaction Specialist',
    level: 'Advanced',
    prerequisites: ['NLP experience', 'Sentiment analysis knowledge'],
    topics: [
      'Emotion recognition',
      'Contextual response generation',
      'Empathy modeling',
      'Interaction design'
    ],
    category: 'AI Design'
  },
  {
    id: 'cultural-awareness',
    title: 'Cultural Awareness in AI Systems',
    description: 'Design AI systems that understand and respect cultural nuances, creating inclusive and culturally sensitive artificial intelligence.',
    duration: '4 hours',
    instructor: 'Dr. Priya Reddy',
    expertise: 'Cultural AI Researcher',
    level: 'Intermediate',
    prerequisites: ['Basic AI knowledge', 'Interest in cultural studies'],
    topics: [
      'Cultural context modeling',
      'Bias detection and mitigation',
      'Inclusive design principles',
      'Cross-cultural validation'
    ],
    category: 'AI Ethics'
  }
];

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Animated background grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] grid-rows-[repeat(auto-fit,minmax(50px,1fr))] opacity-10">
          {Array.from({ length: 200 }).map((_, i) => (
            <div
              key={i}
              className="border border-[#2A2A2A] relative before:absolute before:inset-0 before:bg-gradient-to-r before:from-yellow-900/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity"
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative max-w-7xl mx-auto mb-24">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-yellow-500/50 to-purple-500/50" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 border border-yellow-500/50" />
          
          <h1 className="text-center text-5xl md:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-yellow-200 to-cyan-400">
            AI Temperament Workshops
          </h1>
          <p className="text-center text-xl text-yellow-100/60 max-w-3xl mx-auto">
            Hands-on sessions to shape the future of AI personality and behavior
          </p>
        </div>

        {/* Workshops Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {workshops.map((workshop) => (
            <div
              key={workshop.id}
              className="group relative"
            >
              {/* Workshop Card */}
              <div className="relative overflow-hidden rounded-lg border border-yellow-900/30">
                {/* Background with animated gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-yellow-900/10 group-hover:from-purple-900/20 group-hover:to-yellow-900/20 transition-colors duration-500" />
                
                {/* Decorative elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

                {/* Content */}
                <div className="relative p-8 space-y-6">
                  {/* Category Badge */}
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs uppercase tracking-wider border border-yellow-500/30 text-yellow-300 mb-4">
                    {workshop.category}
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400 group-hover:from-yellow-300 group-hover:to-yellow-500 transition-all duration-300">
                      {workshop.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {workshop.description}
                    </p>
                  </div>

                  {/* Instructor Info */}
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="text-purple-300">{workshop.instructor}</div>
                    <div className="w-1 h-1 rounded-full bg-yellow-500/30" />
                    <div className="text-yellow-100/60">{workshop.expertise}</div>
                  </div>

                  {/* Workshop Details */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-t border-yellow-900/30">
                    <div>
                      <div className="text-yellow-300/60 text-sm mb-1">Duration</div>
                      <div className="text-yellow-100">{workshop.duration}</div>
                    </div>
                    <div>
                      <div className="text-yellow-300/60 text-sm mb-1">Level</div>
                      <div className="text-yellow-100">{workshop.level}</div>
                    </div>
                  </div>

                  {/* Topics */}
                  <div>
                    <div className="text-yellow-300/60 text-sm mb-3">What you'll learn</div>
                    <div className="flex flex-wrap gap-2">
                      {workshop.topics.map((topic, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 rounded-full text-xs bg-yellow-900/20 text-yellow-300/80 border border-yellow-900/30"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Prerequisites */}
                  <div>
                    <div className="text-yellow-300/60 text-sm mb-3">Prerequisites</div>
                    <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                      {workshop.prerequisites.map((prereq, index) => (
                        <li key={index}>{prereq}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Register Button */}
                  <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-yellow-600 rounded-lg text-white font-semibold hover:from-purple-500 hover:to-yellow-500 transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-yellow-500/25">
                    Register for Workshop
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

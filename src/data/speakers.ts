type Speaker = {
  id: string;
  name: string;
  role: string;
  image: string;
  topic: string;
  bio: string;
  social: {
    twitter: string;
    linkedin: string;
  };
  videoId?: string;
};

export const speakers: Speaker[] = [
  {
    id: 'soumith-chintala',
    name: 'Soumith Chintala',
    role: 'AI Fixer, Meta',
    image: '/speakers/Soumith_Chintala.jpg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/soumith/',
    },
  },
  {
    id: 'srinivasa-raju-chintalapati',
    name: 'Srinivasa Raju Chintalapati',
    role: 'Chairman, iLabs Capital',
    image: '/speakers/SrinivasaRaju_Chintalapati.jpg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/srinivasacraju-156887135/',
    },
  },
  {
    id: 'renata-avila',
    name: 'Renata Avila',
    role: 'CEO, Open Knowledge Foundation',
    image: '/speakers/Renata_Avila.jpeg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/renatavila/',
    },
  },
  {
    id: 'kiran-chandra',
    name: 'Kiran Chandra',
    role: 'Centre Head, VISWAM.AI. Founder, Swecha',
    image: '/speakers/Kiran-Chandra.jpeg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/kiranchandray/',
    },
  },
  {
    id: 'rahul-kulkarni',
    name: 'Rahul Kulkarni',
    role: 'Chief Technologist, Samagra ',
    image: '/speakers/Rahul_Kulkarni.jpg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/rahul10100/',
    },
  },
  {
    id: 'venkatesh-hariharan',
    name: 'Venkatesh Hariharan',
    role: 'India Representative, Open Invention Network ',
    image: '/speakers/Venkatesh_Hariharan.jpg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/venky7/',
    },
  },
  {
    id: 'nikhil-pahwa',
    name: 'Nikhil Pahwa',
    role: 'Founder, MediaNama',
    image: '/speakers/Nikhil_Pahwa.jpg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/nikhilpahwa/',
    },
  },
  {
    id: 'chaitanya-chokkareddy',
    name: 'Chaitanya Chokkareddy',
    role: 'CTO, Ozontel',
    image: '/speakers/Chaitanya_Chokkareddy.jpg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/cchaitanya/',
    },
  },
  {
    id: 'ramesh-loganathan',
    name: 'Ramesh Loganathan',
    role: 'Professor Co-innovation/Outreach, IIITH',
    image: '/speakers/Ramesh_Loganathan.jpg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/rameshl/',
    },
  },
  {
    id: 'bhavesh-mishra',
    name: 'Bhavesh Mishra',
    role: 'Deputy Secretary, IT & Electronics Department, Government of Telangana',
    image: '/speakers/Bhavesh_Mishra.jpg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/bhavesh-mishra-81124160/',
    },
  },
  {
    id: 'apar-gupta',
    name: 'Apar Gupta',
    role: 'Co-Founder, Internet Freedom Foundation ',
    image: '/speakers/Apar_Gupta.jpg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/apar1984/',
    },
  },
  {
    id: 'cv-jawahar',
    name: 'CV Jawahar',
    role: 'Professor and Dean (R&D), IIITH ',
    image: '/speakers/CV_Jawahar.jpg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/cv-jawahar-849376318/',
    },
  },
  {
    id: 'vijay-rayapati',
    name: 'Vijay Rayapati',
    role: 'CEO, Atomicwork',
    image: '/speakers/Vijay_Rayapati.jpg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/amnigos/',
    },
  },
  {
    id: 'kesava-reddy',
    name: 'Kesava Reddy',
    role: 'Chief Revenue Officer, E2E Networks',
    image: '/speakers/Kesava-E2E.png',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/kesavareddy/',
    },
  },
  {
    id: 'tarun-dua',
    name: 'Tarun Dua',
    role: 'Founder, E2E Networks',
    image: '/speakers/Tarun-Dua.jpeg',
    topic: '',
    bio: '',
    social: {
      twitter: '',
      linkedin: 'https://www.linkedin.com/in/tarundua/',
    },
  },
];

export const speakerById = speakers.reduce(
  (map, speaker) => {
    map[speaker.id] = speaker;
    return map;
  },
  {} as Record<string, (typeof speakers)[number]>
);

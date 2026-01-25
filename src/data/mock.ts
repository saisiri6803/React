import type { Match} from "../types";


export const initialMatches: Match[] = [
  {
    id: '1', name: { first: 'Priya', last: 'Sharma' },
    picture: { large: 'https://randomuser.me/api/portraits/women/2.jpg', thumbnail: '' },
    email: 'priya@example.com', location: { city: 'Bengaluru' }, dob: { age: 26 }, gender: 'female',
    lastMessage: 'Hey! Loved your profile 😊', online: true,
  },
  {
    id: '2', name: { first: 'Arjun', last: 'Patel' },
    picture: { large: 'https://randomuser.me/api/portraits/men/3.jpg', thumbnail: '' },
    email: 'arjun@example.com', location: { city: 'Mumbai' }, dob: { age: 29 }, gender: 'male',
    lastMessage: 'What do you do for fun?', online: false,
  },
];

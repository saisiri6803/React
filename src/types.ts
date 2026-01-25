export interface User {
  id: string;
  name: { first: string; last: string };
  picture: { large: string; thumbnail: string };
  email: string;
  location: { city: string };
  dob: { age: number };
  gender: string;
}

export interface Match extends User {
  lastMessage?: string;
  online: boolean;
}

export interface YourProfile {
  name: string;
  age: number;
  bio: string;
  picture: string;
}

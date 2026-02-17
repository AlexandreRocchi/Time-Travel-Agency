export interface Destination {
  id: string;
  title: string;
  era: string;
  year: string;
  description: string;
  imageUrl: string;
  price: string;
  features: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface BookingDetails {
  destinationId: string;
  date: string;
  travelers: number;
}

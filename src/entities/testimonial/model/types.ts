export type Testimonial = {
  id: string;
  text: string;
  client: {
    avatar: string;
    name: string;
    role: string;
  };
  rating: number;
};

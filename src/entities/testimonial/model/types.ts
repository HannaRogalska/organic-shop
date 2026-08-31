export type Testimonial = {
  id: string;
  text: string;
  client: {
    avatar: string;
    name: string;
    roleKey: 'customerRole';
  };
  rating: number;
};

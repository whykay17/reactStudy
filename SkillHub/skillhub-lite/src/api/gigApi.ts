import type { Gig } from "../lib/types";

const gigs: Gig[] = [
  { id: 'g1', title: 'React Component Build', price: 150, freelancerId: 'p1', description: 'I will build a custom React component using TypeScript and Tailwind.' },
  { id: 'g2', title: 'Tailwind Design System', price: 300, freelancerId: 'p2', description: 'Full implementation of a utility-first design system.' },
  { id: 'g3', title: 'SEO Audit for Freelancers', price: 50, freelancerId: 'p1', description: 'Quick audit and recommendations.' },
  { id: 'g4', title: 'Backend API with Node.js', price: 400, freelancerId: 'p3', description: 'RESTful API development with Express and MongoDB.' },
  { id: 'g5', title: 'UI/UX Design for Mobile App', price: 250, freelancerId: 'p2', description: 'Designing user-friendly mobile app interfaces.' },
  { id: 'g6', title: 'Performance Optimization', price: 200, freelancerId: 'p3', description: 'Improving web app performance and load times.' }
];

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchAllGigs = async (): Promise<Gig[]> => {
  await sleep(500); // Simulate network delay
  console.log('API: Fetching all gigs');
  return gigs;
};

export const fetchGigById = async (id: string): Promise<Gig | undefined> => {
  await sleep(300); // Simulate network delay
  return gigs.find(gig => gig.id === id);
};

export const createGig = async (newGig: Omit<Gig, 'id'>, freelancerId: string): Promise<Gig> => {
    await sleep(200);
    const gigWithId: Gig = { 
        ...newGig, 
        id: `g${gigs.length + 1}`,
        freelancerId 
    };
    gigs.push(gigWithId);
    return gigWithId;
};
import type { Gig } from "../lib/types";

const gigs: Gig[] = [
  { id: 'g1', title: 'React Component Build', price: 150, freelancerId: 'p1', description: 'I will build a custom React component using TypeScript and Tailwind.' },
  { id: 'g2', title: 'Tailwind Design System', price: 300, freelancerId: 'p2', description: 'Full implementation of a utility-first design system.' },
  { id: 'g3', title: 'SEO Audit for Freelancers', price: 50, freelancerId: 'p1', description: 'Quick audit and recommendations.' },
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
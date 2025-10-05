import { useQuery } from "@tanstack/react-query";
import * as api from "../api/gigApi";
import type { Gig } from "../lib/types";

export const gigsQueryKey = ["gigs"];

export function useGigs() {
    return useQuery<Gig[]>({
    queryKey: gigsQueryKey,
    queryFn: api.fetchAllGigs
    });
}

export function useGigDetail(id: string) {
    return useQuery<Gig | undefined>({
        queryKey: ['gig', id],
        queryFn: () => api.fetchGigById(id),
        enabled: !!id
    });
}
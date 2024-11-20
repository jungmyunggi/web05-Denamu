import { adminRss } from "@/api/queries/adminRss";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useFetchRss = () => {
  const queryClient = useQueryClient();

  const { data, isLoading, error } = useQuery({
    queryKey: ["adminRss"],
    queryFn: adminRss,
    staleTime: 1000 * 60 * 5,
    retry: 1,
    refetchInterval: 1000 * 5,
  });
  const refetchRss = () => {
    queryClient.invalidateQueries({ queryKey: ["adminRss"] });
  };
  return { data, isLoading, error, refetchRss };
};

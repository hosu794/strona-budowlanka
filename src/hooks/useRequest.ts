import { useQuery } from "@apollo/react-hooks";
import { DocumentNode } from "graphql";
import { IPosts } from "../types/Post";

export function usePostQuery(gqlQuery: DocumentNode) {
    const { loading, error, data } = useQuery<IPosts>(gqlQuery);
    return { loading, error, data };
  }
  
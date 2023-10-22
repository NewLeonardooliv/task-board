import { api } from "@/utils/services/client";

const fetchBoard = async (url: string, method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'GET') => {
  const { data } = await api.request({
    url: process.env.NEXT_PUBLIC_API_BOARD + url,
    method
  });

  return data;
};

export default fetchBoard;

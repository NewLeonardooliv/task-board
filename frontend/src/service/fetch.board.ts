import { api } from "@/utils/services/client";

const fetchBoard = async (url: string, method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' = 'GET', data?: any) => {
  const { data: response } = await api.request({
    url: process.env.NEXT_PUBLIC_API_BOARD + url,
    data,
    method
  });

  return response;
};

export default fetchBoard;

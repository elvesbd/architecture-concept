type ApiResponse<R> = {
  status: number;
  data: R;
};

export default function useApi() {
  const token: string | null = null;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  async function httpPost<T, R>(
    path: string,
    body: T
  ): Promise<ApiResponse<R>> {
    const url = `${apiUrl}/${path}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log("data", data);

    return {
      status: response.status,
      data,
    };
  }

  return { httpPost };
}

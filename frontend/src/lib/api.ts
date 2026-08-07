async function request(path: string, options: RequestInit = {}) {
  let response: Response;

  try {
    response = await fetch(path, {
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });
  } catch {
    throw new Error("Cannot reach server. Please try again.");
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      data.message ||
      (data.errors && Object.values(data.errors).flat()[0]) ||
      "Request failed";
    throw new Error(String(message));
  }

  return data;
}

export function fetchServices() {
  return request("/api/services");
}

export function submitInquiry(payload: {
  name: string;
  email: string;
  phone?: string;
  type?: "GENERAL" | "HIRE";
  service?: string;
  budget?: string;
  timeline?: string;
  message: string;
}) {
  return request("/api/inquiries", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

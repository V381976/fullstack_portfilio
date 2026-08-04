async function request(path, options = {}) {
  let response;

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
    throw new Error(message);
  }

  return data;
}

export function fetchServices() {
  return request("/api/services");
}

export function submitInquiry(payload) {
  return request("/api/inquiries", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export const request = async (endpoint, { body, ...parameters }) => {
  const endpointFinal = `http://localhost:5000${endpoint}`;

  const defaultParameters = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(endpointFinal, {
    ...defaultParameters,
    ...parameters,
    ...(body && { body: JSON.stringify(body) }),
  })
    .then((response) => response.json())
    .then((json) => json);

  return response;
};

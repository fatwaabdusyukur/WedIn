const API_URL = "http://localhost:5000/graphql";

export async function queryData(type, column, param = {}) {
  try {
    const paramString =
      Object.keys(param).length === 0
        ? ""
        : `(${Object.entries(param)
            .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
            .join(", ")})`;

    const query = `query { ${type}${paramString} { ${column} } }`;
    const response = await fetch(
      `${API_URL}?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error(`Failed to query data: ${response.status}`);
    }

    const jsonData = await response.json();
    return jsonData.data;
  } catch (error) {
    throw new Error(`Error when querying data: ${error.message}`);
  }
}

export async function mutationData(data) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Failed to mutate data: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw new Error(`Error when mutate data: ${error}`);
  }
}

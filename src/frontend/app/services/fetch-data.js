const API_URL = "http://localhost:5000/graphql";

export async function queryData(type, column) {
  try {
    const query = `{ ${type} { ${column} } }`;
    const response = await fetch(`${API_URL}?query=${encodeURI(query)}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    if (!response.ok) {
      throw new Error(`Failed to query data: ${response.status}`);
    }
    return response.json();
  } catch (error) {
    throw new Error(`Error when query data: ${error}`);
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
    return response.json();
  } catch (error) {
    throw new Error(`Error when mutate data: ${error}`);
  }
}

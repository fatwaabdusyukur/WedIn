const API_URL = "http://localhost:5000";

export async function queryData(type, column, param = {}) {
  try {
    const paramString =
      Object.keys(param).length === 0
        ? ""
        : `(${Object.entries(param)
            .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
            .join(", ")})`;

    const query = `query { ${type}${paramString} { ${column} } }`;
    const response = await fetch(`${API_URL}/graphql?query=${encodeURIComponent(query)}`, { credentials: 'include' });

    if (!response.ok) {
      throw { status: response.status, statusText: 'Failed to retrieve the data' };
    }

    const jsonData = await response.json();
    return jsonData.data;
  } catch (error) {
    throw { status: error.status || 500, statusText: error.statusText || 'Something wrong with the server!' };
  }
} 

export async function fetchPost(path = '', data, token) {
  try {
    if (!token) throw { status: 401, statusText: 'Unauthorized' };
    if (path === '') throw { status: 404, statusText: 'Not found' };

    const header = { "Content-Type": "application/json", "x-csrf-token": token, }
    const response = await fetch(`${API_URL}/${path}`, { method: 'POST', headers: header, body: JSON.stringify(data), credentials: 'include' });

    if (!response.ok) throw { status: response.status, statusText: response.statusText };
    
    return response.json();
  } catch (error) {
    throw { status: error.status || 500, statusText: error.statusText || 'Something wrong with the server!' }
  }
}

export async function fetchGet(path = '') {
  try {
    if (path === '') throw { status: 404, statusText: 'Not found' };

    const response = await fetch(`${API_URL}/${path}`, { credentials: 'include' });

    if (!response.ok) {
      throw { status: response.status, statusText: response.statusText };
    }

    return await response.json();
  } catch (error) {
    throw { status: error.status || 500, statusText: error.statusText || 'Something wrong with the server!' }
  }
}

export async function mutationData(type, param = {}, column, token) {
  try {
    if (!token) {
      throw { status: 401, statusText: 'Unauthorized'};
    }

    const query = `mutation { ${type}(${Object.entries(param)
      .map(([key, value]) => `${key}: ${JSON.stringify(value)}`)
      .join(", ")}) { ${column} } }`;

    const variables = { ...param };

    const response = await fetch(`${API_URL}/graphql`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": token,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw { status: response.status, statusText: 'Failed to retrieve the data' };
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    throw { status: error.status || 500, statusText: error.statusText || 'Something wrong with the server!' }
  }
}


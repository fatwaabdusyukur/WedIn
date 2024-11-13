export function setStorage(key, value) {
    if (!key) {
      throw new Error('Key is not defined or null!');
    }
    if (!value) {
      throw new Error("Value doesn't exist!");
    }
  
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      throw new Error(`Failed to set storage: ${error.message}`);
    }
}
  
export function setStorageWithExpire(key, value, expire) {
    if (!key) {
      throw new Error('Key is not defined or null!');
    }
    if (!value) {
      throw new Error("Value doesn't exist!");
    }
    if (!expire || typeof expire !== 'number') {
      throw new Error('Expire time is not a valid number!');
    }
  
    const expireTime = Date.now() + expire * 60 * 60 * 1000;
    try {
      localStorage.setItem(key, JSON.stringify({ value, expireTime }));
    } catch (error) {
      throw new Error(`Failed to set storage: ${error.message}`);
    }
}
  
export function getStorage(key) {
    if (!key) {
      throw new Error('Key is not defined or null!');
    }
  
    try {
      const storedValue = localStorage.getItem(key);
      if (!storedValue) {
        return null;
      }
  
      const parsedValue = JSON.parse(storedValue);
      if (parsedValue.expireTime && parsedValue.expireTime < Date.now()) {
        removeStorage(key);
        return null;
      }
  
      return parsedValue.value;
    } catch (error) {
      throw new Error(`Failed to get storage: ${error.message}`);
    }
}
  
export function removeStorage(key) {
    if (!key) {
      throw new Error('Key is not defined or null!');
    }
  
    try {
      localStorage.removeItem(key);
    } catch (error) {
      throw new Error(`Failed to remove storage: ${error.message}`);
    }
}
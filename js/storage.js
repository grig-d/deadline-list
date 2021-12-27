const storage = {
  get(key) {
    if (localStorage.getItem(key)) return localStorage.getItem(key);
  },
  set(key, value) {
    
    localStorage.setItem(key, JSON.stringify(value));
  },
  remove(key) {
    localStorage.removeItem(key);
  },
};

export default storage;

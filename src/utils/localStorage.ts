const storage = {
  set: (
    key: string,
    value: string | number | object | boolean | null | undefined | unknown
  ) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get: <T>(key: string, defaultValue?: T): T => {
    const value = localStorage.getItem(key)
    return (value ? JSON.parse(value) : defaultValue) as T
  },
  remove: (key: string) => {
    localStorage.removeItem(key)
  },
}

export default storage

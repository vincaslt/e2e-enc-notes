const storage = {
  set: (
    key: string,
    value: string | number | object | boolean | null | undefined
  ) => {
    localStorage.setItem(key, JSON.stringify(value))
  },
  get: <T>(key: string, defaultValue?: T): T => {
    return (localStorage.getItem(key) ?? defaultValue) as T
  },
  remove: (key: string) => {
    localStorage.removeItem(key)
  },
}

export default storage

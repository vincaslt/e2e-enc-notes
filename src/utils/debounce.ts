/* eslint-disable @typescript-eslint/no-explicit-any */

function debounce<F extends any[]>(fn: (...args: F) => void, delay: number) {
  let timeoutID: number | undefined
  return (...args: F) => {
    clearTimeout(timeoutID)
    timeoutID = window.setTimeout(() => fn(...args), delay)
  }
}

export default debounce

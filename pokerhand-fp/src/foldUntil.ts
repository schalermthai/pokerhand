export const foldUntil = until => f => (vs, defaultValue?) => {
  const v = vs.slice(0).reduce((acc, n, i, arr) => {
    const v = f(n)
    if (until(v)) {
      arr.splice(i)
      return v
    }

    return undefined
  }, [])

  return v ? v : defaultValue
}

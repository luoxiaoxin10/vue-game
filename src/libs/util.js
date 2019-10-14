// 永远轮训一秒
export const forever_time_out = (c, t) => {
  let time = setInterval(() => {
    c()
  }, t)
  return () => {
    clearInterval(time)
  }
}
  
// ローダー表示する為、APIレスポンスを意図的に遅らせる
export const delay = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}

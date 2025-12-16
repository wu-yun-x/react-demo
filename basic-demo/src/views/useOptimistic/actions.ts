// 在 TypeScript 中，异步函数通常通过 async 关键字声明，并且返回类型必须是 Promise<T>，其中 T 是最终解析的值的类型。
// async 关键字只影响函数实现，不影响类型声明，因此在接口或类型定义中不需要写 async，而是直接声明返回 Promise。
export async function deliverMessage(message: string): Promise<string> {
  await new Promise((res) => setTimeout(res, 1000));
  return message;
}

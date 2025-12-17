export async function updateQuantity(newQuantity: number): Promise<number> {
  return new Promise<number>((resolve: (value: number) => void) => {
    // Simulate a slow network request.
    setTimeout(() => {
      resolve(newQuantity);
    }, 2000);
  });
}

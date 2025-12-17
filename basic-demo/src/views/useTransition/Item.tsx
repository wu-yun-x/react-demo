/*
 * @Author: st004362
 * @Date: 2025-12-17 10:19:21
 * @LastEditTime: 2025-12-17 11:31:59
 * @Description: Item
 */
import { startTransition, JSX, ChangeEvent } from "react";

type ItemProps = {
  action: (newQuantity: number) => Promise<void>;
};

export default function Item({ action }: ItemProps): JSX.Element {
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    // To expose an action prop, await the callback in startTransition.
    const value = Number(event.target.value);
    if (isNaN(value)) return; // 类型守卫

    startTransition(async () => {
      await action(value);
    });
  }
  return (
    <div className="item">
      <span>Eras Tour Tickets</span>
      <label htmlFor="name">Quantity: </label>
      <input type="number" onChange={handleChange} defaultValue={1} min={1} />
    </div>
  );
}

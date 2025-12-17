/*
 * @Author: st004362
 * @Date: 2025-12-17 10:18:08
 * @LastEditTime: 2025-12-17 11:29:30
 * @Description:
 */
import { useState, useTransition, JSX } from "react";
import { updateQuantity } from "./api";
import Item from "./Item";
import Total from "./Total";

export default function UpdateQuantity(): JSX.Element {
  const [quantity, setQuantity] = useState<number>(1);
  const [isPending, startTransition] = useTransition();

  // 不需要给 useTransition 或 startTransition 添加额外类型约束，React 已经在类型定义中做了充分的声明。
  const updateQuantityAction = async (newQuantity: number): Promise<void> => {
    startTransition(async () => {
      const savedQuantity = await updateQuantity(newQuantity);
      startTransition(() => {
        setQuantity(savedQuantity);
      });
    });
  };

  return (
    <div>
      <h1>Checkout</h1>
      <Item action={updateQuantityAction} />
      <hr />
      <Total quantity={quantity} isPending={isPending} />
    </div>
  );
}

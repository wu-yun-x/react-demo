/*
 * @Author: st004362
 * @Date: 2025-06-05 17:27:18
 * @LastEditors: ST/St004362
 * @LastEditTime: 2025-06-06 17:04:39
 * @Description:
 */
import { useCallback } from "react";
import ShippingForm from "./ShippingForm.tsx";

interface ProductPageProps {
  productId: number;
  referrer: string;
  theme: "light" | "dark";
}

export default function ProductPage({
  productId,
  referrer,
  theme,
}: ProductPageProps) {
  const handleSubmit = useCallback(
    // 修正参数类型为实际传递的表单数据类型
    (orderDetails: {
      street: string;
      city: string;
      zipCode: string;
      count: number;
    }) => {
      console.log("test-6-内容测试");
      post("/product/" + productId + "/buy", {
        referrer,
        orderDetails,
      });
    },
    [productId, referrer]
  );

  return (
    <div className={theme}>
      <ShippingForm onSubmit={handleSubmit} />
    </div>
  );
}

interface dataType {
  referrer: string;
  orderDetails: {
    street: string;
    city: string;
    zipCode: string;
    count: number;
  };
}

function post(url: string, data: dataType) {
  // 想象这发送了一个请求
  console.log("POST /" + url);
  console.log(data);
}

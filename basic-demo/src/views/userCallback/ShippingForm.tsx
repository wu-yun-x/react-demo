import { memo, useState } from "react";
interface ShippingFormProps {
  onSubmit: (orderDetails: {
    street: string;
    city: string;
    zipCode: string;
    count: number;
  }) => void;
}

const ShippingForm = memo(function ShippingForm({
  onSubmit,
}: ShippingFormProps) {
  const [count, setCount] = useState(1);

  console.log("[ARTIFICIALLY SLOW] Rendering <ShippingForm />");
  const startTime = performance.now();
  while (performance.now() - startTime < 500) {
    // 500 毫秒内不执行任何操作来模拟极慢的代码
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const orderDetails = {
      street: formData.get("street") as string,
      city: formData.get("city") as string,
      zipCode: formData.get("zipCode") as string,
      count,
    };
    onSubmit(orderDetails);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <b>
          Note: <code>ShippingForm</code> is artificially slowed down!
        </b>
      </p>
      <label>
        Number of items:
        <button type="button" onClick={() => setCount(count - 1)}>
          –
        </button>
        {count}
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
      </label>
      <label>
        Street:
        <input name="street" />
      </label>
      <label>
        City:
        <input name="city" />
      </label>
      <label>
        Postal code:
        <input name="zipCode" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
});

export default ShippingForm;

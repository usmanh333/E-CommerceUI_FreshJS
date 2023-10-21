import { useSignal } from "@preact/signals";
import Products from "../components/Products.tsx";


export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <Products/>
    </div>
  );
}

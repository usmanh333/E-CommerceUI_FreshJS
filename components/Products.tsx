import { data } from "../utils/productData.ts";
import ListProducts from "./ListProducts.tsx";

export default function Products() {
  return (
    <>
      <div class={"flex flex-wrap justify-evenly mt-8"}>
        {data.map((product, index) => {
          return (
            <>
              <ListProducts product={product} index={index} />
            </>
          );
        })}
      </div>
    </>
  );
}

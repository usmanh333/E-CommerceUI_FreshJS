
export default function listProducts({product, index}:any) {
  return (
    <div>
      <div class="card w-96 h-96 bg-base-100 shadow-2xl mb-8" key={index}>
        <figure>
          <img
            src={product.image}
            alt="Shoes"
            class='object-cover h-48 w-96'
          />
        </figure>
        <div class="card-body">
          <div className="flex justify-between items-center mb-2">
            <h2 class="card-title">
              {product.name}
              <div class="badge badge-secondary">NEW</div>
            </h2>
            <div class="card-actions justify-end">
              <div class="badge badge-outline">Fashion</div>
              <div class="badge badge-outline">Products</div>
            </div>
          </div>
          <p>{product.description}</p>
          <div class="card-actions justify-start mt-2">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

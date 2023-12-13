import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styels from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";
import Image from "next/image";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className={styels.container}>
      <div className={styels.infoContainer}>
        <div className={styels.imgContainer}>
          <Image src={product.img || "/images/noavatar.png"} fill alt="" />
        </div>
        {product.title}
      </div>
      <div className={styels.formContainer}>
        <form action={updateProduct} className={styels.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />

          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />

          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />

          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />

          <label>Size</label>
          <input type="text" name="size" placeholder={product.size} />

          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computer">Computer</option>
          </select>

          <label>Description</label>
          <textarea name="desc" placeholder={product.desc} rows="10"></textarea>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;

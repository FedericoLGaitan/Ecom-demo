import { getProductsByIdDB } from "@/helpers/products.fetch"
import ProductDetail from "@/views/ProductDetail/ProductDetail"

export default async function page({ params }: any) {

   const {id} = params

   const product = await getProductsByIdDB(id)

  return (
    <div>
        <ProductDetail {...product}/>
    </div>
  )
}

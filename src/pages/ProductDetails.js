import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
  const params = useParams()

  return (
    <>
      <h2>Product Details</h2>
      <p>{params.id}</p>
    </>
  )
}

export default ProductDetailsPage

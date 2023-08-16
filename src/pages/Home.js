import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()

  function navigationHandler() {
    navigate('/products')
  }

  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to='/products'>the products page</Link>
      </p>
      <button onClick={navigationHandler}>Navigate</button>
    </>
  )
}

export default HomePage

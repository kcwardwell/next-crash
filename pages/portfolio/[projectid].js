import { useRouter } from 'next/router'

const PortfolioProjectPage = () => {
    const router = useRouter()

    console.log('query',router.query);
  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  )
}

export default PortfolioProjectPage

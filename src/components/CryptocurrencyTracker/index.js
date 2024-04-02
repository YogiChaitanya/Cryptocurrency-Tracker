// Write your code here
import Loader from 'react-loader-spinner'
import './index.css'
import CryptocurrenciesList from '../CryptocurrenciesList'

const CryptocurrencyTracker = () => (
  <div className="bg-container">
    <div data-testid="loader">
      <Loader type="Rings" color="#ffffff" height={80} width={80} />
    </div>
  </div>
)

export default CryptocurrencyTracker

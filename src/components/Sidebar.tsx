import { getCriptoData } from "@/services/crypto_api"
import type { CryptoData } from "@/types/cryptoTypes"
import type React from "react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const TopCryptoSidebar: React.FC = () => {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCryptoData()
  }, [])

  const fetchCryptoData = async () => {
    try {
      setLoading(true)
      const data = await getCriptoData()
      setCryptoData(data)
    } catch (error) {
      console.error("Error fetching cryptocurrency data:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="px-2">
      <h2 className="text-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Top 10 Cryptocurrencies
      </h2>

      <ul className="space-y-2">
        {loading ? (
          <li className="text-gray-400 text-sm text-center">Loading...</li>
        ) : (
          cryptoData.map((crypto) => (
            <li key={crypto.id}>
              <Link
                to={`/${crypto.id}`}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-blue-800 transition-colors duration-200"
              >
                <img
                  src={crypto.image}
                  alt={crypto.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium text-sm text-gray-900 dark:text-white">
                      {crypto.name}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase">
                      {crypto.symbol}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    ${crypto.current_price.toLocaleString()}
                  </p>
                </div>
              </Link>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default TopCryptoSidebar

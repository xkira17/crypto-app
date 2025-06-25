import { getCriptoData } from "@/services/crypto_api"
import type { CryptoData } from "@/types/cryptoTypes"
import type React from "react"
import { useEffect, useState } from "react"

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
    <div>
      <h2 className="text-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        Top 10 Cryptocurrencies
      </h2>
      <ul>
        {loading ? (
          <li>Loading...</li>
        ) : (
          cryptoData.map((crypto) => (
            <li key={crypto.id}>
              <a
                href="#"
                className="flex items-center p-5 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <img
                  src={crypto.image}
                  alt={crypto.name}
                  className="w-6 h-6 rounded-full"
                />
                <span className="ms-3">{crypto.name}</span>
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  )
}

export default TopCryptoSidebar

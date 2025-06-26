import { getCriptoById } from "@/services/crypto_api"
import { type CryptoDataById } from "@/types/cryptoTypes"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const MarketHeader = () => {
  const { id } = useParams<{ id: string }>()
  // Изменим тип состояния на правильный
  const [coin, setCoin] = useState<CryptoDataById | null>(null)

  useEffect(() => {
    const fetchCoinData = async () => {
      if (!id) {
        return setCoin(null)
      }

      const data = await getCriptoById(id || "bitcoin")
      setCoin(data)
    }
    fetchCoinData()
  }, [id])

  return (
    <>
      {coin ? (
        <div className="flex items-center gap-4 p-4 border-b w-full">
          <div>
            <img
              // Теперь image всегда объект с large свойством
              src={coin.image.large}
              alt={coin.name}
              className="w-20 h-20 rounded-full"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold">{coin.name}</h1>
            <p className="text-gray-500">{coin.symbol.toUpperCase()} / USD</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center p-8">
          <p className="text-gray-500">Loading...</p>
        </div>
      )}
    </>
  )
}

export default MarketHeader

import { getCriptoById } from "@/services/crypto_api"
import { type CryptoData } from "@/types/cryptoTypes"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const MarketHeader = () => {
  const { id } = useParams<{ id: string }>()
  const [coin, setCoin] = useState<CryptoData | null>(null)

  useEffect(() => {
    const fetchCoinData = async () => {
      if (!id) {
        // Если ID не указан, можно задать значение по умолчанию
        // Например, "bitcoin" или любое другое значение, которое вы хотите использовать
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
              src={
                typeof coin.image === "string" ? coin.image : coin.image.large
              }
              alt={coin.name}
              className="w-20 h-20 rounded-full"
            />
          </div>

          <div>
            <h1>{coin.name}</h1>
            <p className="text-gray-500">{coin.symbol.toUpperCase()} / USD</p>
          </div>
          <div></div>
        </div>
      ) : (
        <div>
          <p>Loading...</p>
        </div>
      )}
    </>
  )
}

export default MarketHeader

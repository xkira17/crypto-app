import CryptoPriceChart from "./CryptoPriceChart"
import MarketHeader from "./MarkertHeader"
import React from "react"

// Добавим интерфейс для пропсов
interface MarketProps {
  cryptoId?: string
}

const Market: React.FC<MarketProps> = ({ cryptoId }) => {
  return (
    <div>
      <h2 className="text-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">
        {cryptoId ? `Информация о ${cryptoId}` : "Market Overview"}
      </h2>

      <MarketHeader />

      <CryptoPriceChart cryptoId={cryptoId || "bitcoin"} />

      {/* Дополнительные компоненты или информация о рынке можно добавить здесь */}
    </div>
  )
}

export default Market

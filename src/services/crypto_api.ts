import type {
  CryptoData,
  CryptoDataById,
  MarketChart,
} from "@/types/cryptoTypes"
import axios from "axios"

export const getCriptoData = async (): Promise<CryptoData[]> => {
  const response = await axios.get(
    // Извлечение 10 лучших криптовалют по рыночной капитализации из API CoinGecko
    // Конечная точка API возвращает данные в долларах США, упорядоченные по рыночной капитализации в порядке убывания
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`
  )
  return response.data
}

export const getCriptoById = async (id: string): Promise<CryptoDataById> => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id || "bitcoin"}`
  )
  return response.data
}

export const getChartData = async (
  id: string,
  timeframe: string
): Promise<MarketChart> => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${timeframe}&interval=daily`
  )
  return response.data
}

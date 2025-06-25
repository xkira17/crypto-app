export interface CryptoData {
  id: string
  symbol: string
  name: string
  image: string
  current_price: number
  market_cap: number
  market_cap_rank: number
  total_volume: number
  high_24h: number
  low_24h: number
  price_change_24h: number
  price_change_percentage_24h: number
  market_cap_change_24h: number
  market_cap_change_percentage_24h: number
  circulating_supply: number
  total_supply: number | null // Для некоторых монет общий запас может быть нулевым.
  ath: number // Рекордно высокий показатель
  ath_change_percentage: number // Процентное изменение от ATH
  atl: number // Рекордно низкий показатель
  atl_change_percentage: number // Процентное изменение от ATL
  last_updated: string // Время последнего обновления
}

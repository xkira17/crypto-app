export interface CryptoData {
  id: string
  symbol: string
  name: string
  image: string // URL изображения монеты
  // Цены и рыночные данные
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

export interface CryptoDataById {
  id: string
  symbol: string
  name: string
  image: {
    small: string // URL маленького изображения монеты
    large: string // URL изображения монеты
    thumb: string // Миниатюра изображения
  }

  description: string // Описание монеты
  genesis_date: string | null // Дата создания монеты, может быть нулевой
  links: {
    homepage: string[] // Список ссылок на домашнюю страницу
    blockchain_site: string[] // Ссылки на блокчейн-сайт
    official_forum_url: string[] // Официальные форумы
    chat_url: string[] // Ссылки на чаты
    announcement_url: string[] // Ссылки на объявления
  }
}

export interface MarketChart {
  prices: [number, number][] // Массив цен, где первый элемент - время в миллисекундах, второй - цена
  market_caps: [number, number][] // Массив рыночных капитализаций
  total_volumes: [number, number][] // Массив общих объемов торгов
}

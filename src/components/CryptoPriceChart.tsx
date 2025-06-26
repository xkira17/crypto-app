import { getChartData } from "@/services/crypto_api"
import { type MarketChart } from "@/types/cryptoTypes"
import type React from "react"
import { use, useEffect, useState } from "react"
import { ChartContainer, type ChartConfig } from "./ui/chart"
import {
  Bar,
  BarChart,
  Tooltip,
  YAxis,
  XAxis,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts"
import { Card, CardContent } from "./ui/card"
import { useParams } from "react-router-dom"

const chartConfig = {
  price: {
    label: "Price",
    color: "#2563eb",
  },
} satisfies ChartConfig

interface CryptoPriceChartProps {
  cryptoId: string
}

const CryptoPriceChart: React.FC<CryptoPriceChartProps> = ({ cryptoId }) => {
  const { id } = useParams<{ id: string }>()
  const [chartData, setChartData] = useState<{ date: string; price: number }[]>(
    []
  )
  const [loading, setLoading] = useState(true)
  const [timeframe, setTimeframe] = useState("30d")

  // const chartConfig = {
  //   price: {
  //     label: chartData?.prices || [],
  //     color: "#3b82f6", // Blue color for price line
  //   },
  // } satisfies ChartConfig

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        setLoading(true)
        const data: MarketChart = await getChartData(cryptoId, timeframe)
        const formattedData = data.prices.map(
          ([timestamp, price]: [number, number]) => ({
            date: new Date(timestamp).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
            price: parseFloat(price.toFixed(2)),
          })
        )

        setChartData(formattedData)
      } catch (error) {
        alert("Ошибка при загрузке данных графика: " + error)
      } finally {
        setLoading(false)
      }
    }
    fetchChartData()
  }, [cryptoId, timeframe])

  console.log("Chart data:", chartData)

  return (
    <Card className="p-4 w-full h-100vh">
      <div className="flex justify-between items-center mb-4">
        <div>
          {id && (
            <h1 className="text-2xl font-bold mb-4">
              {id.charAt(0).toUpperCase() + id.slice(1)} Price Chart
            </h1>
          )}
        </div>
        <div>
          <div className="flex justify-end mb-4 items-center gap-4">
            <h1>Iterval</h1>
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="border rounded p-2 bg-background"
            >
              <option value="1d">1 Day</option>
              <option value="7d">7 Days</option>
              <option value="30d">30 Days</option>
              <option value="90d">90 Days</option>
            </select>
          </div>
        </div>
      </div>
      <CardContent>
        <h2 className="text-lg font-semibold mb-4">
          Bitcoin Price {timeframe}
        </h2>
        {loading ? (
          // <Skeleton className="w-full h-[200px]" />
          <p>Loading...</p>
        ) : (
          <ChartContainer className="w-full" config={chartConfig}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  )
}

export default CryptoPriceChart

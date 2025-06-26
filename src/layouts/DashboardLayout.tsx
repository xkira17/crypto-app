import Header from "@/components/Header"
import TopCryptoSidebar from "@/components/Sidebar"
import Market from "@/components/Markets"
import { useParams } from "react-router-dom"
import React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"

const DashboardLayout: React.FC = () => {
  const { id } = useParams() // Получаем ID криптовалюты из URL

  return (
    <div className="w-3/4 mx-auto">
      <div className="sticky top-0  z-50">
        <Header />
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {" "}
        <ScrollArea className="w-1/4 border-r">
          <aside className="p-4">
            <TopCryptoSidebar />
          </aside>
        </ScrollArea>
        <div className="flex-1">
          <main className="p-4 w-full">
            {id ? (
              // Если есть ID - показываем информацию о криптовалюте
              <Market cryptoId={id} />
            ) : (
              // Если нет ID - показываем дашборд
              <>
                <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
                <p>Выберите криптовалюту из списка слева</p>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout

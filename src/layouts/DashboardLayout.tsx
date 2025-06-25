import Header from "@/components/Header"
import TopCryptoSidebar from "@/components/Sidebar"
import React from "react"

const DashboardLayout: React.FC = () => {
  return (
    <div className="w-2/3 mx-auto">
      <div className="sticky top-0  shadow z-50">
        <Header />
      </div>

      <div>
        <aside className="w-1/4 p-4  h-full">
          <TopCryptoSidebar />
        </aside>
      </div>
    </div>
  )
}

export default DashboardLayout

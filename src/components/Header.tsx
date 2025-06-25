import { Input } from "./ui/input"

const Header: React.FC = () => {
  return (
    <header className=" p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Crypto Dashboard</h1>
      <Input
        type="search"
        name="search"
        id="search"
        placeholder="Search... "
        className="w-1/3"
      />
    </header>
  )
}
export default Header

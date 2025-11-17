import { ShoppingCart, Menu } from 'lucide-react'

export default function Header({ cartCount, onOpenCart }) {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Menu">
            <Menu className="h-5 w-5 text-gray-600" />
          </button>
          <a href="#" className="text-xl font-semibold tracking-tight">Atelier Prints</a>
        </div>
        <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-600">
          <a href="#prints" className="hover:text-gray-900 transition">Shop</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </nav>
        <button onClick={onOpenCart} className="relative p-2 rounded-md hover:bg-gray-100" aria-label="Open cart">
          <ShoppingCart className="h-5 w-5 text-gray-700" />
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 text-[10px] bg-gray-900 text-white rounded-full px-1.5 py-0.5">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}

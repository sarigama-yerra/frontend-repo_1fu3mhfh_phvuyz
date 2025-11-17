import { useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import PrintCard from './components/PrintCard'
import CartDrawer from './components/CartDrawer'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function App() {
  const [prints, setPrints] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [cartOpen, setCartOpen] = useState(false)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const fetchPrints = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${API_BASE}/api/prints?featured=true`)
        const data = await res.json()
        setPrints(data)
      } catch (e) {
        setError('Failed to load prints')
      } finally {
        setLoading(false)
      }
    }
    fetchPrints()
  }, [])

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id)
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p))
      }
      return [...prev, { ...item, quantity: 1 }]
    })
    setCartOpen(true)
  }

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id))
  }

  const checkout = async () => {
    try {
      const payload = {
        customer_name: 'Guest',
        customer_email: 'guest@example.com',
        shipping_address: 'TBD',
        items: cart.map((c) => ({ print_id: c.id, quantity: c.quantity })),
      }
      const res = await fetch(`${API_BASE}/api/orders`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail || 'Checkout failed')
      alert(`Order placed! Total $${data.total}`)
      setCart([])
      setCartOpen(false)
    } catch (e) {
      alert(e.message)
    }
  }

  const featured = prints

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header cartCount={cart.length} onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />

        <section id="prints" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Featured prints</h2>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900">View all</a>
          </div>

          {loading && <p className="text-gray-500">Loading…</p>}
          {error && <p className="text-red-500">{error}</p>}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((item) => (
              <PrintCard key={item.id} item={item} onAdd={addToCart} />)
            )}
          </div>
        </section>

        <section id="about" className="border-t bg-gray-50/60">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-semibold">Archival quality, responsibly made</h3>
              <p className="mt-3 text-gray-600">Each print is produced on thick, museum-grade paper using pigment-based inks for rich, lasting color. We work with local studios and ship plastic-free.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Artists first</h3>
              <p className="mt-3 text-gray-600">We collaborate with emerging artists worldwide and split profits fairly on every sale. Your purchase directly supports new work.</p>
            </div>
          </div>
        </section>

        <footer id="contact" className="border-t">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Atelier Prints. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gray-900">Instagram</a>
              <a href="#" className="hover:text-gray-900">Twitter</a>
              <a href="#" className="hover:text-gray-900">Email</a>
            </div>
          </div>
        </footer>
      </main>

      <CartDrawer
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onRemove={removeFromCart}
        onCheckout={checkout}
      />
    </div>
  )
}

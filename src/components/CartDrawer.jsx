import { X } from 'lucide-react'

export default function CartDrawer({ open, items, onClose, onRemove, onCheckout }) {
  const total = items.reduce((sum, it) => sum + it.price * it.quantity, 0)

  return (
    <div className={`fixed inset-0 z-50 ${open ? '' : 'pointer-events-none'}`}>
      <div className={`absolute inset-0 bg-black/30 transition-opacity ${open ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="font-semibold">Your cart</h3>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-gray-100" aria-label="Close cart">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-8rem)]">
          {items.length === 0 && (
            <p className="text-sm text-gray-500">Your cart is empty.</p>
          )}
          {items.map((it) => (
            <div key={it.id} className="flex gap-3">
              <img src={it.image_url} className="h-16 w-16 rounded object-cover" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm font-medium">{it.title}</p>
                    <p className="text-xs text-gray-500">{it.size}</p>
                    <p className="text-xs text-gray-500">Qty {it.quantity}</p>
                  </div>
                  <p className="text-sm font-semibold">${(it.price * it.quantity).toFixed(2)}</p>
                </div>
                <button onClick={() => onRemove(it.id)} className="mt-1 text-xs text-gray-500 hover:text-gray-800">Remove</button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center justify-between text-sm mb-3">
            <span className="text-gray-600">Subtotal</span>
            <span className="font-semibold">${total.toFixed(2)}</span>
          </div>
          <button onClick={onCheckout} disabled={items.length === 0} className="w-full inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-4 py-3 text-sm font-medium hover:bg-black transition disabled:opacity-50">
            Checkout
          </button>
        </div>
      </div>
    </div>
  )
}

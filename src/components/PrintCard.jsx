export default function PrintCard({ item, onAdd }) {
  return (
    <div className="group bg-white rounded-xl ring-1 ring-gray-200 hover:ring-gray-300 transition overflow-hidden">
      <div className="aspect-[4/5] overflow-hidden bg-gray-100">
        <img src={item.image_url} alt={item.title} className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform" />
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between">
          <h3 className="font-medium text-gray-900">{item.title}</h3>
          <span className="text-gray-900 font-semibold">${item.price.toFixed(2)}</span>
        </div>
        <p className="mt-1 text-sm text-gray-500">{item.artist} • {item.size}</p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => onAdd(item)} className="flex-1 inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-3 py-2 text-sm font-medium hover:bg-black transition">
            Add to cart
          </button>
          <a href={item.image_url} target="_blank" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 ring-1 ring-inset ring-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50 transition">
            View
          </a>
        </div>
      </div>
    </div>
  )
}

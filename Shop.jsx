import { useState } from 'react'
import { PRODUCTS } from '../lib/mockData'
import { Share2 } from 'lucide-react'

const tagColors = {
  'BESTSELLER': 'bg-mink text-white',
  'NEW': 'bg-mink text-white',
  'FEATURED': 'bg-mink text-white',
  'POPULAR': 'bg-mink text-white',
  'BEST VALUE': 'bg-mink text-white',
}

const catGradients = [
  'linear-gradient(135deg, #f9c4d4, #f5b0b0)',
  'linear-gradient(135deg, #f5c4a0, #f0b080)',
  'linear-gradient(135deg, #f9b4d4, #f09080)',
  'linear-gradient(135deg, #f5d4a0, #e8b870)',
  'linear-gradient(135deg, #f0b4c4, #e89080)',
]

export default function Shop() {
  const [selected, setSelected] = useState(null)

  const handleShare = (product) => {
    const text = `Check out ${product.name} by Blossom Bloom! R${product.price} retail. DM me to order 🌸`
    if (navigator.share) {
      navigator.share({ title: product.name, text })
    } else {
      navigator.clipboard.writeText(text)
      alert('Product details copied!')
    }
  }

  return (
    <div className="page-container fade-up">
      <p className="label mb-1">CATALOG</p>
      <h1 className="text-4xl font-display font-bold text-mink mb-2">The Bloom Line</h1>

      {/* Hero banner */}
      <div className="rounded-3xl overflow-hidden mb-6 relative h-44" style={{background: 'linear-gradient(135deg, #f5c4b0 0%, #f0d4c0 100%)'}}>
        <div className="absolute inset-0 flex items-end p-5">
          <div>
            <p className="label text-mink/60 mb-1">FEATURED RITUAL</p>
            <p className="text-2xl font-display font-bold text-mink">The 30-day transformation</p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="space-y-4">
        {PRODUCTS.map((product, i) => (
          <div key={product.id}>
            <div className="rounded-3xl overflow-hidden shadow-sm border border-pink-50">
              {/* Product image area */}
              <div className="relative h-36 flex items-center justify-center" style={{background: catGradients[i % catGradients.length]}}>
                {product.tag && (
                  <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${tagColors[product.tag] || 'bg-mink text-white'}`}>
                    {product.tag}
                  </span>
                )}
                <span className="text-5xl">{product.emoji}</span>
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-white text-sm">✦</span>
                </div>
              </div>

              {/* Product info */}
              <div className="bg-white p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xl font-display font-bold text-mink">{product.name}</p>
                    <p className="text-xs text-gray-400">{product.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="label">RETAIL</p>
                    <p className="text-xl font-bold text-mink">R{product.price}</p>
                  </div>
                </div>

                <div className="space-y-1 mb-3">
                  {product.benefits.slice(0, 3).map((b, j) => (
                    <div key={j} className="flex items-center gap-2">
                      <span className="text-bloom-400 text-xs">🌸</span>
                      <span className="text-xs text-gray-500">{b}</span>
                    </div>
                  ))}
                </div>

                <button onClick={() => setSelected(selected === product.id ? null : product.id)} className="text-xs text-bloom-500 font-semibold mb-3">
                  {selected === product.id ? 'Less info ↑' : 'More info ↓'}
                </button>

                {selected === product.id && (
                  <p className="text-sm text-gray-500 mb-3 leading-relaxed">{product.description}</p>
                )}

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Distributor: <span className="font-bold text-mink">R{product.distPrice}</span></p>
                  <button onClick={() => handleShare(product)} className="flex items-center gap-2 text-sm font-semibold text-white px-4 py-2 rounded-full active:scale-95 transition-all" style={{background: 'linear-gradient(135deg, #e8637a, #d4486a)'}}>
                    <Share2 size={14} /> Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

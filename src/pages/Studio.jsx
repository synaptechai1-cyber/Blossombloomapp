import { useState } from 'react'
import { studioTemplates } from '../lib/mockData'
import { Sparkles, Copy, RefreshCw, Check, Wand2 } from 'lucide-react'

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function generateContent(platform, tone, product) {
  const prod = product || pick(studioTemplates.products)
  const hook = pick(studioTemplates.hooks)
  const rawCaption = pick(studioTemplates.captions)
  const days = Math.floor(Math.random() * 21) + 7
  const feelings = ['amazing', 'hydrated', 'radiant', 'so smooth', 'glowing']
  const routines = ['skincare routine', 'morning ritual', 'evening routine']
  const benefits = ['visibly reduces fine lines', 'deeply hydrates', 'evens skin tone', 'gives you a natural glow', 'minimises pores']
  const skinTypes = ['dry', 'combination', 'oily', 'sensitive']

  const caption = rawCaption
    .replace('{product}', prod)
    .replace('{days}', days)
    .replace('{feeling}', pick(feelings))
    .replace('{routine}', pick(routines))
    .replace('{benefit}', pick(benefits))
    .replace('{benefit2}', pick(benefits))
    .replace('{skin_type}', pick(skinTypes))

  const hashtags = pick(studioTemplates.hashtags)

  const toneEmojis = { professional: '✨', casual: '😍', motivational: '🔥', educational: '💡' }
  const emoji = toneEmojis[tone] || '🌸'

  return {
    hook,
    caption: `${emoji} ${caption}`,
    hashtags,
    product: prod,
    platform,
    tone,
  }
}

export default function Studio() {
  const [platform, setPlatform] = useState('instagram')
  const [tone, setTone] = useState('casual')
  const [product, setProduct] = useState('')
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(null)

  const handleGenerate = () => {
    setLoading(true)
    setContent(null)
    setTimeout(() => {
      setContent(generateContent(platform, tone, product))
      setLoading(false)
    }, 1200)
  }

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  const fullPost = content
    ? `${content.hook}\n\n${content.caption}\n\n${content.hashtags.join(' ')}`
    : ''

  return (
    <div className="space-y-8 max-w-2xl">
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-bloom-600 flex items-center justify-center shadow-lg flex-shrink-0">
          <Sparkles className="text-white" size={22} />
        </div>
        <div>
          <h1 className="text-4xl font-display font-bold text-bloom-800">Bloom Content Studio</h1>
          <p className="text-pink-400 text-sm mt-1">Generate social media content for your Bloom business in seconds</p>
        </div>
      </div>

      {/* Generator form */}
      <div className="bloom-card space-y-5">
        <h2 className="text-lg font-display font-semibold text-bloom-800">Customise Your Content</h2>

        {/* Platform */}
        <div>
          <label className="block text-xs font-medium text-bloom-700 mb-2 uppercase tracking-wide">Platform</label>
          <div className="flex gap-2 flex-wrap">
            {['instagram', 'facebook', 'tiktok', 'whatsapp'].map(p => (
              <button
                key={p}
                onClick={() => setPlatform(p)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${platform === p ? 'bg-bloom-600 text-white shadow-md' : 'bg-pink-50 text-bloom-600 border border-pink-200'}`}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Tone */}
        <div>
          <label className="block text-xs font-medium text-bloom-700 mb-2 uppercase tracking-wide">Tone</label>
          <div className="flex gap-2 flex-wrap">
            {['casual', 'professional', 'motivational', 'educational'].map(t => (
              <button
                key={t}
                onClick={() => setTone(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all capitalize ${tone === t ? 'bg-bloom-600 text-white shadow-md' : 'bg-pink-50 text-bloom-600 border border-pink-200'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Product */}
        <div>
          <label className="block text-xs font-medium text-bloom-700 mb-2 uppercase tracking-wide">Product (optional)</label>
          <select className="bloom-input" value={product} onChange={e => setProduct(e.target.value)}>
            <option value="">Random product</option>
            {studioTemplates.products.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bloom-btn w-full py-3 flex items-center justify-center gap-2 text-base disabled:opacity-70"
        >
          {loading ? (
            <>
              <RefreshCw size={18} className="animate-spin" />
              Generating your content...
            </>
          ) : (
            <>
              <Wand2 size={18} />
              Generate Content
            </>
          )}
        </button>
      </div>

      {/* Generated content */}
      {content && (
        <div className="space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-display font-semibold text-bloom-800">Your Content</h2>
            <button
              onClick={handleGenerate}
              className="flex items-center gap-1 text-xs text-bloom-500 hover:text-bloom-700 transition-colors"
            >
              <RefreshCw size={14} />
              Regenerate
            </button>
          </div>

          {/* Hook */}
          <div className="bloom-card relative group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-bloom-500 uppercase tracking-wide">Hook / Opening Line</span>
              <button onClick={() => handleCopy(content.hook, 'hook')} className="text-pink-300 hover:text-bloom-500 transition-colors">
                {copied === 'hook' ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
              </button>
            </div>
            <p className="text-bloom-800 font-medium">{content.hook}</p>
          </div>

          {/* Caption */}
          <div className="bloom-card relative">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-bloom-500 uppercase tracking-wide">Caption</span>
              <button onClick={() => handleCopy(content.caption, 'caption')} className="text-pink-300 hover:text-bloom-500 transition-colors">
                {copied === 'caption' ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
              </button>
            </div>
            <p className="text-bloom-700 text-sm leading-relaxed">{content.caption}</p>
          </div>

          {/* Hashtags */}
          <div className="bloom-card">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-bloom-500 uppercase tracking-wide">Hashtags</span>
              <button onClick={() => handleCopy(content.hashtags.join(' '), 'hashtags')} className="text-pink-300 hover:text-bloom-500 transition-colors">
                {copied === 'hashtags' ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {content.hashtags.map((tag, i) => (
                <span key={i} className="bg-bloom-50 text-bloom-600 text-xs px-3 py-1 rounded-full border border-bloom-100 font-medium">{tag}</span>
              ))}
            </div>
          </div>

          {/* Copy all */}
          <button
            onClick={() => handleCopy(fullPost, 'all')}
            className="bloom-btn w-full py-3 flex items-center justify-center gap-2"
          >
            {copied === 'all' ? <><Check size={18} /> Copied!</> : <><Copy size={18} /> Copy Full Post</>}
          </button>
        </div>
      )}
    </div>
  )
}

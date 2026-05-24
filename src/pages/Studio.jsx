import { useState } from 'react'
import { studioTemplates } from '../lib/mockData'
import { Sparkles, Copy, RefreshCw, Check, Wand2 } from 'lucide-react'

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)] }

function generate(platform, tone, product) {
  const prod = product || pick(studioTemplates.products)
  const hook = pick(studioTemplates.hooks)
  const raw = pick(studioTemplates.captions)
  const days = Math.floor(Math.random() * 21) + 7
  const feelings = ['amazing', 'so light', 'energised', 'confident', 'incredible']
  const routines = ['morning routine', 'daily ritual', 'wellness journey']
  const benefits = ['reduced bloating', 'boosted energy', 'better sleep', 'less cravings', 'visible results']
  const caption = raw.replace('{product}', prod).replace('{days}', days).replace('{feeling}', pick(feelings)).replace('{routine}', pick(routines)).replace('{benefit}', pick(benefits)).replace('{benefit2}', pick(benefits))
  return { hook, caption, hashtags: pick(studioTemplates.hashtags), product: prod }
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
    setTimeout(() => { setContent(generate(platform, tone, product)); setLoading(false) }, 1200)
  }

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="page-container fade-up">
      <div className="flex items-start gap-3 mb-6">
        <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0" style={{background: 'linear-gradient(135deg, #e8637a, #d4486a)'}}>
          <Sparkles className="text-white" size={22} />
        </div>
        <div>
          <p className="label mb-1">AI-POWERED</p>
          <h1 className="text-3xl font-display font-bold text-mink leading-tight">Bloom Content Studio</h1>
          <p className="text-sm text-gray-400 mt-1">Generate social content in seconds</p>
        </div>
      </div>

      {/* Controls */}
      <div className="card space-y-5 mb-5">
        <div>
          <p className="label mb-3">PLATFORM</p>
          <div className="flex gap-2 flex-wrap">
            {['instagram', 'facebook', 'tiktok', 'whatsapp'].map(p => (
              <button key={p} onClick={() => setPlatform(p)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all capitalize active:scale-95 ${platform === p ? 'text-white shadow-md' : 'bg-pink-50 text-gray-500 border border-pink-100'}`} style={platform === p ? {background: 'linear-gradient(135deg, #e8637a, #d4486a)'} : {}}>
                {p}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="label mb-3">TONE</p>
          <div className="flex gap-2 flex-wrap">
            {['casual', 'professional', 'motivational', 'educational'].map(t => (
              <button key={t} onClick={() => setTone(t)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all capitalize active:scale-95 ${tone === t ? 'text-white shadow-md' : 'bg-pink-50 text-gray-500 border border-pink-100'}`} style={tone === t ? {background: 'linear-gradient(135deg, #e8637a, #d4486a)'} : {}}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="label mb-3">PRODUCT</p>
          <select className="input" value={product} onChange={e => setProduct(e.target.value)}>
            <option value="">Random product</option>
            {studioTemplates.products.map(p => <option key={p} value={p}>{p}</option>)}
          </select>
        </div>
        <button onClick={handleGenerate} disabled={loading} className="btn-primary flex items-center justify-center gap-2 disabled:opacity-70">
          {loading ? <><RefreshCw size={18} className="animate-spin" /> Generating...</> : <><Wand2 size={18} /> Generate Content</>}
        </button>
      </div>

      {/* Output */}
      {content && (
        <div className="space-y-3 fade-up">
          <div className="flex items-center justify-between mb-1">
            <p className="text-xl font-display font-semibold text-mink">Your Content</p>
            <button onClick={handleGenerate} className="flex items-center gap-1 text-xs text-bloom-500 font-semibold">
              <RefreshCw size={13} /> Redo
            </button>
          </div>

          {[
            { label: 'HOOK', text: content.hook, key: 'hook' },
            { label: 'CAPTION', text: content.caption, key: 'caption' },
          ].map(({ label, text, key }) => (
            <div key={key} className="card">
              <div className="flex items-center justify-between mb-2">
                <p className="label">{label}</p>
                <button onClick={() => handleCopy(text, key)} className="text-gray-300 active:scale-90 transition-all">
                  {copied === key ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
                </button>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{text}</p>
            </div>
          ))}

          <div className="card">
            <div className="flex items-center justify-between mb-3">
              <p className="label">HASHTAGS</p>
              <button onClick={() => handleCopy(content.hashtags.join(' '), 'tags')} className="text-gray-300 active:scale-90 transition-all">
                {copied === 'tags' ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {content.hashtags.map((tag, i) => (
                <span key={i} className="bg-bloom-50 text-bloom-600 text-xs px-3 py-1 rounded-full font-medium border border-bloom-100">{tag}</span>
              ))}
            </div>
          </div>

          <button onClick={() => handleCopy(`${content.hook}\n\n${content.caption}\n\n${content.hashtags.join(' ')}`, 'all')} className="btn-primary flex items-center justify-center gap-2">
            {copied === 'all' ? <><Check size={18} /> Copied!</> : <><Copy size={18} /> Copy Full Post</>}
          </button>
        </div>
      )}
    </div>
  )
}

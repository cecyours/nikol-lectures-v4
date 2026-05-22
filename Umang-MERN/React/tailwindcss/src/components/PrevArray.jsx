import { useState } from 'react'

const fruits = ['Apple', 'Mango', 'Grape', 'Banana', 'Kiwi', 'Peach', 'Berry', 'Melon']

const PrevArray = () => {
  const [items, setItems] = useState([])

  function addItem() {
    setItems(prev => [...prev, fruits[prev.length % fruits.length]])
  }

  function removeItem() {
    setItems(prev => prev.slice(0, -1))
  }

  function clearAll() {
    setItems([])
  }

  return (
    <div className="flex flex-col gap-4">

      {/* array visualizer */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 min-h-[72px] flex flex-wrap gap-2 items-center">
        {items.length === 0 ? (
          <span className="text-xs font-mono text-gray-300">[ ] — empty array</span>
        ) : (
          items.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-1.5 bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono px-3 py-1.5 rounded-lg animate-bounce-in"
            >
              <span className="text-teal-400 text-[10px]">{i}</span>
              {item}
            </span>
          ))
        )}
      </div>

      {/* length badge */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-gray-400 font-mono">items.length</span>
        <span className="bg-teal-100 text-teal-700 text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full">
          {items.length}
        </span>
      </div>

      {/* why prev matters */}
      <div className="rounded-xl border border-gray-100 overflow-hidden text-xs font-mono">
        <div className="bg-red-50 border-b border-gray-100 px-4 py-2.5 flex items-start gap-2">
          <span className="text-red-400 mt-0.5">✗</span>
          <div>
            <p className="text-red-600 font-semibold mb-1">Stale closure — can miss items</p>
            <p className="text-gray-400">setItems([...items, newItem])</p>
          </div>
        </div>
        <div className="bg-green-50 px-4 py-2.5 flex items-start gap-2">
          <span className="text-green-500 mt-0.5">✓</span>
          <div>
            <p className="text-green-700 font-semibold mb-1">Always uses latest array</p>
            <p className="text-gray-400">setItems(<span className="text-teal-600">prev</span> =&gt; [...<span className="text-teal-600">prev</span>, newItem])</p>
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={addItem}
          className="flex items-center gap-2 bg-teal-600 hover:bg-teal-700 active:scale-95 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-150"
        >
          + Add item
        </button>
        <button
          onClick={removeItem}
          disabled={items.length === 0}
          className="flex items-center gap-2 bg-white hover:bg-gray-50 active:scale-95 border border-gray-200 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          − Remove last
        </button>
        <button
          onClick={clearAll}
          disabled={items.length === 0}
          className="flex items-center gap-2 bg-red-50 hover:bg-red-100 active:scale-95 border border-red-100 text-red-600 text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-150 disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Clear all
        </button>
      </div>

    </div>
  )
}

export default PrevArray
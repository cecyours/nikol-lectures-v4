import { useState } from 'react'
import Prev from './components/Prev'
import PrevArray from './components/PrevArray'
import PrevObject from './components/PrevObject'
import PrevMultipleObject from './components/PrevMultipleObject'

const tabs = [
  {
    id: 'single',
    label: 'Prev',
    badge: '①',
    color: 'blue',
    title: 'Counter with functional update',
    desc: <>Uses <code className="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded">setCount(prev =&gt; prev + 1)</code> instead of <code className="font-mono text-[11px] bg-gray-100 px-1.5 py-0.5 rounded">setCount(count + 1)</code></>,
    component: <Prev />,
  },
  {
    id: 'array',
    label: 'PrevArray',
    badge: '②',
    color: 'teal',
    title: 'Mutate array without losing old items',
    desc: 'Spread previous array to preserve all existing items on each update',
    component: <PrevArray />,
  },
  {
    id: 'object',
    label: 'PrevObject',
    badge: '③',
    color: 'purple',
    title: 'Partial updates with spread',
    desc: 'Spread prev object then override only the field you want to change',
    component: <PrevObject />,
  },
  {
    id: 'multiobject',
    label: 'PrevMultipleObject',
    badge: '④',
    color: 'orange',
    title: 'Update one object inside an array',
    desc: 'Use map + spread to update a single matched object without touching the rest',
    component: <PrevMultipleObject />,
  },
]

const badgeColors = {
  blue:   'bg-blue-50 text-blue-800',
  teal:   'bg-teal-50 text-teal-800',
  purple: 'bg-purple-50 text-purple-800',
  orange: 'bg-orange-50 text-orange-800',
}

const activeTabColors = {
  blue:   'border-blue-500 text-blue-600',
  teal:   'border-teal-500 text-teal-600',
  purple: 'border-purple-500 text-purple-600',
  orange: 'border-orange-500 text-orange-600',
}

function App() {
  const [activeId, setActiveId] = useState('single')

  const active = tabs.find(t => t.id === activeId)

  return (
    <div className="max-w-2xl mx-auto px-6 py-10 flex flex-col gap-6">

   

      {/* tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-xl overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveId(tab.id)}
            className={`flex-1 min-w-fit flex flex-col items-center gap-0.5 px-3 py-2 rounded-lg text-xs font-medium transition-all duration-150 whitespace-nowrap
              ${activeId === tab.id
                ? 'bg-white shadow-sm text-gray-900'
                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-50'
              }`}
          >
            <span className="text-base leading-none">{tab.badge}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* active card */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm">
        <div className="flex flex-col gap-2">
          <span className={`inline-flex w-fit items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full ${badgeColors[active.color]}`}>
            {active.badge} {active.label}
          </span>
          <h2 className="text-base font-semibold text-gray-900">{active.title}</h2>
          <p className="text-xs text-gray-500 leading-relaxed">{active.desc}</p>
        </div>

        <hr className="border-gray-100" />

        {active.component}
      </div>

    </div>
  )
}

export default App
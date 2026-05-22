import { useState } from 'react'

const PrevObject = () => {
  const [user, setUser] = useState({
    name: 'Alex',
    age: 24,
    score: 0,
    active: true,
  })

  function addScore() {
    setUser(prev => ({ ...prev, score: prev.score + 10 }))
  }

  function birthday() {
    setUser(prev => ({ ...prev, age: prev.age + 1 }))
  }

  function toggleActive() {
    setUser(prev => ({ ...prev, active: !prev.active }))
  }

  function reset() {
    setUser({ name: 'Alex', age: 24, score: 0, active: true })
  }

  return (
    <div className="flex flex-col gap-4">

      {/* object visualizer */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 font-mono text-xs flex flex-col gap-2">
        <p className="text-gray-400 mb-1">user = {'{'}</p>

        <div className="flex items-center gap-2 pl-4">
          <span className="text-purple-500">name</span>
          <span className="text-gray-300">:</span>
          <span className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-gray-800">{user.name}</span>
        </div>

        <div className="flex items-center gap-2 pl-4">
          <span className="text-purple-500">age</span>
          <span className="text-gray-300">:</span>
          <span className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-gray-800">{user.age}</span>
        </div>

        <div className="flex items-center gap-2 pl-4">
          <span className="text-purple-500">score</span>
          <span className="text-gray-300">:</span>
          <span className="bg-purple-50 border border-purple-200 rounded-lg px-3 py-1 text-purple-700 font-semibold">{user.score}</span>
        </div>

        <div className="flex items-center gap-2 pl-4">
          <span className="text-purple-500">active</span>
          <span className="text-gray-300">:</span>
          <span className={`rounded-lg px-3 py-1 font-semibold border ${user.active ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-600'}`}>
            {String(user.active)}
          </span>
        </div>

        <p className="text-gray-400 mt-1">{'}'}</p>
      </div>

      {/* why prev matters */}
      <div className="rounded-xl border border-gray-100 overflow-hidden text-xs font-mono">
        <div className="bg-red-50 border-b border-gray-100 px-4 py-2.5 flex items-start gap-2">
          <span className="text-red-400 mt-0.5">✗</span>
          <div>
            <p className="text-red-600 font-semibold mb-1">Without spread — wipes all other fields!</p>
            <p className="text-gray-400">setUser({'({ score: prev.score + 10 })'})</p>
          </div>
        </div>
        <div className="bg-green-50 px-4 py-2.5 flex items-start gap-2">
          <span className="text-green-500 mt-0.5">✓</span>
          <div>
            <p className="text-green-700 font-semibold mb-1">With spread — only score changes</p>
            <p className="text-gray-400">setUser(<span className="text-purple-500">prev</span> =&gt; {'({ ...'}<span className="text-purple-500">prev</span>{', score: '}<span className="text-purple-500">prev</span>.score + 10{'})'})</p>
          </div>
        </div>
      </div>

      {/* buttons */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={addScore}
          className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-150"
        >
          + 10 score
        </button>
        <button
          onClick={birthday}
          className="bg-white hover:bg-gray-50 active:scale-95 border border-gray-200 text-gray-700 text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-150"
        >
          Birthday +1
        </button>
        <button
          onClick={toggleActive}
          className={`active:scale-95 text-sm font-medium px-5 py-2.5 rounded-xl border transition-all duration-150 ${user.active ? 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100' : 'bg-red-50 border-red-200 text-red-600 hover:bg-red-100'}`}
        >
          Toggle active
        </button>
        <button
          onClick={reset}
          className="bg-white hover:bg-gray-50 active:scale-95 border border-gray-200 text-gray-400 text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-150"
        >
          Reset
        </button>
      </div>

    </div>
  )
}

export default PrevObject
import { useState } from 'react'

const PrevMultipleObject = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Rahul', age: 20 },
    { id: 2, name: 'Amit', age: 22 },
  ])

  const [lastUpdated, setLastUpdated] = useState(null)

  function increaseAge(id) {
    setUsers(prev =>
      prev.map(user =>
        user.id === id
          ? { ...user, age: user.age + 1 }
          : user
      )
    )
    setLastUpdated(id)
  }

  function resetAll() {
    setUsers([
      { id: 1, name: 'Rahul', age: 20 },
      { id: 2, name: 'Amit', age: 22 },
    ])
    setLastUpdated(null)
  }

  return (
    <div className="flex flex-col gap-4">

      {/* user cards */}
      <div className="flex flex-col gap-3">
        {users.map(user => (
          <div
            key={user.id}
            className={`bg-gray-50 border rounded-xl p-4 flex items-center justify-between transition-all duration-200 ${lastUpdated === user.id ? 'border-purple-300 bg-purple-50' : 'border-gray-200'}`}
          >
            {/* avatar + info */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-700 font-semibold text-sm font-mono">
                {user.name[0]}
              </div>
              <div className="flex flex-col font-mono">
                <span className="text-sm font-semibold text-gray-800">{user.name}</span>
                <span className="text-[10px] text-gray-400">id: {user.id}</span>
              </div>
            </div>

            {/* age + button */}
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">age</span>
                <span className={`text-2xl font-semibold font-mono transition-all duration-200 ${lastUpdated === user.id ? 'text-purple-600' : 'text-gray-800'}`}>
                  {user.age}
                </span>
              </div>
              <button
                onClick={() => increaseAge(user.id)}
                className="bg-purple-600 hover:bg-purple-700 active:scale-95 text-white text-sm font-medium px-4 py-2 rounded-xl transition-all duration-150"
              >
                + age
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* how it works */}
      <div className="rounded-xl border border-gray-100 overflow-hidden text-xs font-mono">
        <div className="bg-gray-800 px-4 py-3 flex flex-col gap-1">
          <p className="text-gray-400">{'// only the matched user gets updated'}</p>
          <p>
            <span className="text-blue-400">setUsers</span>
            <span className="text-gray-300">(</span>
            <span className="text-purple-400">prev</span>
            <span className="text-gray-300"> {'=> '}</span>
          </p>
          <p className="pl-4">
            <span className="text-purple-400">prev</span>
            <span className="text-gray-300">.</span>
            <span className="text-blue-400">map</span>
            <span className="text-gray-300">(</span>
            <span className="text-yellow-400">user</span>
            <span className="text-gray-300"> {'=> '}</span>
          </p>
          <p className="pl-8">
            <span className="text-yellow-400">user</span>
            <span className="text-gray-300">.id === id</span>
          </p>
          <p className="pl-10">
            <span className="text-gray-300">{'? { ...'}</span>
            <span className="text-yellow-400">user</span>
            <span className="text-gray-300">{', age: '}</span>
            <span className="text-yellow-400">user</span>
            <span className="text-gray-300">.age + 1 {'}'}</span>
          </p>
          <p className="pl-10">
            <span className="text-gray-300">: </span>
            <span className="text-yellow-400">user</span>
          </p>
          <p className="text-gray-300">{'  )'}</p>
          <p className="text-gray-300">{')'}</p>
        </div>
      </div>

      {/* tip */}
      <div className="flex items-start gap-2 bg-purple-50 border border-purple-100 rounded-xl px-4 py-3 text-xs text-purple-700 leading-relaxed">
        <span className="mt-0.5">💡</span>
        <p>
          <span className="font-semibold">map returns a new array</span> — matched user gets spread + updated age, every other user returns unchanged. No mutation!
        </p>
      </div>

      {/* reset */}
      <button
        onClick={resetAll}
        className="self-start bg-white hover:bg-gray-50 active:scale-95 border border-gray-200 text-gray-400 text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-150"
      >
        Reset all
      </button>

    </div>
  )
}

export default PrevMultipleObject
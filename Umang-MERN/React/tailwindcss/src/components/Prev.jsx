import { useState } from 'react'

const Prev = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
        setCount(prev => prev + 1)
    }

    return (
        <div className="flex flex-col gap-4">

            {/* state display */}
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-center bg-gray-50 border border-gray-200 rounded-xl px-6 py-3">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">count</span>
                    <span className="text-3xl font-semibold text-gray-900 font-mono">{count}</span>
                </div>
                <div className="flex flex-col gap-1 text-xs text-gray-400 font-mono">
                    <span>+1</span>
                    <span>+1</span>
                    <span>+1</span>
                </div>
                <div className="flex flex-col items-center bg-blue-50 border border-blue-200 rounded-xl px-6 py-3">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest mb-1">after click</span>
                    <span className="text-3xl font-semibold text-blue-700 font-mono">{count + 3}</span>
                </div>
            </div>

            {/* why prev matters */}
            <div className="rounded-xl border border-gray-100 overflow-hidden text-xs font-mono">
                <div className="bg-red-50 border-b border-gray-100 px-4 py-2.5 flex items-start gap-2">
                    <span className="text-red-400 mt-0.5">✗</span>
                    <div>
                        <p className="text-red-600 font-semibold mb-1">Without prev — count only goes +1</p>
                        <p className="text-gray-400">setCount(count + 1)</p>
                        <p className="text-gray-400">setCount(count + 1)</p>
                        <p className="text-gray-400">setCount(count + 1)</p>
                    </div>
                </div>
                <div className="bg-green-50 px-4 py-2.5 flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <div>
                        <p className="text-green-700 font-semibold mb-1">With prev — count goes +3</p>
                        <p className="text-gray-400">setCount(<span className="text-blue-500">prev</span> =&gt; <span className="text-blue-500">prev</span> + 1)</p>
                        <p className="text-gray-400">setCount(<span className="text-blue-500">prev</span> =&gt; <span className="text-blue-500">prev</span> + 1)</p>
                        <p className="text-gray-400">setCount(<span className="text-blue-500">prev</span> =&gt; <span className="text-blue-500">prev</span> + 1)</p>
                    </div>
                </div>
            </div>

            {/* button */}
            <button
                onClick={handleClick}
                className="self-start flex items-center gap-2 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-all duration-150"
            >
                Click — adds 3
            </button>

        </div>
    )
}

export default Prev
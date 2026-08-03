import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../store/countSlice'

const Counter = () => {
    const dispatch = useDispatch()
    const { count } = useSelector((state) => state.count)

    return (
        <div className="flex items-center justify-center gap-6 p-6">
            <button
                onClick={() => dispatch(decrement())}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500 text-2xl font-bold text-white transition hover:bg-red-600 active:scale-95"
            >
                -
            </button>

            <span className="text-xl font-semibold text-gray-800">
                Counter: {count}
            </span>

            <button
                onClick={() => dispatch(increment())}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500 text-2xl font-bold text-white transition hover:bg-green-600 active:scale-95"
            >
                +
            </button>
        </div>
    )
}

export default Counter
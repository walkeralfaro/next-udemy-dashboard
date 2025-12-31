'use client'

import { useState } from "react"
import { Button } from "../ui/button"

interface CartCounterProps {
  value?: number
}

export default function CartCounter({ value = 0 }: CartCounterProps) {
  const [count, setCount] = useState(value)

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex gap-6">
        <Button onClick={() => setCount(count + 1)}>
          +1
        </Button>
        <Button onClick={() => setCount(count - 1)}>
          -1
        </Button>
      </div>
    </>
  )
}
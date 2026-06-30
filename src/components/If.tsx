import type { ReactNode } from "react"

interface IfProps {
  condition: boolean | null | undefined
  children: ReactNode
}

const If = ({ condition, children }: IfProps) => {
  return condition ? children : null
}

export default If

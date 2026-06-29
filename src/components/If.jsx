// If component to conditionally render children based on a boolean prop
import "react"

const If = ({ condition, children }) => {
  return condition ? children : null
}

export default If

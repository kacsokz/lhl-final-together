import { useState } from "react";

export default function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);
  const [mode, setMode] = useState(initial);
  function transition(value, replace) {
    if (replace === true) {
      if (history.length <= 1) {
        setMode(initial)
      }
      if (history.length > 1) {
        setMode(value);
        history[history.length - 1] = value
        setHistory(history)
      }
    }
    if (replace !== true) {
      setMode(value)
      history.push(value)
      setHistory(history)
    }
  }
  function back() {
    if (history.length <= 1) {
      return undefined
    }
    setMode(history[history.length - 2])
    history.pop()
    setHistory(history)
  }
  return { mode, transition, back };
}
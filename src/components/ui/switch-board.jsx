import { useEffect, useRef } from 'react'

export const SwitchBoard = () => {
  const rows = 5
  const columns = 18
  const transitionDuration = 250
  // Cherry-pick a few lights to animate
  // Randomly animate between three states

  const ref = useRef()

  useEffect(() => {
    const indices = [7, 15, 19, 29, 26, 34, 46, 55, 60, 67, 70, 74, 83]
    const states = ['off', 'medium', 'high']
    const timeoutIds = []

    const interval = setInterval(() => {
      indices.forEach((index) => {
        const light = ref.current.querySelector(`[data-index="${index}"]`)

        if (!light) {
          return
        }

        // Pick a random next state
        const nextState = states[Math.floor(Math.random() * states.length)]
        const currentState = light.dataset.state

        const pulse =
          Math.random() > 0.2 &&
          // Make sure we only pulsate going from "off" → "medium" → "high"
          ((currentState === 'off' && nextState === 'high') ||
            (currentState === 'off' && nextState === 'medium') ||
            (currentState === 'medium' && nextState === 'high'))

        if (pulse) {
          // Add an arbitrary delay between 100-500ms
          const delay = getRandomNumber(100, 500)

          timeoutIds.push(
            setTimeout(() => {
              light.style.transform = 'scale(2)'
            }, delay)
          )

          timeoutIds.push(
            setTimeout(() => {
              light.style.transform = 'scale(1)'
            }, transitionDuration + delay)
          )
        }

        // After a pulse, don't transition from "high" → "medium"
        if (currentState === 'high' && nextState === 'medium' && pulse) {
          light.dataset.state = 'off'
        } else {
          light.dataset.state = nextState
        }
      })
    }, 1000)

    return () => {
      clearInterval(interval)
      timeoutIds.forEach(clearTimeout)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="switchboard"
      style={{
        display: 'grid',
        gap: `${columns}px`,
        gridTemplateColumns: `repeat(${columns}, 1fr)`
      }}
    >
      {Array.from({ length: columns * rows }).map((_, i) => {
        return (
          <div
            key={i}
            className="light"
            data-state="off"
            data-index={i}
            style={{
              '--transition-duration': `${transitionDuration}ms`
            }}
          />
        )
      })}
    </div>
  )
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

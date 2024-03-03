import styles from './decorative-bubbles.module.scss'
interface DecorativeBubblesProps {
  direction:  'left' | 'right',
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right',
  animation?: 'true' | 'false'
}

export const DecorativeBubbles = ({ direction, position, animation } : DecorativeBubblesProps) => {
  return (
    <div className={`${styles['blubbles']}`} data-direction={direction} data-position={position} data-animation={animation}>
      <div className={`${styles['blubble__single']} ${styles['blubble__single--border']}`}></div>
      <div className={`${styles['blubble__single']}`}></div>
      <div className={`${styles['blubble__single']}`}></div>
      <div className={`${styles['blubble__single']}`}></div>
    </div>
  )
}

export default DecorativeBubbles;
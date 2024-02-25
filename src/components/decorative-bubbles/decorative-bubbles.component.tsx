import styles from './decorative-bubbles.module.scss'
interface DecorativeBubblesProps {
  direction?: string,
  position?: string
}

export const DecorativeBubbles = ({ direction = '', position = '' } : DecorativeBubblesProps) => {
  return (
    <div className={`${styles['blubbles']}`} data-direction={direction} data-position={position}>
      <div className={`${styles['blubble__single']} ${styles['blubble__single--border']}`}></div>
      <div className={`${styles['blubble__single']}`}></div>
      <div className={`${styles['blubble__single']}`}></div>
      <div className={`${styles['blubble__single']}`}></div>
    </div>
  )
}

export default DecorativeBubbles;
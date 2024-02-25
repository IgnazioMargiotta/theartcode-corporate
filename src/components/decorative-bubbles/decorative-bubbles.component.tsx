import styles from './decorative-bubbles.module.scss'
import PropTypes from 'prop-types';

export const DecorativeBubbles = ({ direction = '', position = '' }: {  direction?: string, position?: string }) => {
  return (
    <div className={`${styles['blubbles']}`} data-direction={direction} data-position={position}>
      <div className={`${styles['blubble__single']} ${styles['blubble__single--border']}`}></div>
      <div className={`${styles['blubble__single']}`}></div>
      <div className={`${styles['blubble__single']}`}></div>
      <div className={`${styles['blubble__single']}`}></div>
    </div>
  )
}

DecorativeBubbles.propTypes = {
  direction: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};

export default DecorativeBubbles;
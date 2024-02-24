import styles from './hello-world.module.scss'

export const HelloWord = () => {
  return (
    <h1 className={`text-3xl font-bold underline ${styles['hello-world']}`}>
      Hello world!
    </h1>
  )
}

export default HelloWord
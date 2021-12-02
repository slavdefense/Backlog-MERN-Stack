import styles from './Landing.module.css'

const Landing = ({user}) => {
  return (
    <main className={styles.container}>
      <h1>
        Ke paso amigo, {user ? user.name : "Friend"}
      </h1>
    </main>
  )
}

export default Landing
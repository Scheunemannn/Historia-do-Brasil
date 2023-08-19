import { Header } from "./components/Header"
import { MainArticles } from "./components/Main.articles"
import styles from "./global.module.css"
function App() {
  return (
   <div>
      <Header/>
      <div className={styles.wrapper}>
        <MainArticles/>
      </div>
   </div>
  )
}

export default App

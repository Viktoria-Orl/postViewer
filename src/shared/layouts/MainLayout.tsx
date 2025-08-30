import Footer from "../../widgets/LayoutFooter/Footer";
import Header from "../../widgets/LayoutHeader/Header";
import PostList from "../../widgets/PostList/PostList";
import styles from "./MainLayout.module.css";

export default function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <Header></Header>
      <main className={styles.mainContent}>
        <PostList></PostList>
      </main>
      <Footer></Footer>
    </div>
  );
}

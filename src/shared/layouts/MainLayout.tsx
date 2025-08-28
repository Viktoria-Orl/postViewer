import Footer from "../../widgets/LayoutFooter/Footer";
import Header from "../../widgets/LayoutHeader/Header";
import PostList from "../../widgets/PostList/PostList";
import { Fragment } from 'react';

export default function MainLayout() {
  return (
    <Fragment>
      <Header></Header>
      <PostList></PostList>
      <Footer></Footer>
    </Fragment>
  );
}

import React from 'react';
import '@/App.css';
import Routers from "@/router/index"
// import Header from "@/components/layheader/Headers"
// import TabBarExample from "@/components/main/tabbar/tabBar.jsx"
import Swiper from "@/components/main/swiper/swiper.jsx"
// 引入css样式Ant Design Mobile
import 'antd-mobile/dist/antd-mobile.css';
// import { connect } from "react-redux"
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>APP组件</h2>
        {/* <Header /> */}
        {/* 引入tab切换 */}
        {/* <TabBarExample /> */}
        {/* swiper */}
        <Swiper />
        <Routers />
      </header>
    </div>
  );
}
export default App;

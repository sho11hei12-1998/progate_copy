import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <a className="header-nav-logo">
          <img src="https://d2aj9sy12tbpym.cloudfront.net/javascripts/dist/assets/header_logo-a02452e14625b5af8dbcb37a3cc3ffbb.svg" />
        </a>
        <nav className="header-nav">
          <a>コース一覧</a>
          <a>スライド検索</a>
          <a>ランキング</a>
          <a>ヘルプ</a>
        </nav>
      </div>
    );
  }
}

export default Header;

import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <img src="https://d2aj9sy12tbpym.cloudfront.net/assets/business/biz_logo_ja-98cf7067364efcd4f1899de2266450871bcdd0a0c617517ac3ae738aaa340963.svg" />
            <div className="download">
              <p>アプリ版のダウンロードはこちら</p>
              <img src="https://d2aj9sy12tbpym.cloudfront.net/assets/ja/landing/app_download/download-ios-e6d68c4ac58053c7463fbbf3919c605a74cb75ede8a1b933bf8d9eb163a47ef8.svg" />
              <img src="https://d2aj9sy12tbpym.cloudfront.net/assets/ja/landing/app_download/download-android-fa4ed66d6fea6ee433a92dd0502d0048b0ee78c26fa1f90a01cdaf4b2aca4f45.svg" />
            </div>
          </div>
          <div className="footer-right">
            <div className="item-right">
              <h4>サービス</h4>
              <li>
                <a>コース一覧</a>
              </li>
              <li>
                <a>有料会員プラン</a>
              </li>
              <li>
                <a>中学・高校向けプラン</a>
              </li>
              <li>
                <a>ダッシュボード</a>
              </li>
              <li>
                <a>サクセスストーリー</a>
              </li>
              <li>
                <a>ブログ</a>
              </li>
              <li>
                <a>ヘルプ</a>
              </li>
            </div>
            <div className="item-right">
              <h4>サポート</h4>
              <li>
                <a>コース一覧</a>
              </li>
              <li>
                <a>有料会員プラン</a>
              </li>
              <li>
                <a>中学・高校向けプラン</a>
              </li>
              <li>
                <a>ダッシュボード</a>
              </li>
              <li>
                <a>サクセスストーリー</a>
              </li>
              <li>
                <a>ブログ</a>
              </li>
              <li>
                <a>ヘルプ</a>
              </li>
              <div>
                <h4 className="sns">SNS</h4>
                <li>
                  <a>Facebook</a>
                </li>
                <li>
                  <a>Twitter</a>
                </li>
              </div>
            </div>
            <div className="item-right">
              <h4>法人向けサービス</h4>
              <div className="logo-card">
                <img src="https://d2aj9sy12tbpym.cloudfront.net/assets/business/biz_logo_ja-98cf7067364efcd4f1899de2266450871bcdd0a0c617517ac3ae738aaa340963.svg" />
              </div>
              <div className="item-right-text">
                <p>
                  企業のプログラミング研修を支援する、法人のお客様向けの利用プランです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

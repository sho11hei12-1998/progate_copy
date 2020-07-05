import React from "react";
import Path from "./Path";
import Lesson from "./Lesson";

class Main extends React.Component {
  render() {
    const LessonList = [
      [
        {
          name: "HTML&CSS",
          image:
            "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/html.svg",
          introduction: "Webページの見た目をつくるプログラミング言語",
          num: "全7レッスン + 3記事",
        },
        {
          name: "JavaScript",
          image:
            "https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg",
          introduction: "多様な可能性を秘めたフロントエンド言語",
          num: "全7レッスン + 3記事",
        },
        {
          name: "jQuery",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/jquery-a96de286d2c3b000bea702b018044b401b58cbbda3b4481af57f5bec5464ccf2.svg",
          introduction:
            "効果的なアニメーションを実装できるJavaScriptライブラリ",
          num: "全7レッスン + 3記事",
        },
        {
          name: "Ruby",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/ruby-67da22c74d14d226cbb854339c9d0d797440abb257eec16e51a00d9abba75d97.svg",
          introduction:
            "直感的に理解しやすく、高い生産性を誇るサーバーサイド言語",
          num: "全7レッスン + 3記事",
        },
      ],
      [
        {
          name: "Ruby on Rails5",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/rails5-4c29f34d5969ec160c55aaf195479a5d8caaec9f0c7af3b13775f633980d76f3.svg",
          introduction: "Webサービス開発に必須のRubyフレームワーク",
          num: "全7レッスン + 3記事",
        },
        {
          name: "PHP",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/php-4efa925c22077e637fb1c4e62af8b1acc5671c8ec70db932b77b35531c5f0772.svg",
          introduction: "Web開発に適したサーバーサイド言語",
          num: "全7レッスン + 3記事",
        },
        {
          name: "Java",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/java-f8af3f7d7b90c6e74601328c9d717348fad01135d50c9ae06a547cd32a23f0f7.svg",
          introduction:
            "大規模開発からモバイルアプリまで、汎用的なプログラミング言語",
          num: "全7レッスン + 3記事",
        },
        {
          name: "Python",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/python-baf258896a111d1b23043008e2ac835a63ea3f0349b0afaaf40b006c7414f8f0.svg",
          introduction:
            "科学演算や機械学習などにも用いられるサーバーサイド言語",
          num: "全7レッスン + 3記事",
        },
      ],
      [
        {
          name: "Command Line",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/commandline-a75be113866b46af2aa57f64a185992ec4a70d0b4591d22bfbb297bb9f49da00.svg",
          introduction:
            "コマンドを用いてコンピュータを操作する開発現場では必須のスキル",
          num: "全7レッスン + 3記事",
        },
        {
          name: "Git",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/git-129fee5eb0f17652945edd80bdcfefab77542705d1465e7f4083d3e80a2ee9ae.svg",
          introduction:
            "ソースコードのバージョン管理や共同開発を可能にするツール",
          num: "全7レッスン + 3記事",
        },
        {
          name: "SQL",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/sql-8161d8089f9e5dfd60d1503a5f898dc573c03b60fe83ad7acfb605d1078475d7.svg",
          introduction: "データの操作や分析にも使えるデータベース言語",
          num: "全7レッスン + 3記事",
        },
        {
          name: "Saas",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/sass-1cf9cd102a27fe0dd13ce596810dc2a0c57a4ca875ea15d7e2c6b66963332f91.svg",
          introduction: "CSSをより便利に効果的に操作する言語",
          num: "全7レッスン + 3記事",
        },
      ],
      [
        {
          name: "Go",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/go-fe007151659656a137b840b1c0e02428c3fb58b09b8724854d93467ed221946d.svg",
          introduction: "Googleが開発した人気上昇中のサーバーサイド言語",
          num: "全7レッスン + 3記事",
        },
        {
          name: "React",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/react-f6bedc6780093fd50ce0ba62fc5ba17e165a4fc3e32c97380dcb43703fbac623.svg",
          introduction:
            "世界的に人気急上昇中のサイトの見た目を作るJavaScriptライブラリ",
          num: "全7レッスン + 3記事",
        },
        {
          name: "Node.js",
          image:
            "https://d2aj9sy12tbpym.cloudfront.net/assets/languages/language_list/nodejs-09daf8af1cfc5ca33f450678cb7d952f1c52d9633159d4979ba3c14ffa3cfd48.svg",
          introduction: "世界中で使われているサーバーサイドで動くJavaScript",
          num: "全7レッスン + 3記事",
        },
      ],
    ];

    return (
      <div className="main-wrapper">
        <Path />
        <div className="lesson-container">
          <p className="title">
            <img src="https://d2aj9sy12tbpym.cloudfront.net/javascripts/dist/assets/skill_icon-f7d795a28a48caef1e6040886572bdcd.svg" />
            コース
          </p>
          {/*Lesson1*/}
          {LessonList[0].map((lessonItem) => {
            return (
              <Lesson
                name={lessonItem.name}
                image={lessonItem.image}
                introduction={lessonItem.introduction}
              />
            );
          })}

          {/*Lesson2*/}
          {LessonList[1].map((lessonItem) => {
            return (
              <Lesson
                name={lessonItem.name}
                image={lessonItem.image}
                introduction={lessonItem.introduction}
              />
            );
          })}

          {/*Lesson3*/}
          {LessonList[2].map((lessonItem) => {
            return (
              <Lesson
                name={lessonItem.name}
                image={lessonItem.image}
                introduction={lessonItem.introduction}
              />
            );
          })}

          {/*Lesson4*/}
          {LessonList[3].map((lessonItem) => {
            return (
              <Lesson
                name={lessonItem.name}
                image={lessonItem.image}
                introduction={lessonItem.introduction}
              />
            );
          })}
        </div>
        <h3 className="main-link">
          各レッスンの公開状況などの詳しい情報は<a href="">こちら</a>
          から確認してください。
        </h3>
      </div>
    );
  }
}
export default Main;

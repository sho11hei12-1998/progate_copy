import React from "react";

class Path extends React.Component {
  render() {
    return (
      <div>
        <p className="title">
          <img src="https://d2aj9sy12tbpym.cloudfront.net/javascripts/dist/assets/path_icon-1edbb8798c7c47abcf29ad3d545d3ae1.svg" />
          パス
        </p>
        <div className="path-main-container">
          <div className="path-main-text">
            <h1>Web開発パス(Node.js)</h1>
            <p>
              このパスではWeb開発に必要な知識を学ぶことができます。
              Node.jsを使ってWebアプリの仕組みを理解し、実際に作れるようになりましょう！
            </p>
            <div className="path-main-list">
              <div className="path-main-list-item">
                <h2>
                  <img src="https://d2aj9sy12tbpym.cloudfront.net/javascripts/dist/assets/skill_icon-f7d795a28a48caef1e6040886572bdcd.svg" />
                  全4コース
                </h2>
              </div>
              <h2>HTML&CSS</h2>
              <h2>JavaScript</h2>
              <h2>SQL</h2>
              <h2>Node.js</h2>
            </div>
          </div>
          <div className="language-main-img">
            <img src="https://d18en44nkeqroq.cloudfront.net/paths/node/top_image.svg" />
          </div>
        </div>

        {/*language-path-list */}
        <div className="language-path-list">
          <div className="path-card">
            <div className="path-item">
              <img src="https://d18en44nkeqroq.cloudfront.net/paths/rails/top-image.svg" />
              <h4>Web開発パス(Ruby on Rails)</h4>
              <p className="path-text">
                <img src="https://d2aj9sy12tbpym.cloudfront.net/javascripts/dist/assets/skill_icon-f7d795a28a48caef1e6040886572bdcd.svg" />
                全3コース
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Path;

import "./Page.css";

export function About() {
  return (
    <div class="page-container">
      <div class="page-content">
        <h1>アバウト</h1>
        <p>このアプリケーションについて</p>
        <div class="about-section">
          <h2>概要</h2>
          <p>
            このアプリケーションは、Preactを使用したモダンなWebアプリケーションです。
            react-router-domのようなルーティング機能を実装し、複数ページでのナビゲーションが可能です。
          </p>
          <h2>技術スタック</h2>
          <ul>
            <li>Preact - 軽量なReact代替フレームワーク</li>
            <li>TypeScript - 型安全な開発</li>
            <li>Vite - 高速なビルドツール</li>
            <li>preact-router - ルーティング機能</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

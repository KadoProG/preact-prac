import "./Page.css";

export function Home() {
  return (
    <div class="page-container">
      <div class="page-content">
        <h1>ホーム</h1>
        <p>ようこそ、Preactアプリケーションへ！</p>
        <div class="feature-grid">
          <div class="feature-card">
            <h3>🚀 高速</h3>
            <p>軽量で高速なPreactフレームワーク</p>
          </div>
          <div class="feature-card">
            <h3>⚡ シンプル</h3>
            <p>使いやすいAPIと直感的な開発体験</p>
          </div>
          <div class="feature-card">
            <h3>📦 軽量</h3>
            <p>小さなバンドルサイズでパフォーマンス最適化</p>
          </div>
        </div>
      </div>
    </div>
  );
}

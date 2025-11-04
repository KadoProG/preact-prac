import { Rocket01, Lightning01, Package } from "@untitledui/icons";
import "./Page.css";

export function Home() {
  return (
    <div class="page-container">
      <div class="page-content">
        <h1>ホーム</h1>
        <p>ようこそ、Preactアプリケーションへ！</p>
        <div class="feature-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <Rocket01 className="size-6" strokeWidth={1.5} />
            </div>
            <h3>高速</h3>
            <p>軽量で高速なPreactフレームワーク</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <Lightning01 className="size-6" strokeWidth={1.5} />
            </div>
            <h3>シンプル</h3>
            <p>使いやすいAPIと直感的な開発体験</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">
              <Package className="size-6" strokeWidth={1.5} />
            </div>
            <h3>軽量</h3>
            <p>小さなバンドルサイズでパフォーマンス最適化</p>
          </div>
        </div>
      </div>
    </div>
  );
}

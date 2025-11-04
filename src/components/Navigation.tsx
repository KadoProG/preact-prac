import { Link } from "preact-router/match";
import "./Navigation.css";

// preact-router/matchのLinkの型定義を拡張
declare module "preact-router/match" {
  export interface LinkProps {
    href: string;
    activeClassName?: string;
    children?: preact.ComponentChildren;
  }
}

export function Navigation() {
  return (
    <nav class="navigation">
      <div class="nav-container">
        <div class="nav-brand">
          <Link href="/" activeClassName="active">
            Preact App
          </Link>
        </div>
        <ul class="nav-links">
          <li>
            <Link href="/" activeClassName="active">
              ホーム
            </Link>
          </li>
          <li>
            <Link href="/about" activeClassName="active">
              アバウト
            </Link>
          </li>
          <li>
            <Link href="/register" activeClassName="active">
              登録
            </Link>
          </li>
          <li>
            <Link href="/contact" activeClassName="active">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

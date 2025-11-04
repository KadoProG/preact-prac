import { Link } from "preact-router/match";

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
    <nav class="bg-white shadow-md sticky top-0 z-[100]">
      <div class="w-full px-4 py-4 flex flex-col items-center gap-4 md:flex-row md:justify-between md:items-center md:h-[60px] md:px-8 md:py-0">
        <div class="nav-brand">
          <Link
            href={`${import.meta.env.VITE_APP_PATH}/`}
            activeClassName="active"
            class="text-2xl font-bold text-primary no-underline transition-colors hover:text-primary-dark"
          >
            Preact App
          </Link>
        </div>
        <ul class="flex flex-col list-none m-0 p-0 gap-2 w-full md:flex-row md:gap-8 md:w-auto md:mt-0">
          <li class="m-0 w-full md:w-auto">
            <Link
              href={`${import.meta.env.VITE_APP_PATH}/`}
              activeClassName="active"
              class="block text-gray-800 no-underline font-medium py-2 px-3 rounded transition-colors relative hover:bg-gray-100 hover:text-primary w-full md:w-auto md:py-2 md:px-0 md:rounded-none md:hover:bg-transparent"
            >
              ホーム
            </Link>
          </li>
          <li class="m-0 w-full md:w-auto">
            <Link
              href={`${import.meta.env.VITE_APP_PATH}/about`}
              activeClassName="active"
              class="block text-gray-800 no-underline font-medium py-2 px-3 rounded transition-colors relative hover:bg-gray-100 hover:text-primary w-full md:w-auto md:py-2 md:px-0 md:rounded-none md:hover:bg-transparent"
            >
              アバウト
            </Link>
          </li>
          <li class="m-0 w-full md:w-auto">
            <Link
              href={`${import.meta.env.VITE_APP_PATH}/register`}
              activeClassName="active"
              class="block text-gray-800 no-underline font-medium py-2 px-3 rounded transition-colors relative hover:bg-gray-100 hover:text-primary w-full md:w-auto md:py-2 md:px-0 md:rounded-none md:hover:bg-transparent"
            >
              登録
            </Link>
          </li>
          <li class="m-0 w-full md:w-auto">
            <Link
              href={`${import.meta.env.VITE_APP_PATH}/contact`}
              activeClassName="active"
              class="block text-gray-800 no-underline font-medium py-2 px-3 rounded transition-colors relative hover:bg-gray-100 hover:text-primary w-full md:w-auto md:py-2 md:px-0 md:rounded-none md:hover:bg-transparent"
            >
              お問い合わせ
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

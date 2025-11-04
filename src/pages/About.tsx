export function About() {
  return (
    <div class="min-h-[calc(100vh-80px)] p-8 w-full flex justify-start items-start md:p-4">
      <div class="w-full">
        <h1 class="text-4xl mb-4 text-gray-800 md:text-3xl">アバウト</h1>
        <p class="text-lg text-gray-600 mb-8">このアプリケーションについて</p>
        <div class="bg-white p-8 rounded-lg shadow-md mt-8 w-full">
          <h2 class="mt-0 mb-4 text-gray-800">概要</h2>
          <p class="leading-relaxed text-gray-600 mb-6">
            このアプリケーションは、Preactを使用したモダンなWebアプリケーションです。
            react-router-domのようなルーティング機能を実装し、複数ページでのナビゲーションが可能です。
          </p>
          <h2 class="mt-0 mb-4 text-gray-800">技術スタック</h2>
          <ul class="list-disc pl-8 text-gray-600">
            <li class="mb-2 leading-relaxed">Preact - 軽量なReact代替フレームワーク</li>
            <li class="mb-2 leading-relaxed">TypeScript - 型安全な開発</li>
            <li class="mb-2 leading-relaxed">Vite - 高速なビルドツール</li>
            <li class="mb-2 leading-relaxed">preact-router - ルーティング機能</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

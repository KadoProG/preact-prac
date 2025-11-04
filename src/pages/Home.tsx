import { Rocket01, Lightning01, Package } from "@untitledui/icons";

export function Home() {
  return (
    <div class="min-h-[calc(100vh-80px)] p-8 w-full flex justify-start items-start md:p-4">
      <div class="w-full">
        <h1 class="text-4xl mb-4 text-gray-800 md:text-3xl">ホーム</h1>
        <p class="text-lg text-gray-600 mb-8">ようこそ、Preactアプリケーションへ！</p>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 mt-8 w-full md:grid-cols-1">
          <div class="bg-white p-6 rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div class="mb-4 flex items-center text-primary">
              <Rocket01 className="size-6" strokeWidth={1.5} />
            </div>
            <h3 class="m-0 mb-2 text-xl">高速</h3>
            <p class="m-0 text-gray-600 text-sm">軽量で高速なPreactフレームワーク</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div class="mb-4 flex items-center text-primary">
              <Lightning01 className="size-6" strokeWidth={1.5} />
            </div>
            <h3 class="m-0 mb-2 text-xl">シンプル</h3>
            <p class="m-0 text-gray-600 text-sm">使いやすいAPIと直感的な開発体験</p>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
            <div class="mb-4 flex items-center text-primary">
              <Package className="size-6" strokeWidth={1.5} />
            </div>
            <h3 class="m-0 mb-2 text-xl">軽量</h3>
            <p class="m-0 text-gray-600 text-sm">小さなバンドルサイズでパフォーマンス最適化</p>
          </div>
        </div>
      </div>
    </div>
  );
}

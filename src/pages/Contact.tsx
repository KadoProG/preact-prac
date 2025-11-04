import { useState } from "preact/hooks";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    setFormData((prev) => ({
      ...prev,
      [target.name]: target.value,
    }));
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("お問い合わせ:", formData);
    alert("お問い合わせありがとうございます！（これはモックです）");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div class="min-h-[calc(100vh-80px)] p-8 w-full flex justify-start items-start md:p-4">
      <div class="w-full">
        <h1 class="text-4xl mb-4 text-gray-800 md:text-3xl">お問い合わせ</h1>
        <p class="text-lg text-gray-600 mb-8">ご質問やご意見をお聞かせください</p>
        <form onSubmit={handleSubmit} class="bg-white p-8 rounded-lg shadow-md mt-8 w-full">
          <div class="mb-6">
            <label for="name" class="block mb-2 font-medium text-gray-800">
              お名前
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onInput={handleChange}
              required
              placeholder="山田 太郎"
              class="w-full px-3 py-3 border border-gray-300 rounded text-base font-inherit transition-colors focus:outline-none focus:border-primary"
            />
          </div>
          <div class="mb-6">
            <label for="email" class="block mb-2 font-medium text-gray-800">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onInput={handleChange}
              required
              placeholder="example@email.com"
              class="w-full px-3 py-3 border border-gray-300 rounded text-base font-inherit transition-colors focus:outline-none focus:border-primary"
            />
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 font-medium text-gray-800">
              メッセージ
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onInput={handleChange}
              required
              rows={5}
              placeholder="お問い合わせ内容をご記入ください"
              class="w-full px-3 py-3 border border-gray-300 rounded text-base font-inherit transition-colors resize-y focus:outline-none focus:border-primary"
            />
          </div>
          <button
            type="submit"
            class="bg-gradient-to-r from-gradient-start to-gradient-end text-white px-4 py-3 rounded-lg text-base font-semibold cursor-pointer transition-all hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
          >
            送信する
          </button>
        </form>
      </div>
    </div>
  );
}

import { useState } from "preact/hooks";
import "./Page.css";

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
    <div class="page-container">
      <div class="page-content">
        <h1>お問い合わせ</h1>
        <p>ご質問やご意見をお聞かせください</p>
        <form onSubmit={handleSubmit} class="contact-form">
          <div class="form-group">
            <label for="name">お名前</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onInput={handleChange}
              required
              placeholder="山田 太郎"
            />
          </div>
          <div class="form-group">
            <label for="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onInput={handleChange}
              required
              placeholder="example@email.com"
            />
          </div>
          <div class="form-group">
            <label for="message">メッセージ</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onInput={handleChange}
              required
              rows={5}
              placeholder="お問い合わせ内容をご記入ください"
            />
          </div>
          <button type="submit" class="submit-button">
            送信する
          </button>
        </form>
      </div>
    </div>
  );
}

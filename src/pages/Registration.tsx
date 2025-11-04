import { useState } from "preact/hooks";
import "../app.css";
import "./Page.css";

interface FormData {
  lastName: string;
  firstName: string;
  email: string;
  password: string;
  confirmPassword: string;
  birthDate: string;
  gender: string;
  agreeToTerms: boolean;
}

export function Registration() {
  const [formData, setFormData] = useState<FormData>({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthDate: "",
    gender: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: Event) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    const name = target.name as keyof FormData;
    const value =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : target.value;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // エラーをクリア
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.lastName.trim()) {
      newErrors.lastName = "姓を入力してください";
    }

    if (!formData.firstName.trim()) {
      newErrors.firstName = "名を入力してください";
    }

    if (!formData.email.trim()) {
      newErrors.email = "メールアドレスを入力してください";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "有効なメールアドレスを入力してください";
    }

    if (!formData.password) {
      newErrors.password = "パスワードを入力してください";
    } else if (formData.password.length < 8) {
      newErrors.password = "パスワードは8文字以上で入力してください";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "パスワードが一致しません";
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "利用規約に同意してください";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    if (validateForm()) {
      // モックなので、実際のAPI呼び出しは行わず、コンソールに出力
      console.log("登録データ:", formData);
      setIsSubmitted(true);

      // 3秒後にリセット
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          lastName: "",
          firstName: "",
          email: "",
          password: "",
          confirmPassword: "",
          birthDate: "",
          gender: "",
          agreeToTerms: false,
        });
      }, 3000);
    }
  };

  return (
    <div class="registration-container">
      <div class="registration-card">
        <h1>新規登録</h1>
        <p class="subtitle">アカウントを作成して始めましょう</p>

        {isSubmitted ? (
          <div class="success-message">
            <p>✓ 登録が完了しました！</p>
            <p class="success-note">（これはモック画面です）</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} class="registration-form">
            <div class="form-row">
              <div class="form-group">
                <label for="lastName">
                  姓 <span class="required">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onInput={handleChange}
                  class={errors.lastName ? "error" : ""}
                  placeholder="山田"
                />
                {errors.lastName && (
                  <span class="error-message">{errors.lastName}</span>
                )}
              </div>

              <div class="form-group">
                <label for="firstName">
                  名 <span class="required">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onInput={handleChange}
                  class={errors.firstName ? "error" : ""}
                  placeholder="太郎"
                />
                {errors.firstName && (
                  <span class="error-message">{errors.firstName}</span>
                )}
              </div>
            </div>

            <div class="form-group">
              <label for="email">
                メールアドレス <span class="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onInput={handleChange}
                class={errors.email ? "error" : ""}
                placeholder="example@email.com"
              />
              {errors.email && (
                <span class="error-message">{errors.email}</span>
              )}
            </div>

            <div class="form-group">
              <label for="password">
                パスワード <span class="required">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onInput={handleChange}
                class={errors.password ? "error" : ""}
                placeholder="8文字以上"
              />
              {errors.password && (
                <span class="error-message">{errors.password}</span>
              )}
            </div>

            <div class="form-group">
              <label for="confirmPassword">
                パスワード（確認） <span class="required">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onInput={handleChange}
                class={errors.confirmPassword ? "error" : ""}
                placeholder="パスワードを再入力"
              />
              {errors.confirmPassword && (
                <span class="error-message">{errors.confirmPassword}</span>
              )}
            </div>

            <div class="form-row">
              <div class="form-group">
                <label for="birthDate">生年月日</label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                />
              </div>

              <div class="form-group">
                <label for="gender">性別</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">選択してください</option>
                  <option value="male">男性</option>
                  <option value="female">女性</option>
                  <option value="other">その他</option>
                  <option value="prefer-not-to-say">回答しない</option>
                </select>
              </div>
            </div>

            <div class="form-group checkbox-group">
              <label class="checkbox-label">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  class={errors.agreeToTerms ? "error" : ""}
                />
                <span>
                  <a href="#" target="_blank">
                    利用規約
                  </a>
                  および
                  <a href="#" target="_blank">
                    プライバシーポリシー
                  </a>
                  に同意します <span class="required">*</span>
                </span>
              </label>
              {errors.agreeToTerms && (
                <span class="error-message">{errors.agreeToTerms}</span>
              )}
            </div>

            <button type="submit" class="submit-button">
              登録する
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

import { useState } from "preact/hooks";

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
    <div class="min-h-[calc(100vh-80px)] w-full flex items-center justify-center p-8 bg-gradient-to-br from-gradient-start to-gradient-end">
      <div class="bg-white/95 dark:bg-[rgba(26,26,26,0.95)] rounded-2xl shadow-2xl p-12 w-full max-w-[600px] backdrop-blur-sm md:p-8 md:px-6">
        <h1 class="m-0 mb-2 text-3xl text-gray-900 dark:text-white text-center md:text-3xl">
          新規登録
        </h1>
        <p class="text-center text-gray-600 dark:text-gray-300 mb-8 text-sm">
          アカウントを作成して始めましょう
        </p>

        {isSubmitted ? (
          <div class="text-center p-8">
            <p class="text-xl text-green-700 dark:text-green-400 my-2 font-semibold">
              ✓ 登録が完了しました！
            </p>
            <p class="text-sm text-gray-600 dark:text-gray-400 font-normal">
              （これはモック画面です）
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} class="flex flex-col gap-6">
            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
              <div class="flex flex-col gap-2">
                <label for="lastName" class="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                  姓 <span class="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onInput={handleChange}
                  class={`px-3 py-3 border-2 rounded-lg text-base transition-all bg-white dark:bg-[#2a2a2a] dark:border-gray-600 dark:text-white font-inherit ${
                    errors.lastName
                      ? "border-error focus:border-error focus:ring-2 focus:ring-error/10"
                      : "border-gray-300 dark:border-gray-600 focus:outline-none focus:border-gradient-start focus:ring-2 focus:ring-gradient-start/10"
                  }`}
                  placeholder="山田"
                />
                {errors.lastName && (
                  <span class="text-error text-sm -mt-1">{errors.lastName}</span>
                )}
              </div>

              <div class="flex flex-col gap-2">
                <label for="firstName" class="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                  名 <span class="text-error">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onInput={handleChange}
                  class={`px-3 py-3 border-2 rounded-lg text-base transition-all bg-white dark:bg-[#2a2a2a] dark:border-gray-600 dark:text-white font-inherit ${
                    errors.firstName
                      ? "border-error focus:border-error focus:ring-2 focus:ring-error/10"
                      : "border-gray-300 dark:border-gray-600 focus:outline-none focus:border-gradient-start focus:ring-2 focus:ring-gradient-start/10"
                  }`}
                  placeholder="太郎"
                />
                {errors.firstName && (
                  <span class="text-error text-sm -mt-1">{errors.firstName}</span>
                )}
              </div>
            </div>

            <div class="flex flex-col gap-2">
              <label for="email" class="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                メールアドレス <span class="text-error">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onInput={handleChange}
                class={`px-3 py-3 border-2 rounded-lg text-base transition-all bg-white dark:bg-[#2a2a2a] dark:border-gray-600 dark:text-white font-inherit ${
                  errors.email
                    ? "border-error focus:border-error focus:ring-2 focus:ring-error/10"
                    : "border-gray-300 dark:border-gray-600 focus:outline-none focus:border-gradient-start focus:ring-2 focus:ring-gradient-start/10"
                }`}
                placeholder="example@email.com"
              />
              {errors.email && (
                <span class="text-error text-sm -mt-1">{errors.email}</span>
              )}
            </div>

            <div class="flex flex-col gap-2">
              <label for="password" class="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                パスワード <span class="text-error">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onInput={handleChange}
                class={`px-3 py-3 border-2 rounded-lg text-base transition-all bg-white dark:bg-[#2a2a2a] dark:border-gray-600 dark:text-white font-inherit ${
                  errors.password
                    ? "border-error focus:border-error focus:ring-2 focus:ring-error/10"
                    : "border-gray-300 dark:border-gray-600 focus:outline-none focus:border-gradient-start focus:ring-2 focus:ring-gradient-start/10"
                }`}
                placeholder="8文字以上"
              />
              {errors.password && (
                <span class="text-error text-sm -mt-1">{errors.password}</span>
              )}
            </div>

            <div class="flex flex-col gap-2">
              <label for="confirmPassword" class="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                パスワード（確認） <span class="text-error">*</span>
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onInput={handleChange}
                class={`px-3 py-3 border-2 rounded-lg text-base transition-all bg-white dark:bg-[#2a2a2a] dark:border-gray-600 dark:text-white font-inherit ${
                  errors.confirmPassword
                    ? "border-error focus:border-error focus:ring-2 focus:ring-error/10"
                    : "border-gray-300 dark:border-gray-600 focus:outline-none focus:border-gradient-start focus:ring-2 focus:ring-gradient-start/10"
                }`}
                placeholder="パスワードを再入力"
              />
              {errors.confirmPassword && (
                <span class="text-error text-sm -mt-1">{errors.confirmPassword}</span>
              )}
            </div>

            <div class="grid grid-cols-2 gap-4 md:grid-cols-1">
              <div class="flex flex-col gap-2">
                <label for="birthDate" class="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                  生年月日
                </label>
                <input
                  type="date"
                  id="birthDate"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  class="px-3 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-base transition-all bg-white dark:bg-[#2a2a2a] dark:text-white font-inherit focus:outline-none focus:border-gradient-start focus:ring-2 focus:ring-gradient-start/10"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label for="gender" class="font-semibold text-gray-800 dark:text-gray-200 text-sm">
                  性別
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  class="px-3 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-base transition-all bg-white dark:bg-[#2a2a2a] dark:text-white font-inherit focus:outline-none focus:border-gradient-start focus:ring-2 focus:ring-gradient-start/10"
                >
                  <option value="">選択してください</option>
                  <option value="male">男性</option>
                  <option value="female">女性</option>
                  <option value="other">その他</option>
                  <option value="prefer-not-to-say">回答しない</option>
                </select>
              </div>
            </div>

            <div class="flex flex-col gap-2 mt-2">
              <label class="flex items-start gap-3 cursor-pointer font-normal">
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  class={`mt-1 w-[18px] h-[18px] cursor-pointer accent-gradient-start ${
                    errors.agreeToTerms ? "border-error" : ""
                  }`}
                />
                <span class="flex-1 leading-relaxed text-gray-800 dark:text-gray-200">
                  <a href="#" target="_blank" class="text-gradient-start no-underline font-semibold hover:underline">
                    利用規約
                  </a>
                  および
                  <a href="#" target="_blank" class="text-gradient-start no-underline font-semibold hover:underline">
                    プライバシーポリシー
                  </a>
                  に同意します <span class="text-error">*</span>
                </span>
              </label>
              {errors.agreeToTerms && (
                <span class="text-error text-sm -mt-1">{errors.agreeToTerms}</span>
              )}
            </div>

            <button
              type="submit"
              class="py-4 bg-gradient-to-r from-gradient-start to-gradient-end text-white border-none rounded-lg text-base font-semibold cursor-pointer transition-all mt-2 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
            >
              登録する
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

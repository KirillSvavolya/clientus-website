# Настройка EmailJS для Клиентус

## 🚀 Быстрая настройка (5 минут)

### 1. Регистрация EmailJS
1. Перейди на [emailjs.com](https://www.emailjs.com/)
2. Создай аккаунт (бесплатно до 200 писем/месяц)
3. Подтверди email

### 2. Подключение Gmail
1. В панели EmailJS → **Email Services** → **Add Service**
2. Выбери **Gmail**
3. Авторизуйся через Google аккаунт (kirill.svavolia@gmail.com)
4. Скопируй **Service ID** (например: `service_abc123`)

### 3. Создание шаблона письма
1. **Email Templates** → **Create New Template**
2. Создай шаблон с таким содержимым:

**Subject:** `Новая заявка на Клиентус от {{telegram_username}}`

**Content:**
```
Новая заявка на подключение Клиентуса!

Telegram пользователя: {{telegram_username}}

Вопрос от пользователя:
{{user_question}}

---
Отправлено с сайта Клиентус
Время: {{current_date}}
```

3. Скопируй **Template ID** (например: `template_xyz789`)

### 4. Получение Public Key
1. **Account** → **General**
2. Скопируй **Public Key** (например: `pk_abc123xyz`)

### 5. Обновление кода
В файле `index.html` замени:
```javascript
emailjs.init("YOUR_PUBLIC_KEY"); // Замени на свой Public Key
```

В файле `script.js` замени:
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

### 6. Тестирование
1. Деплой на Vercel
2. Заполни форму на сайте
3. Проверь почту kirill.svavolia@gmail.com

## 📧 Пример настроенного письма

**От:** noreply@emailjs.com  
**Кому:** kirill.svavolia@gmail.com  
**Тема:** Новая заявка на Клиентус от @username

**Содержимое:**
```
Новая заявка на подключение Клиентуса!

Telegram пользователя: @username

Вопрос от пользователя:
Когда будет готов бот?

---
Отправлено с сайта Клиентус
```

## 🔧 Настройки безопасности

EmailJS автоматически:
- ✅ Защищает от спама
- ✅ Скрывает API ключи
- ✅ Работает только с твоего домена
- ✅ Бесплатно до 200 писем/месяц

## 🚨 Важно
После настройки удали этот файл из репозитория:
```bash
git rm EMAILJS_SETUP.md
git commit -m "Remove setup instructions"
```
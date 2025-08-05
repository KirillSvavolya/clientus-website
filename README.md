# Клиентус - Landing Page

Landing page for Clientus CRM - a Telegram bot for self-employed professionals.

## Overview

**Клиентус** is a CRM system for self-employed professionals (tutors, trainers, consultants) that works entirely through Telegram. It helps manage clients, schedule lessons, track payments, and generate reports using natural language processing.

## Features

- 📱 **Simple Landing Page** - Clean, responsive design
- 🎯 **Interactive Demo** - Try bot commands directly on the website
- 📊 **Google Analytics** - Track user engagement
- 🇷🇺 **Russian Language** - Fully localized for Russian market
- 📧 **Email Collection** - Collect beta user emails

## Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Analytics**: Google Analytics 4
- **Hosting**: Netlify/Vercel (recommended)

## Setup

1. Clone the repository:
```bash
git clone https://github.com/your-username/clientus-website.git
cd clientus-website
```

2. Update Google Analytics ID in `index.html`:
```html
gtag('config', 'YOUR_GA_MEASUREMENT_ID');
```

3. Deploy to your hosting platform

## Demo Commands

The interactive demo includes these sample commands:
- "Добавить клиента" - Add new client
- "Кто должен" - Check client debts  
- "Доходы за месяц" - Monthly income report
- "Урок с Анной завтра 16:00" - Schedule lesson
- "Петр заплатил 3000" - Record payment
- "Расписание на завтра" - Get schedule
- "Помощь" - Get help

## Customization

### Colors
Main brand colors are defined in CSS:
- Primary: `#667eea` to `#764ba2` (gradient)
- Success: `#27ae60`
- Error: `#e74c3c`

### Content
Update content in `index.html`:
- Team member information
- Pricing details
- Contact information

## Deployment

### Netlify
1. Connect your GitHub repository
2. Build command: (none needed)
3. Publish directory: `/`

### Vercel
1. Import GitHub repository
2. Framework: Other
3. Build command: (none needed)

## Analytics Events

The site tracks these custom events:
- `demo_viewed` - When user clicks demo button
- `subscription_interest` - When user toggles subscription form
- `subscription_attempt` - When user submits email
- `demo_command_clicked` - When user clicks demo commands

## License

This project is licensed under the MIT License.

## Contact

For questions about this project:
- Email: kirill.svavolia@gmail.com
- Telegram: [@your_username]

---

Part of the Клиентус CRM project for self-employed professionals.
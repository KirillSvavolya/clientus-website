// Demo responses for different commands
const demoResponses = {
    'Добавить клиента': 'Отлично! Как зовут нового клиента? Расскажите о его целях и контактах.',
    'Кто должен': 'Сейчас проверю... У вас есть долги:\n\n• Анна - 2,500₽ за урок 28 июля\n• Михаил - 4,000₽ за 2 занятия\n\nОтправить напоминания?',
    'Доходы за месяц': 'Ваши доходы за июль:\n\n💰 Общий доход: 85,500₽\n📊 Проведено уроков: 34\n👥 Активных клиентов: 12\n📈 Рост к июню: +15%',
    'Урок с Анной завтра 16:00': 'Записал урок с Анной на завтра (6 августа) в 16:00. Напомнить за час до занятия?',
    'Петр заплатил 3000': 'Отлично! Записал оплату от Петра 3,000₽. Его баланс обновлен. Долгов больше нет! 🎉',
    'Расписание на завтра': 'Ваше расписание на завтра (6 августа):\n\n10:00 - Математика с Мариной\n14:00 - Английский с Дмитрием\n16:00 - Физика с Анной\n\nВсего: 3 урока',
    'Помощь': 'Я помогаю управлять вашим бизнесом! Могу:\n\n✅ Вести базу клиентов\n✅ Планировать занятия\n✅ Отслеживать оплаты\n✅ Напоминать о важном\n✅ Генерировать отчёты\n\nПросто говорите со мной естественным языком!'
};

let messageCounter = 0;

function sendDemoMessage(command) {
    const chatMessages = document.getElementById('chatMessages');
    
    // Add user message
    addMessage(command, 'user');
    
    // Add bot response after a delay
    setTimeout(() => {
        const response = demoResponses[command] || 'Понял! Обрабатываю ваш запрос...';
        addMessage(response, 'bot');
    }, 1000);
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const now = new Date();
    const time = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
    
    messageDiv.innerHTML = `
        <div class="message-content">${text.replace(/\n/g, '<br>')}</div>
        <div class="message-time">${time}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function showDemo() {
    // Scroll to demo section
    document.querySelector('.demo-commands').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // Track demo interaction
    gtag('event', 'demo_viewed', {
        'event_category': 'engagement',
        'event_label': 'demo_section'
    });
}

function showOrderForm() {
    // Scroll to order form
    document.querySelector('.pricing').scrollIntoView({ 
        behavior: 'smooth' 
    });
    
    // Focus on telegram input
    setTimeout(() => {
        document.getElementById('telegramInput').focus();
    }, 500);
    
    // Track order form interaction
    gtag('event', 'order_form_viewed', {
        'event_category': 'conversion',
        'event_label': 'order_form_scrolled'
    });
}

function submitOrder() {
    const telegram = document.getElementById('telegramInput').value;
    const question = document.getElementById('questionInput').value;
    
    if (!telegram.trim()) {
        alert('Пожалуйста, укажите ваш Telegram ник');
        return;
    }
    
    // Basic telegram username validation
    if (!telegram.startsWith('@') && !telegram.includes('t.me/')) {
        alert('Пожалуйста, укажите ник в формате @username или ссылку t.me/username');
        return;
    }
    
    // Here you would normally send the data to your backend
    // For now, we'll just show a success message
    const message = question.trim() 
        ? `Спасибо! Мы свяжемся с вами в Telegram ${telegram} и ответим на ваш вопрос.`
        : `Спасибо! Мы свяжемся с вами в Telegram ${telegram} для настройки Клиентуса.`;
    
    alert(message);
    
    // Track order submission
    gtag('event', 'order_submitted', {
        'event_category': 'conversion',
        'event_label': 'telegram_order',
        'value': 1
    });
    
    // Clear form
    document.getElementById('telegramInput').value = '';
    document.getElementById('questionInput').value = '';
    
    // Change button text
    const button = document.querySelector('.order-form .btn-primary');
    button.textContent = 'Заявка отправлена!';
    button.disabled = true;
    
    // Reset button after 3 seconds
    setTimeout(() => {
        button.textContent = 'Отправить заявку';
        button.disabled = false;
    }, 3000);
}

// Track demo command clicks
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('command-btn')) {
        gtag('event', 'demo_command_clicked', {
            'event_category': 'engagement',
            'event_label': e.target.textContent
        });
    }
});

// Initialize demo with welcome message
document.addEventListener('DOMContentLoaded', function() {
    // Add some initial demo messages to make it look more realistic
    setTimeout(() => {
        addMessage('Попробуйте примеры выше, чтобы увидеть, как я понимаю естественную речь! 👆', 'bot');
    }, 2000);
});
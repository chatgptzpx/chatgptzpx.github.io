document.addEventListener('DOMContentLoaded', function() {
    function showDiscordToast(e) {
        e.preventDefault();
        if (document.getElementById('discord-toast')) return;
        const toast = document.createElement('div');
        toast.id = 'discord-toast';
        toast.textContent = 'Discord: zpx.xyz скопировано!';
        toast.style.position = 'fixed';
        toast.style.top = '50%';
        toast.style.left = '50%';
        toast.style.transform = 'translate(-50%, -50%)';
        toast.style.background = 'linear-gradient(45deg, #5865F2, #23272A)';
        toast.style.color = '#fff';
        toast.style.padding = '32px 48px';
        toast.style.borderRadius = '32px';
        toast.style.fontSize = '1.5rem';
        toast.style.fontWeight = 'bold';
        toast.style.boxShadow = '0 8px 32px rgba(88,101,242,0.35)';
        toast.style.zIndex = '9999';
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.3s, transform 0.3s';
        toast.style.textAlign = 'center';
        toast.style.letterSpacing = '1px';
        document.body.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '1'; toast.style.transform = 'translate(-50%, -50%) scale(1.05)'; }, 10);
        navigator.clipboard.writeText('zpx.xyz');
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translate(-50%, -50%) scale(0.95)';
            setTimeout(() => toast.remove(), 300);
        }, 2000);
    }

    const project = document.querySelector('.project');
    const date = document.getElementById('release-date');
    const mysteryDate = document.getElementById('mystery-date');
    let intervalId = null;
    const symbols = ['?', '✦', '★', '•', '∗', '𓆩', '𓆪', '✧', '⍟', '✺'];

    function getMysticDate() {
        function randSym() { return symbols[Math.floor(Math.random() * symbols.length)]; }
        return (
            randSym() + randSym() + randSym() + '.' +
            randSym() + randSym() + '.' +
            randSym() + randSym()
        );
    }

    if (project && date && mysteryDate) {
        project.addEventListener('mouseenter', () => {
            date.style.opacity = '1';
            date.style.filter = 'blur(0)';
            if (!intervalId) {
                intervalId = setInterval(() => {
                    mysteryDate.textContent = getMysticDate();
                }, 200);
            }
        });
        project.addEventListener('mouseleave', () => {
            date.style.opacity = '0.5';
            date.style.filter = 'blur(2px)';
            mysteryDate.textContent = '??.??.??';
            if (intervalId) {
                clearInterval(intervalId);
                intervalId = null;
            }
        });
    }

    const deviceModal = document.getElementById('deviceModal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');

    if (!deviceModal || !modalTitle || !modalBody) {
        console.error('Modal elements not found!');
        return;
    }

    function showDeviceInfo(deviceType, e) {
        e.preventDefault();
        modalBody.innerHTML = '';

        if (deviceType === 'phone') {
            modalTitle.textContent = 'Характеристики Samsung Galaxy S24 FE';
            const specsHtml = `
                <p><strong>Сеть:</strong> GSM / HSPA / LTE / 5G</p>
                <p><strong>Дата анонса:</strong> 2024, Сентябрь 26</p>
                <p><strong>Статус:</strong> Доступен. Выпущен 2024, Октябрь 03</p>
                <br>
                <p><strong>Корпус:</strong></p>
                <p>Размеры: 162 x 77.3 x 8 mm</p>
                <p>Вес: 213 g</p>
                <p>Материалы: Стекло спереди (Gorilla Glass Victus+), стекло сзади (Gorilla Glass Victus+), алюминиевая рама</p>
                <p>SIM: Nano-SIM, Nano-SIM + Nano-SIM, Nano-SIM + eSIM, eSIM + eSIM</p>
                <p>Защита: IP68 пыле- и водонепроницаемость (погружение до 1.5m на 30 мин)</p>
                <br>
                <p><strong>Экран:</strong></p>
                <p>Тип: Dynamic AMOLED 2X, 120Hz, HDR10+, 1900 нит (пик)</p>
                <p>Размер: 6.7 дюйма, 110.2 cm² (~88.0% соотношение экрана к корпусу)</p>
                <p>Разрешение: 1080 x 2340 pixels, 19.5:9 ratio (~385 ppi плотность)</p>
                <p>Защита: Corning Gorilla Glass Victus+</p>
                <br>
                <p><strong>Платформа:</strong></p>
                <p>ОС: Android 14, до 7 основных обновлений Android, One UI 6.1</p>
                <p>Чипсет: Exynos 2400e (4 nm)</p>
                <p>CPU: 10-ядерный (1x3.1 GHz + 2x2.9 GHz + 3x2.6 GHz + 4x1.95 GHz)</p>
                <p>GPU: Xclipse 940</p>
                <br>
                <p><strong>Память:</strong></p>
                <p>Слот для карт: Нет</p>
                <p>Встроенная: 128GB 8GB RAM, 256GB 8GB RAM, 512GB 8GB RAM</p>
                <br>
                <p><strong>Основная камера:</strong></p>
                <p>Тройная: 50 MP (широкоугольная, f/1.8, OIS, PDAF), 8 MP (telephoto, f/2.4, OIS, 3x optical zoom), 12 MP (ultrawide, f/2.2)</p>
                <p>Особенности: LED flash, HDR, panorama</p>
                <p>Видео: 8K@30fps, 4K@30/60/120fps, 1080p@30/60/120/240fps</p>
                <br>
                <p><strong>Селфи камера:</strong></p>
                <p>Одинарная: 10 MP (wide, f/2.4)</p>
                <p>Видео: 4K@30/60fps, 1080p@30/60fps; gyro-EIS</p>
                <br>
                <p><strong>Звук:</strong></p>
                <p>Громкоговоритель: Yes, with stereo speakers</p>
                <p>Разъем 3.5мм: No</p>
                <br>
                <p><strong>Связь:</strong></p>
                <p>WLAN: Wi-Fi 802.11 a/b/g/n/ac/6e</p>
                <p>Bluetooth: 5.3, A2DP, LE</p>
                <p>Позиционирование: GPS, GLONASS, GALILEO, BDS</p>
                <p>NFC: Yes</p>
                <p>Радио: Unspecified</p>
                <p>USB: USB Type-C 3.2, OTG</p>
                <br>
                <p><strong>Особенности:</strong></p>
                <p>Датчики: Fingerprint (under display, optical), accelerometer, gyro, compass</p>
                <p>Virtual proximity sensing</p>
                <p>Samsung DeX, Circle to Search</p>
                 <br>
                <p><strong>Батарея:</strong></p>
                <p>Тип: 4700 mAh</p>
                <p>Зарядка: 25W wired (50% in 30 min), 15W wireless (Qi/PMA), Reverse wireless</p>
                 <br>
                <p><strong>Прочее:</strong></p>
                <p>Цвета: Blue, Graphite, Gray, Mint, Yellow</p>
                <p>Модели: SM-S721B, SM-S721B/DS, SM-S721U1, SM-S721U, SM-S721W, SM-S7210, SM-S721N</p>
                 <br>
                <p><strong>Тесты:</strong></p>
                <p>Производительность (AnTuTu): 1548896 (v10)</p>
                <p>Производительность (GeekBench): 6299 (v6)</p>
                <p>Производительность (3DMark): 3889 (Wild Life Extreme)</p>
                <p>Дисплей: 1372 nits max brightness (advertised) 1372 nits (HBM) 1372 nits (Peak) (measured)</p>
                <p>Громкоговоритель: -24.6 LUFS (Very good)</p>
                <p>Батарея (активное использование): 11:48h</p>
            `;
            modalBody.innerHTML = specsHtml;

        } else if (deviceType === 'laptop') {
            modalTitle.textContent = 'Характеристики Lenovo 81V5';
            const specsHtml = `
                <p><strong>Тип продукта:</strong> Ноутбук</p>
                <p><strong>Операционная система:</strong> Windows 10 Pro 64-bit Edition</p>
                <br>
                <p><strong>Процессор:</strong></p>
                <p>CPU: AMD Ryzen 5 3500U / 2.1 GHz</p>
                <p>Максимальная частота: 3.7 GHz</p>
                <p>Количество ядер: Quad-Core</p>
                <p>Кэш: L3 - 4 MB</p>
                <p>Особенности: Integrated memory controller</p>
                <br>
                <p><strong>Оперативная память:</strong></p>
                <p>RAM: 8 GB (1 x 4 GB + 4 GB (soldered))</p>
                <p>Максимальный объем: 16 GB</p>
                <p>Технология: DDR4 SDRAM</p>
                <p>Частота: 2400 MHz</p>
                <p>Форм-фактор: SO-DIMM 260-pin</p>
                <p>Слоты: 1 (0 свободных)</p>
                <br>
                <p><strong>Накопитель:</strong></p>
                <p>Основной: 256 GB SSD (M.2 2242) PCIe - NVM Express (NVMe)</p>
                <p>Оптический привод: DVD-Writer - tray</p>
                <br>
                <p><strong>Дисплей:</strong></p>
                <p>Тип: 15.6\" - TN</p>
                <p>Подсветка: LED backlight</p>
                <p>Разрешение: 1920 x 1080 (Full HD)</p>
                <p>Соотношение сторон: 16:9</p>
                <p>Яркость: 220 cd/m²</p>
                <p>Особенности: Anti-glare</p>
                <br>
                <p><strong>Графика:</strong></p>
                <p>Процессор: AMD Radeon Vega 8</p>
                <br>
                <p><strong>Камера:</strong></p>
                <p>Разрешение: 720p</p>
                <p>Особенности: Privacy shutter</p>
                <br>
                <p><strong>Звук:</strong></p>
                <p>Стерео динамики, микрофон</p>
                <p>Стандарты: High Definition Audio, Dolby Audio</p>
                <br>
                <p><strong>Устройства ввода:</strong></p>
                <p>Клавиатура: Nordic layout, с цифровым блоком</p>
                <p>Тачпад: Multi-touch</p>
                <br>
                <p><strong>Сеть:</strong></p>
                <p>Wi-Fi: 802.11a/b/g/n/ac</p>
                <p>Bluetooth: 4.1</p>
                <p>Ethernet: Gigabit</p>
                <br>
                <p><strong>Батарея:</strong></p>
                <p>Тип: Lithium Ion</p>
                <p>Емкость: 36 Wh</p>
                <p>Время работы: До 5 часов</p>
                <p>Блок питания: 65 Watt</p>
                <br>
                <p><strong>Порты:</strong></p>
                <p>2 x USB 3.1 Gen 1</p>
                <p>LAN</p>
                <p>HDMI</p>
                <p>Комбинированный разъем для наушников/микрофона</p>
                <br>
                <p><strong>Корпус:</strong></p>
                <p>Цвет: Iron grey</p>
                <p>Материал: Polycarbonate ABS</p>
                <p>Размеры: 36.3 x 25.4 x 2.29 см</p>
                <p>Вес: 2.2 кг</p>
                <br>
                <p><strong>Безопасность:</strong></p>
                <p>TPM 2.0 Security Chip</p>
                <p>Пароли: Administrator, hard drive, power-on</p>
                <p>Слот безопасности: Kensington security slot</p>
                <br>
                <p><strong>Гарантия:</strong></p>
                <p>Ограниченная гарантия - 1 год</p>
            `;
            modalBody.innerHTML = specsHtml;
        } else if (deviceType === 'redmi8a') {
            modalTitle.textContent = 'Характеристики Redmi 8A';
            const specsHtml = `
                <p><strong>Сеть:</strong> GSM / HSPA / LTE</p>
                <p><strong>Дата анонса:</strong> 2019, Сентябрь 25</p>
                <p><strong>Статус:</strong> Снят с производства</p>
                <br>
                <p><strong>Корпус:</strong></p>
                <p>Размеры: 156.5 x 75.4 x 9.4 mm</p>
                <p>Вес: 188 g</p>
                <p>Материалы: Стекло спереди (Gorilla Glass 5), пластиковая задняя панель, пластиковая рама</p>
                <p>SIM: Nano-SIM + Nano-SIM</p>
                <p>Защита: Водоотталкивающее покрытие</p>
                <br>
                <p><strong>Экран:</strong></p>
                <p>Тип: IPS LCD, 400 нит (тип.)</p>
                <p>Размер: 6.22 дюйма, 96.6 cm² (~81.8% соотношение экрана к корпусу)</p>
                <p>Разрешение: 720 x 1520 пикселей, 19:9 (~270 ppi)</p>
                <p>Защита: Corning Gorilla Glass 5</p>
                <br>
                <p><strong>Платформа:</strong></p>
                <p>ОС: Android 9.0 (Pie), обновляемый до Android 10, MIUI 12</p>
                <p>Чипсет: Qualcomm SDM439 Snapdragon 439 (12 nm)</p>
                <p>CPU: 8-ядерный (4x1.95 GHz Cortex-A53 & 4x1.45 GHz Cortex A53)</p>
                <p>GPU: Adreno 505</p>
                <br>
                <p><strong>Память:</strong></p>
                <p>Слот для карт: microSDXC (отдельный слот)</p>
                <p>Встроенная: 32GB 2GB RAM, 32GB 3GB RAM, 64GB 4GB RAM</p>
                <p>Тип: eMMC 5.1</p>
                <br>
                <p><strong>Основная камера:</strong></p>
                <p>Одинарная: 12 MP, f/1.8, (широкоугольная), 1/2.55\", 1.4µm, dual pixel PDAF</p>
                <p>Особенности: LED вспышка, HDR, панорама</p>
                <p>Видео: 1080p@30fps</p>
                <br>
                <p><strong>Селфи камера:</strong></p>
                <p>Одинарная: 8 MP, f/2.0, 1/4.0\", 1.12µm</p>
                <p>Особенности: HDR</p>
                <p>Видео: 1080p@30fps</p>
                <br>
                <p><strong>Звук:</strong></p>
                <p>Громкоговоритель: Да</p>
                <p>Разъем 3.5мм: Да</p>
                <br>
                <p><strong>Связь:</strong></p>
                <p>WLAN: Wi-Fi 802.11 b/g/n, Wi-Fi Direct</p>
                <p>Bluetooth: 4.2, A2DP, LE</p>
                <p>Позиционирование: GPS, GLONASS, BDS</p>
                <p>NFC: Нет</p>
                <p>Радио: FM Radio, встроенная антенна</p>
                <p>USB: USB Type-C 2.0, OTG</p>
                <br>
                <p><strong>Особенности:</strong></p>
                <p>Датчики: Акселерометр, приближения, компас</p>
                <br>
                <p><strong>Батарея:</strong></p>
                <p>Тип: Li-Po 5000 mAh, несъемная</p>
                <p>Зарядка: 18W проводная</p>
                <br>
                <p><strong>Прочее:</strong></p>
                <p>Цвета: Midnight Black, Ocean Blue, Sunset Red</p>
                <p>Модели: MZB8458IN, M1908C3KG, M1908C3KH</p>
                <p>SAR: 0.48 W/kg (голова) 1.07 W/kg (тело)</p>
                <p>SAR EU: 0.23 W/kg (голова) 1.48 W/kg (тело)</p>
                <p>Цена: Около 120 EUR</p>
                <br>
                <p><strong>Тесты:</strong></p>
                <p>Производительность (AnTuTu): 89901 (v8)</p>
                <p>Производительность (GeekBench): 3030 (v4.4)</p>
                <p>GFXBench: 7fps (ES 3.1 onscreen)</p>
            `;
            modalBody.innerHTML = specsHtml;
        } else if (deviceType === 'lenovotabp11') {
            modalTitle.textContent = 'Характеристики Lenovo Tab P11';
            const specsHtml = `
                <p><strong>Сеть:</strong> GSM / HSPA / LTE</p>
                <p><strong>Дата анонса:</strong> 2021, Январь 07</p>
                <p><strong>Статус:</strong> Доступен. Выпущен 2021, Февраль 10</p>
                <br>
                <p><strong>Корпус:</strong></p>
                <p>Размеры: 258.4 x 163 x 7.5 mm</p>
                <p>Вес: 490 g</p>
                <p>SIM: Nano-SIM (только для сотовой модели)</p>
                <p>Особенности: Поддержка стилуса</p>
                <br>
                <p><strong>Экран:</strong></p>
                <p>Тип: IPS LCD, 400 нит (тип.)</p>
                <p>Размер: 11.0 дюймов, 344.4 cm² (~81.8% соотношение экрана к корпусу)</p>
                <p>Разрешение: 1200 x 2000 пикселей, 5:3 (~212 ppi)</p>
                <br>
                <p><strong>Платформа:</strong></p>
                <p>ОС: Android 10</p>
                <p>Чипшет: Qualcomm SM6115 Snapdragon 662 (11 nm)</p>
                <p>CPU: 8-ядерный (4x2.0 GHz Kryo 260 Gold & 4x1.8 GHz Kryo 260 Silver)</p>
                <p>GPU: Adreno 610</p>
                <br>
                <p><strong>Память:</strong></p>
                <p>Слот для карт: microSDXC (отдельный слот)</p>
                <p>Встроенная: 64GB 4GB RAM, 128GB 4GB RAM, 128GB 6GB RAM</p>
                <br>
                <p><strong>Основная камера:</strong></p>
                <p>Одинарная: 13 MP, (широкоугольная), AF</p>
                <p>Особенности: LED вспышка</p>
                <p>Видео: 1080p@30fps</p>
                <br>
                <p><strong>Селфи камера:</strong></p>
                <p>Одинарная: 8 MP, (широкоугольная)</p>
                <p>Видео: 1080p@30fps</p>
                <br>
                <p><strong>Звук:</strong></p>
                <p>Громкоговоритель: Да, стерео (4 динамика)</p>
                <p>Разъем 3.5мм: Нет</p>
                <br>
                <p><strong>Связь:</strong></p>
                <p>WLAN: Wi-Fi 802.11 a/b/g/n/ac/6, двухдиапазонный, Wi-Fi Direct</p>
                <p>Bluetooth: 5.1, A2DP, LE</p>
                <p>Позиционирование: GPS, GLONASS, BDS (только для сотовой модели)</p>
                <p>NFC: Нет</p>
                <p>Радио: FM radio</p>
                <p>USB: USB Type-C 2.0</p>
                <br>
                <p><strong>Особенности:</strong></p>
                <p>Датчики: Акселерометр, гироскоп, приближения</p>
                <br>
                <p><strong>Батарея:</strong></p>
                <p>Тип: Li-Po 7700 mAh</p>
                <p>Зарядка: 20W проводная</p>
                <br>
                <p><strong>Прочее:</strong></p>
                <p>Цвета: Slate Grey, Platinum Grey</p>
                <p>Модели: TB-J606F</p>
                <p>Цена: Около 200 EUR</p>
            `;
            modalBody.innerHTML = specsHtml;
        }

        deviceModal.style.display = 'block';
    }

    function hideModal() {
        deviceModal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == deviceModal) {
            hideModal();
        }
    }

    
    document.querySelectorAll('.more-info-button').forEach(button => {
        button.addEventListener('click', function(event) {
            const deviceType = this.getAttribute('data-device-type');
            showDeviceInfo(deviceType, event);
        });
    });

    const discordLink = document.querySelector('.social-link.discord');
    if (discordLink) {
        discordLink.addEventListener('click', showDiscordToast);
    }

    const closeButton = deviceModal.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', hideModal);
    }
}); 
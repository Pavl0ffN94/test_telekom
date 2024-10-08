1. Сверстать окошко чата по макету в Figma.
2. Учесть все пункты из ТЗ ниже.
3. Чат должен открываться и выглядеть корректно на всех устройствах (адаптация под все экраны).
4. Нельзя использовать сторонние библиотеки, кроме указанных в пункте **“Технологии”.**
5. В данном задании верстка не менее важна, чем логика, поэтому обязательно нужно все сверстать максимально приближено к макету.

### Использовать

- **Zustand** - стейт менеджер
- **React + Next.JS** - фреймворк
- **Dayjs** - работа с датами
- **ANTD ICONS** - библиотека иконок
- **AND DESIGN** - библиотека UI элементов

### Макет

## **Техническое Задание**

- Можно использовать шрифт **Jost** из **Google Fonts**, так как шрифт из макета платный.
- При перезагрузке страницы сообщения не должны пропадать (исп. localStorage)
- Header: только верстка

### Окно чата

- Дата в верхней части экрана (текущая дата в формате **8/20/2020**)
- Сообщения текущего пользователя по правую сторону экрана
- Сообщения оппонента по левую сторону экрана
- Новые сообщения появляются внизу списка сообщений (сверху - старые, снизу - новые)
- На любое сообщение “**бот”** отвечает **Hello World!** (аватарка и имя любое, можно взять из фигмы), время на сообщении должно отображаться корректно, в указанном формате
- У **“бота”** на аватарке всегда отображается значок “В сети” (зеленый круг)
- На сообщении пользователя должно быть актуальное время отправки в формате из фигмы

### Сообщения

    - У пользователя должна быть возможность редактировать **свои** сообщения
        - **(добавить иконку карандаша под сообщением)**
    - У пользователя должна быть возможность удалять свои сообщения
        - **(добавить иконку корзины под сообщением)**

### Поле ввода

    - Отрисовать два состояния, default и focus (см дизайн фигмы)
    - По нажатию на кнопку Enter или кнопку Send (иконка самолетика)
    - кнопка ****@ является событием Upload, т.е. в чат можно загрузить картинку (**webp, png, jpg**) и отправить ее в чат, она должна отобразиться в окне чата, как сообщение (дизайн на усмотрение разработчика)
    - Кнопка Smile - хардкод

**Доп задание (необязательно к выполнению, но повысит ваши шансы на успешное прохождение)**

- Сделать анимацию отправки сообщения (например, по нажатию на кнопку “отправить” новое сообщение плавно появляется снизу списка), для анимации можно использовать framer-motion или react-spring.
- Любые улучшения, доработки или расширение функционала обязательно будут учтены.

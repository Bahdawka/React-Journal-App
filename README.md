# React Journal App / Додаток React Journal

## 🇺🇦 Українська версія

### Опис проекту

React Journal App - це веб-додаток для перегляду та управління статтями, побудований на React з використанням TypeScript. Додаток демонструє сучасні підходи до розробки SPA (Single Page Application) з використанням React Router для навігації та Axios для роботи з API.

### Основний функціонал

- 📖 **Перегляд статей**: Отримання списку статей з JSONPlaceholder API
- 🔍 **Детальний перегляд**: Перегляд окремої статті з повною інформацією
- 🔄 **Сортування**: Сортування статей за заголовком або ID (за зростанням/спаданням)
- 🧭 **Навігація**: SPA навігація з React Router
- 📱 **Адаптивний дизайн**: Responsive інтерфейс для різних пристроїв
- ⚡ **Швидкість**: Оптимізована робота з lazy loading та кешуванням
- 🔐 **Аутентифікація**: Заготовки сторінок для входу та реєстрації

### Структура проекту

```
src/
├── components/           # React компоненти
│   ├── Auth/            # Компоненти аутентифікації
│   │   ├── Login.tsx    # Сторінка входу
│   │   └── Registration.tsx # Сторінка реєстрації
│   ├── Common/          # Загальні компоненти
│   │   ├── Layout.tsx   # Основний макет
│   │   ├── Header.tsx   # Шапка сайту
│   │   ├── Footer.tsx   # Підвал сайту
│   │   ├── Main.tsx     # Основний контент
│   │   └── Menu.tsx     # Навігаційне меню
│   └── Pages/           # Сторінки додатку
│       ├── Home.tsx     # Головна сторінка
│       ├── Articles.tsx # Список статей
│       ├── SingleArticle.tsx # Окрема стаття
│       ├── About.tsx    # Про нас
│       ├── Contacts.tsx # Контакти
│       └── NotFound.tsx # 404 сторінка
├── hooks/               # Custom React hooks
│   └── useSortField.ts  # Hook для роботи з сортуванням
├── utils/               # Утиліти
│   ├── api.ts          # API функції
│   ├── generateTitle.ts # Генерація заголовків
│   └── isValidSortKey.ts # Валідація ключів сортування
├── types/               # TypeScript типи
│   └── Article.interface.ts # Інтерфейс статті
├── constants/           # Константи
│   └── index.ts        # API URL та ключі сортування
├── App.tsx             # Основний компонент
├── main.tsx            # Точка входу
├── index.css           # Глобальні стилі
└── vite-env.d.ts       # TypeScript декларації
```

### Ключові особливості реалізації

#### 1. Маршрутизація
- Використовується React Router v7 з `createBrowserRouter`
- Вкладені маршрути з Layout компонентом
- Динамічні маршрути для окремих статей
- 404 сторінка з автоматичним перенаправленням

#### 2. Управління станом
- Локальний стан компонентів з useState
- Custom hook `useSortField` для роботи з URL параметрами
- Обробка станів завантаження та помилок

#### 3. API інтеграція
- Асинхронні функції для роботи з API
- Обробка помилок з детальними повідомленнями
- Автоматична генерація slug для статей
- Підтримка сортування через URL параметри

### Як запустити проект

1. **Клонування репозиторію**
```bash
git clone <repository-url>
```

2. **Встановлення залежностей**
```bash
npm install
# або
yarn install
```

3. **Запуск в режимі розробки**
```bash
npm run dev
# або
yarn dev
```

4. **Відкрити в браузері**
```
http://localhost:5173
```

### Особливості використання

1. **Навігація**: Використовуйте меню для переходу між сторінками
2. **Сортування статей**: На сторінці Articles доступні кнопки сортування
3. **URL параметри**: Стан сортування зберігається в URL
4. **Детальний перегляд**: Клікніть на заголовок статті для детального перегляду

---

## 🇬🇧 English Version

### Project Description

React Journal App is a web application for viewing and managing articles, built with React using TypeScript. The application demonstrates modern approaches to SPA (Single Page Application) development using React Router for navigation and Axios for API interactions.

### Core Features

- 📖 **Article Viewing**: Fetching article lists from JSONPlaceholder API
- 🔍 **Detailed View**: Individual article view with complete information
- 🔄 **Sorting**: Sort articles by title or ID (ascending/descending)
- 🧭 **Navigation**: SPA navigation with React Router
- 📱 **Responsive Design**: Adaptive interface for different devices
- ⚡ **Performance**: Optimized with lazy loading and caching
- 🔐 **Authentication**: Login and registration page templates

### Project Structure

```
src/
├── components/           # React components
│   ├── Auth/            # Authentication components
│   │   ├── Login.tsx    # Login page
│   │   └── Registration.tsx # Registration page
│   ├── Common/          # Common components
│   │   ├── Layout.tsx   # Main layout
│   │   ├── Header.tsx   # Site header
│   │   ├── Footer.tsx   # Site footer
│   │   ├── Main.tsx     # Main content
│   │   └── Menu.tsx     # Navigation menu
│   └── Pages/           # Application pages
│       ├── Home.tsx     # Home page
│       ├── Articles.tsx # Articles list
│       ├── SingleArticle.tsx # Single article
│       ├── About.tsx    # About page
│       ├── Contacts.tsx # Contacts page
│       └── NotFound.tsx # 404 page
├── hooks/               # Custom React hooks
│   └── useSortField.ts  # Hook for sorting functionality
├── utils/               # Utilities
│   ├── api.ts          # API functions
│   ├── generateTitle.ts # Title generation
│   └── isValidSortKey.ts # Sort key validation
├── types/               # TypeScript types
│   └── Article.interface.ts # Article interface
├── constants/           # Constants
│   └── index.ts        # API URL and sort keys
├── App.tsx             # Main component
├── main.tsx            # Entry point
├── index.css           # Global styles
└── vite-env.d.ts       # TypeScript declarations
```

### Key Implementation Features

#### 1. Routing
- Uses React Router v7 with `createBrowserRouter`
- Nested routes with Layout component
- Dynamic routes for individual articles
- 404 page with automatic redirect

#### 2. State Management
- Component local state with useState
- Custom hook `useSortField` for URL parameters
- Loading and error state handling

#### 3. API Integration
- Asynchronous functions for API interactions
- Error handling with detailed messages
- Automatic slug generation for articles
- Sorting support through URL parameters

#### 4. TypeScript
- Strict typing for all components
- Interfaces for API responses
- Type guards for data validation

### How to Run the Project

1. **Clone the repository**
```bash
git clone <repository-url>
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Run in development mode**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Usage Features

1. **Navigation**: Use the menu to navigate between pages
2. **Article Sorting**: Sorting buttons available on Articles page
3. **URL Parameters**: Sorting state is preserved in URL
4. **Detailed View**: Click on article title for detailed view

### Development Notes
- The application uses modern React patterns with functional components and hooks
- TypeScript ensures type safety throughout the application
- Responsive design works on desktop and mobile devices
- Error boundaries handle API failures gracefully
- URL state management maintains user experience during navigation

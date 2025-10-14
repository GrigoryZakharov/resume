import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegramPlane, FaDownload } from 'react-icons/fa'




export default function App() {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className="flex h-screen">
      <aside class="pl-20 w-1/3 bg-[#343a40] text-white p-6 flex flex-col items-left">
        <div
          style={{ width: '300px', height: '300px', overflow: 'hidden', borderRadius: '50%' }}
        >
          <img
            src="src/assets/My_pic.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            alt="Мое фото"
          />
        </div>
        <h2 class="text-4xl font-bold mb-2">Григорий Захаров</h2>
        <p class="mb-4 text-gray-400">FullStack Developer</p>
        <div className="flex items-center spece-x-4 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <p className="text-gray-400">Ульяновск, Россия 🇷🇺</p>
        </div>
        <div><p class = "pb-4">Я не fullstack, я fullгалактика: фронт, бэк и звёзды кода</p></div>
        <div class="flex space-x-5">
          <a
            href="/Григорий Захаров.docx.pdf"
            download
            className="flex items-center bg-white-500 text-white px-4 py-1.5 rounded-md 
             hover:bg-red-600 transform hover:scale-105 
             transition duration-500 ease-in-out space-x-2"
          >
            <FaDownload className="w-4 h-4" />
            <span className="text-sm">Скачать резюме</span>
          </a>
          <a href="mailto:zakharov9933@gmail.com" className="pt-1 text-2xl hover:text-red-500 transform hover:scale-125 transition duration-300">
            <FaEnvelope />
          </a>
          <a href="http://github.com/GrigoryZakharov" className="pt-1 text-2xl hover:text-red-500 transform hover:scale-125 transition duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/grigory-zakharov-577561389/" className="pt-1 text-2xl hover:text-red-500 transform hover:scale-125 transition duration-300">
            <FaLinkedin />
          </a>
          <a href="https://t.me/ILoveTankiOnline" target="_blank" className="pt-1 text-2xl hover:text-red-500 transition duration-300 transform hover:scale-125">
            <FaTelegramPlane />
          </a>
        </div>
      </aside>
      <main class="w-2/3 bg-[#343a40] p-6 overflow-y-auto text-white ">
      <section class="mb-8">
        </section>
        <section class="mb-8">
          <h2 className="text-2xl font-bold text-white-500 mb-4 text-center">Stats</h2>
          <div className="max-w-md mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-6">
            <table className="w-full table-auto text-left">
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">Возраст</td>
                  <td className="py-2 text-gray-300">19</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">Года опыта</td>
                  <td className="py-2 text-gray-300">1+</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">Проектов</td>
                  <td className="py-2 text-gray-300">3+</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">Технологий</td>
                  <td className="py-2 text-gray-300">5+</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">Чашки кофе/день</td>
                  <td className="py-2 text-gray-300">3</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">GitHub репозитории</td>
                  <td className="py-2 text-gray-300">3+</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-white-500">Любимые фреймворки</td>
                  <td className="py-2 text-gray-300">React, Node, FastAPI</td>
                </tr>
                <tr>
                  <td className="py-2 font-semibold text-white-500">Faciet level</td>
                  <td className="py-2 text-gray-300">
                    <img src="/src/assets/faciet.png" alt="Фейсит" className="w-40 h-16 inline-block" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white-500 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#495057] text-white-500 p-4 rounded-lg shadow-2xl group hover:bg-red-800 transition duration-300">
              <h3 className="font-semibold mb-2 text-red-500 group-hover:text-white transition-colors duration-300">
                Languages & Frameworks
              </h3>
              <p className="text-white-500 group-hover:text-white transition-colors duration-300">Python, FastAPI, SQLAlchemy, Django, C++</p>
            </div>
            <div className="bg-[#495057] text-white-500 p-4 rounded-lg shadow-2xl group hover:bg-green-800 transition duration-300">
              <h3 className="font-semibold mb-2 text-green-500 group-hover:text-white transition-colors duration-300">Databases</h3>
              <p className="text-white-500 group-hover:text-white transition-colors duration-300">PostgreSQL, MySQL, SQLite</p>
            </div>
            <div className="bg-[#495057] text-white-500 p-4 rounded-lg shadow-2xl group hover:bg-blue-800 transition duration-300">
              <h3 className="font-semibold mb-2 text-blue-500 group-hover:text-white transition-colors duration-300">Tools & Technologies</h3>
              <p className="text-white-500 group-hover:text-white transition-colors duration-300">Git, Docker, Redis, Celery, AsyncIO, Unit Testing</p>
            </div>
            <div className="bg-[#495057] text-white-500 p-4 rounded-lg shadow-2xl group hover:bg-yellow-800 transition duration-300">
              <h3 className="font-semibold mb-2 text-yellow-500 group-hover:text-white transition-colors duration-300">Other</h3>
              <p className="text-white-500 group-hover:text-white transition-colors duration-300">REST API Design, JWT Authentication, CI/CD (basic), SPA, React Router</p>
            </div>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-2 text-center">Опыт работы</h2>
          <div className=" mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex items-start space-x-4">
              <img src="/src/assets/USU-logo.jpeg" alt="Company Logo" className="w-16 h-16 rounded-md object-cover" />

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white-500">Ulyanovsk State Technical University</h3>
                <p className="text-gray-400">Python Developer Стажировка</p>
                <p className="text-gray-400">Июнь 2025 - Июль 2025</p>
                
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center bg-white-500 text-white px-4 py-1.5 rounded-md 
             hover:bg-red-600 transform hover:scale-105 
             transition duration-500 ease-in-out space-x-2 mt-4">
                  Развернуть полностью
                </button>

                {isOpen && (
                  <div className="mt-4 text-gray-300">
                    <ul className="list-disc list-inside space-y-2">
                      <li>Разработка и поддержка веб-приложений с использованием Python и Django.</li>
                      <li>Создание RESTful API для интеграции с фронтенд-приложениями.</li>
                      <li>Оптимизация производительности приложений и базы данных.</li>
                      <li>Работа в команде с использованием Git для контроля версий.</li>
                      <li>Участие в планировании и оценке задач в рамках Agile-методологии.</li>
                    </ul>
                  </div>)}
              </div>
            </div>
          </div>
        </section>

        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-2 text-center">Образование</h2>
          <div className=" mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex items-start space-x-4">
              <img src="/src/assets/USU-logo.jpeg" alt="Company Logo" className="w-16 h-16 rounded-md object-cover" />

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white-500">Ulyanovsk State Technical University - Бакалавр</h3>
                <p className="text-gray-400">Математическое обеспечение и администрирование информационных систем</p>
                <p className="text-gray-400">Сенябрь 2024 - Июль 2028</p>
              </div>
            </div>
          </div>
        </section>
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-2 text-center">Проекты</h2>
          <div className=" mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex items-start space-x-4">
              <img src="/src/assets/weather-hub.png" alt="Company Logo" className="w-72 h-72 rounded-md object-cover" />

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white-500 pb-5">WeatherHub API</h3>
                <li className="pb-5">Создал масштабируемый API для получения и синхронизации погодных данных из внешних источников.</li> 
                <li className="pb-5">Настроил Celery и Redis для фоновых задач и улучшения производительности запросов.</li>
                <li className="pb-5">Реализовал эндпоинты для запросов по городам с сохранением данных в PostgreSQL.
Подготовил Docker и .env-конфигурации для удобного деплоя и тестирования.</li>
                <p className="pb-5">Python, FastAPI, PostgreSQL, SQLAlchemy, Redis, Celery</p>
                <a href="https://github.com/GrigoryZakharov/weatherhub" className="pt-1 text-2xl hover:text-red-500 transform hover:scale-125 transition duration-300">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className=" mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex items-start space-x-4">
              <img src="/src/assets/Blog-API.png" alt="Company Logo" className="w-72 h-72 rounded-md object-cover" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white-500 pb-5">Blog Platform</h3>
                <li className="pb-5">Реализовал полноценный fullstack блог с аутентификацией и авторизацией через JWT.</li> 
                <li className="pb-5">CRUD операции для постов и комментариев, функционал лайков/дизлайков.</li>
                <li className="pb-5">Настроил Alembic для миграций базы данных и Docker для backend, frontend и БД.</li>
                <li className="pb-5">SPA на React с React Router, интеграция с FastAPI через REST.</li>
                <p className="pb-5">Python, FastAPI, React, PostgreSQL, SQLAlchemy, JWT, Docker</p>
                <a href="https://github.com/GrigoryZakharov/Blog_API" className="pt-1 text-2xl hover:text-red-500 transform hover:scale-125 transition duration-300">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
          <div className=" mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex items-start space-x-4">

              <img src="/src/assets/todo-Api.png" alt="Company Logo" className="w-72 h-72 rounded-md object-cover" />
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white-500 pb-5">Todo APP</h3>
                <li className="pb-5">полноценное full-stack приложение для управления задачами.</li> 
                <li className="pb-5">Реализованы создание, чтение, обновление и удаление задач с фильтрацией и пагинацией.</li>
                <li className="pb-5">Frontend на React с TailwindCSS, backend на FastAPI с PostgreSQL и SQLAlchemy.</li>
                <li className="pb-5">Полностью dockerized для лёгкого развёртывания и тестирования через Pytest.</li>
                <p className="pb-5">Python 3.11, FastAPI, SQLAlchemy, Pydantic, PostgreSQL, React 18, TailwindCSS, Docker, Docker Compose, Pytest</p>
                <a href="https://github.com/GrigoryZakharov/todo_api" className="pt-1 text-2xl hover:text-red-500 transform hover:scale-125 transition duration-300">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

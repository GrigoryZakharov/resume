import { use, useState } from 'react'
import './App.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaTelegramPlane, FaDownload } from 'react-icons/fa'
import myPhoto from './assets/My_pic.jpg';
import faciet from './assets/faciet.png';
import todoApi from './assets/todo-Api.png';
import weather_hub from "./assets/weather-hub.png"
import USU from "./assets/USU-logo.jpeg"
import Blog_API from "./assets/Blog-API.png"
import resumeFile from './assets/1.docx.pdf'
import React, { useRef, useEffect } from "react";
import Pica from "pica";
import AOS from "aos";
import "aos/dist/aos.css";
import { useMediaQuery } from 'react-responsive';


function SharpImage({ src, width, height, alt, className }) {
  const [resizedSrc, setResizedSrc] = useState(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.crossOrigin = "anonymous";
    img.onload = async () => {
      const canvas = document.createElement("canvas");
      canvas.width = width * 2; 
      canvas.height = height * 2;

      const ctx = canvas.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";

      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        x,
        y,
        img.width * scale,
        img.height * scale
      );

      setResizedSrc(canvas.toDataURL("image/png"));
    };
  }, [src, width, height]);
  return (
    <img
      src={resizedSrc || src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ objectFit: "cover", display: "block" }}
    />
  );
}

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoaded] = useState(true);

  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

   useEffect(() => {
    const timer = setTimeout(() => setLoaded(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,  
      mirror: false,
      offset: 200,
    });
  }, []);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        AOS.refreshHard();
      }, 50);
    }
  }, [loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#343a40]">
        <div className="text-white text-2xl">Загрузка...</div>
      </div>
    );
  }

  return (
    <div className="md:flex md:h-screen">
      <aside className="md:pl-20 md:w-1/3 bg-[#343a40] text-white p-6 flex flex-col items-center ">
        <div className="text-center md:text-left" data-aos="fade-right" data-aos-delay="0">
          <div 
            style={{
              width: 300,
              height: 300,
              borderRadius: "50%",
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: isMobile ? "0 auto 20px" : "0 0 20px 0"
            }}
          >
            <SharpImage
              src={myPhoto}
              width={300}
              height={300} 
              className="block"
              alt="Мое фото"
            />
          </div>
          <h2 className="text-4xl font-bold mb-2">Григорий Захаров</h2>
          <p className="mb-4 text-gray-400">FullStack Developer</p>
          <div className="flex justify-center md:justify-start space-x-4 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
            <p className="text-gray-400">Ульяновск, Россия 🇷🇺</p>
          </div>
          <p className="pb-4 text-center">Я не fullstack, я fullгалактика: фронт, бэк и звёзды кода</p>
          <div className="flex space-x-5">
            <a
              href={resumeFile}
              download
              className="flex items-center bg-white-500 text-white px-4 py-1.5 rounded-md 
              hover:bg-red-600 transform hover:scale-105 
              transition duration-200 ease-in-out space-x-2"
            >
              <FaDownload className="w-4 h-4" />
              <span className="text-sm">Скачать резюме</span>
            </a>
            <a href="mailto:zakharov9933@gmail.com" className="pt-1 text-2xl hover:text-red-500 transform hover:scale-125 transition duration-200">
              <FaEnvelope />
            </a>
            <a href="http://github.com/GrigoryZakharov" className="pt-1 text-2xl hover:text-red-500 transform hover:scale-125 transition duration-200">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/grigory-zakharov-577561389/" className="pt-1 text-2xl hover:text-red-500 transform hover:scale-125 transition duration-200">
              <FaLinkedin />
            </a>
            <a href="https://t.me/ILoveTankiOnline" target="_blank" className="pt-1 text-2xl hover:text-red-500 transition duration-200 transform hover:scale-125">
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </aside>
      <main className="md:w-2/3 bg-[#343a40] p-6 overflow-y-auto text-white ">
        <section data-aos="fade-left"  data-aos-delay="300" className="mb-8">
          <h2 className="text-2xl font-bold text-white-500 mb-4 text-center">Stats</h2>
          <div className=" transform hover:scale-105 transition duration-300 max-w-md mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-6">
            <table className="w-full table-auto text-left">
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">Возраст</td>
                  <td className="py-2 text-gray-300">19</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-2 font-semibold text-white-500">Годы опыта</td>
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
              </tbody>
            </table>
          </div>
        </section>

        <section data-aos="fade-left" data-aos-delay="350" className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-white-500 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#495057] text-white-500 p-4 rounded-lg shadow-2xl group hover:bg-red-800 transition duration-300 transform hover:scale-105">
              <h3 className="font-semibold mb-2 text-red-500 group-hover:text-white transition-colors duration-300">
                Languages & Frameworks
              </h3>
              <p className="text-white-500 group-hover:text-white transition-colors duration-300 ">Python, FastAPI, SQLAlchemy, Django, C++</p>
            </div>
            <div className="bg-[#495057] text-white-500 p-4 rounded-lg shadow-2xl group hover:bg-green-800 transition duration-300 transform hover:scale-105">
              <h3 className="font-semibold mb-2 text-green-500 group-hover:text-white transition-colors duration-300">Databases</h3>
              <p className="text-white-500 group-hover:text-white transition-colors duration-300">PostgreSQL, MySQL, SQLite</p>
            </div>
            <div className="bg-[#495057] text-white-500 p-4 rounded-lg shadow-2xl group hover:bg-blue-800 transition duration-300 transform hover:scale-105">
              <h3 className="font-semibold mb-2 text-blue-500 group-hover:text-white transition-colors duration-300">Tools & Technologies</h3>
              <p className="text-white-500 group-hover:text-white transition-colors duration-300">Git, Docker, Redis, Celery, AsyncIO, Unit Testing</p>
            </div>
            <div className="bg-[#495057] text-white-500 p-4 rounded-lg shadow-2xl group hover:bg-yellow-800 transition duration-300 transform hover:scale-105">
              <h3 className="font-semibold mb-2 text-yellow-500 group-hover:text-white transition-colors duration-300">Other</h3>
              <p className="text-white-500 group-hover:text-white transition-colors duration-300">REST API Design, JWT Authentication, CI/CD (basic), SPA, React Router</p>
            </div>
          </div>
        </section>

        <section data-aos="fade-left" data-aos-delay="400" className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-center">Опыт работы</h2>
          <div className="mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex items-start space-x-4">
              <div style={{ width: 64, height: 64, borderRadius: "8px", overflow: "hidden" }}>
                <SharpImage src={USU} width={64} height={64} alt="USU Logo" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white-500">Ulyanovsk State Technical University</h3>
                <p className="text-gray-400">Python Developer Стажировка</p>
                <p className="text-gray-400">Июнь 2025 - Июль 2025</p>
                <button onClick={() => setIsOpen(!isOpen)} className="flex items-center bg-white-500 text-white px-4 py-1.5 rounded-md 
             hover:bg-red-600 transform hover:scale-105 transition duration-300 ease-in-out space-x-2 mt-4">
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
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-center">Образование</h2>
          <div className="mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex items-start space-x-4">
              <div style={{ width: 64, height: 64, borderRadius: "8px", overflow: "hidden" }}>
                <SharpImage src={USU} width={64} height={64} alt="USU Logo" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white-500">Ulyanovsk State Technical University - Бакалавр</h3>
                <p className="text-gray-400">Математическое обеспечение и администрирование информационных систем</p>
                <p className="text-gray-400">Сентябрь 2024 - Июль 2028</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2 text-center">Проекты</h2>

          <div className="mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row  items-start space-x-6">
              <div style={{ width: isMobile ? 300 : 200, height: 300, borderRadius: "12px", overflow: "hidden", margin: isMobile ? "0 auto 20px" : "0 0 20px 0" }}>
                <SharpImage src={weather_hub} width={isMobile ? 300 : 200} height={300} alt="WeatherHub Project" />
              </div>

              <div className="flex-1 pl-2">
                <h3 className="text-xl font-bold text-white pb-5">WeatherHub API</h3>
                <li className="pb-3">Создал масштабируемый API для получения и синхронизации погодных данных из внешних источников.</li>
                <li className="pb-3">Настроил Celery и Redis для фоновых задач и улучшения производительности запросов.</li>
                <li className="pb-3">Реализовал эндпоинты для запросов по городам с сохранением данных в PostgreSQL. Подготовил Docker и .env-конфигурации для удобного деплоя и тестирования.</li>
                <p className="pb-3 text-gray-300">Python, FastAPI, PostgreSQL, SQLAlchemy, Redis, Celery</p>
                <a
                  href="https://github.com/GrigoryZakharov/weatherhub"
                  className="pt-1 text-4xl hover:text-red-500 transform hover:scale-125 transition duration-300 inline-block"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>


          <div className="mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row items-start space-x-4">
              <div style={{ width: isMobile ? 300 : 200, height: 300, borderRadius: "12px", overflow: "hidden", margin: isMobile ? "0 auto 20px" : "0 0 20px 0" }}>
                <SharpImage src={Blog_API} width={isMobile ? 300 : 200} height={300} alt="WeatherHub Project" />
              </div>
              <div className="flex-1 pl-5">
                <h3 className="text-xl font-bold text-white-500 pb-5">Blog Platform</h3>
                <li className="pb-5">Реализовал полноценный fullstack блог с аутентификацией и авторизацией через JWT.</li> 
                <li className="pb-5">CRUD операции для постов и комментариев, функционал лайков/дизлайков.</li>
                <li className="pb-5">Настроил Alembic для миграций базы данных и Docker для backend, frontend и БД.</li>
                <li className="pb-5">SPA на React с React Router, интеграция с FastAPI через REST.</li>
                <p className="pb-5">Python, FastAPI, React, PostgreSQL, SQLAlchemy, JWT, Docker</p>
                <a href="https://github.com/GrigoryZakharov/Blog_API" 
                className="pt-1 text-4xl hover:text-red-500 transform hover:scale-125 transition duration-300 inline-block">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>

          <div className="mx-auto bg-[#495057] text-white rounded-lg shadow-lg p-4 mb-6">
            <div className="flex flex-col md:flex-row items-start space-x-4">
              <div style={{ width: isMobile ? 300 : 200, height: 300, borderRadius: "12px", overflow: "hidden", margin: isMobile ? "0 auto 20px" : "0 0 20px 0" }}>
                <SharpImage src={todoApi} width={isMobile ? 300 : 200} height={300} alt="WeatherHub Project" />
              </div>
              <div className="flex-1 pl-5">
                <h3 className="text-xl font-bold text-white-500 pb-5">Todo APP</h3>
                <li className="pb-5">Полноценное full-stack приложение для управления задачами.</li> 
                <li className="pb-5">Реализованы создание, чтение, обновление и удаление задач с фильтрацией и пагинацией.</li>
                <li className="pb-5">Frontend на React с TailwindCSS, backend на FastAPI с PostgreSQL и SQLAlchemy.</li>
                <li className="pb-5">Полностью dockerized для лёгкого развёртывания и тестирования через Pytest.</li>
                <p className="pb-5">Python 3.11, FastAPI, SQLAlchemy, Pydantic, PostgreSQL, React 18, TailwindCSS, Docker, Docker Compose, Pytest</p>
                <a href="https://github.com/GrigoryZakharov/todo_api" className="pt-1 text-4xl hover:text-red-500 transform hover:scale-125 transition duration-300 inline-block">
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import Signup from './pages/Signup';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import DashboardPage from './pages/DashboardPage';
import Notes from './pages/Notes';
import ReadmoreNote from './pages/ReadmoreNote';
import CourierReceived from './pages/Courier-received';
import CourierSent from './pages/Courier_sent';
import NoPage from "./pages/NoPage";
import PlanSchedule from './pages/Planning';
import User from './pages/User';
import Company from './pages/Company';
import ContactInformation from './pages/Contact-details';
import TimeTable from './pages/TimeTable';
import Subscription from './pages/Subscription';
import "./index.css"
import { TranslateRounded } from '@mui/icons-material';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RankingCupBoard from './pages/RankingCupboard';
import RankingRayons from './pages/RankingRayons';
import RankingBards from './pages/RankingBards';

const languages = [
  {
    code: 'fr',
    name: 'Français',
    emoji: '🇫🇷',
  },
  {
    code: 'kiny',
    name: 'Kinyarwanda',
    emoji: '🇷🇼',
  },
  {
    code: 'en',
    name: 'English',
    emoji: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  },
]

export default function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const { t } = useTranslation('Login');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const closeLanguageMenu = () => {
    setIsLanguageMenuOpen(false);
  };
  return (
    <>
      <div className="flex max-w-[90vw]">
        <div className="flex justify-end items-center p-5 fixed">
          <div className="relative">
            <button
              className="absolute left-30"
              onClick={toggleLanguageMenu}
              aria-expanded={isLanguageMenuOpen}
            >
              <TranslateRounded />
              <span>{t('language')}</span>
            </button>
            {isLanguageMenuOpen && (
              <ul
                className="absolute left-10 bg-white shadow-lg rounded-lg p-5"
              >
                {languages.map(({ code, name, emoji }) => (
                  <li key={emoji} >
                    <a
                      href="#"
                      className={classNames('dropdown-item', {
                        'opacity-50': currentLanguageCode === code,
                      })}
                      onClick={() => {
                        i18next.changeLanguage(code);
                        cookies.set('i18next', code);
                        closeLanguageMenu();
                      }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}>
                        <span
                          style={{
                            marginRight: '10px',
                            opacity: currentLanguageCode === code ? 0.5 : 1,
                          }}
                        >
                          {emoji}
                        </span>
                        <span>{name}</span>
                      </div>
                      {currentLanguageCode === code && (
                        <span className="ml-2">✓</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <ToastContainer autoClose={1500} draggable closeOnClick />
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/dashboard/courier/received" element={<CourierReceived />} />
          <Route path="/dashboard/planning" element={<PlanSchedule/>} />
          <Route path="/dashboard/courier/sent" element={<CourierSent />} />
          <Route path="/dashboard/ranking" element={<RankingCupBoard />} />
          <Route path='/dashboard/ranking/cupboard/:cupboardId' element={<RankingRayons />} />
          <Route path='/dashboard/ranking/cupboard/:cupboardId/rayon/:rayonId' element={<RankingBards />} />
          <Route path="/dashboard/notes" element={<Notes />} />
          <Route path="/dashboard/notes/:id" element={<ReadmoreNote />} />
          <Route path="/dashboard/contact-information" element={<ContactInformation />} />
          <Route path="/dashboard/time-table" element={<TimeTable />} />
          <Route path="/dashboard/user" element={<User/>} />
          <Route path="/dashboard/company" element={<Company/>} />
          <Route path="/dashboard/subscription" element={<Subscription/>} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
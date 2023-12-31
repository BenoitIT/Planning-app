/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
"use client";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import {
  faCalendarPlus,
  faClock,
  faFolderOpen,
  faPeopleGroup,
  faUser,
  faBuilding,
  faCircleDollarToSlot,
} from "@fortawesome/free-solid-svg-icons";
import { Menu, Dropdown, Button } from "antd";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  AccountCircleOutlined,
  ArrowDropDown,
  Dashboard,
  MailOutlineRounded,
  Close,
  MoreVert,
  TranslateRounded,
} from "@mui/icons-material";
import { AlignRightOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { Collapse } from "@mui/material";
import React, { useState, useEffect } from "react";
import { handleSetSelectedModule } from "../redux/reducers/modulesReducer";

const languages = [
  {
    code: "fr",
    name: "Français",
    emoji: "🇫🇷",
  },
  {
    code: "kiny",
    name: "Kinyarwanda",
    emoji: "🇷🇼",
  },
  {
    code: "en",
    name: "English",
    emoji: "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
  },
];

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const choosenModule = useSelector((state) => state.selected.selectedModule);
  const [menu, toggleMenu] = useState(false);
  const [settings, showSettings] = useState(false);
  const [sidebar, toggleSidebar] = useState(true);
  useEffect(() => {
    const value = localStorage.getItem("ActiveModule");
    if (value) {
      dispatch(handleSetSelectedModule(value));
    }
  }, [menu]);
  const handleHomeMenu = () => {
    window.location.href = "/dashboard";
    localStorage.clear();
  };
  const handleButton = (event) => {
    event.preventDefault();
    const value = event.currentTarget.value;
    dispatch(handleSetSelectedModule(value));
    localStorage.setItem("ActiveModule", value);
    toggleMenu((prev) => !prev);
  };

  const handleSidebar = (event) => {
    event.preventDefault();
    toggleSidebar((prev) => !prev);
    showSettings(false);
    toggleMenu(false);
  };

  const handleSettings = (event) => {
    event.preventDefault();
    showSettings((prev) => !prev);
    toggleMenu(false);
  };
  const handleLogout = () => {
    window.location.href = "/login";
    localStorage.clear();
  };
  const UserRedirection=()=>{
    window.location.href = "/dashboard/user";
     localStorage.clear();
  }
  const handleMenu = (event) => {
    event.preventDefault();
    toggleMenu((prev) => !prev);
    showSettings(false);
  };
  const currentLanguageCode = cookies.get('i18next') || 'en';
  const { t } = useTranslation('sidebarOrganisation');
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const closeLanguageMenu = () => {
    setIsLanguageMenuOpen(false);
  };
  const languageMenu = (
    <Menu>
      {languages.map((language) => (
        <Menu.Item key={language.code}>
          <a
            href="#"
            onClick={() => {
              i18next.changeLanguage(language.code);
              cookies.set("i18next", language.code);
              closeLanguageMenu;
            }}
          >
            {language.name}
          </a>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="bg-white relative overflow-hidden">
      <div
        className={`h-screen z-40 fixed transform  ${
          sidebar ? "translate-x-0" : "-translate-x-72"
        } transition-all`}
      >
        <nav className="h-screen w-72 relative bg-white px-5">
          <div className="flex flex-col justify-between h-full ">
            <div>
              <div className="title py-4 text-greener text-3xl border-gray border-b-2 text-center">
                Admin Atete
              </div>
              <div className="dashboard flex flex-col">
                <div
                  className={window.location.href.endsWith("dashboard")?"text-greener text-xl font-bold flex gap-5 py-3":"text-slate-500 text-xl font-bold flex gap-5 py-3"}
                  onClick={handleHomeMenu}
                >
                  <Dashboard />
                  <Link to="/dashboard">
                    <span>
                      {t('side-bar.sous-titre')}
                    </span>
                  </Link>
                </div>
                <div className="dropdown relative">
                  <button
                    type="button"
                    onClick={handleMenu}
                    className="text-greener border-2 py-3 w-full rounded-lg border-greener flex justify-around"
                  >
                    <span className="capitalize ">{choosenModule}</span>
                    <ArrowDropDown />
                  </button>
                  <div className="absolute top-[60px] w-full">
                    <Collapse in={menu}>
                      <div className="p-2 bg-white rounded-lg drop-shadow-lg">
                        <button
                          value={"organisation"}
                          onClick={handleButton}
                          type="button"
                          className="px-3 py-2 hover:bg-black/10 w-full h-full rounded-lg transition-all"
                        >
                          {t('side-bar.ph-modules')}
                        </button>
                      </div>
                    </Collapse>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <Collapse in={choosenModule == "organisation" ? true : false}>
                  <div className="sid-nav text-slate-500 flex flex-col gap-4">
                    <div
                      className={`${
                        window.location.href.includes("courier")
                          ? "text-primary flex gap-4  items-center"
                          : "flex gap-5  items-center"
                      } `}
                    >
                      <div className="w-[20px]">
                        <MailOutlineRounded />
                      </div>
                      <Link to="/dashboard/courier/received">
                        <span className="text-sm font-bold cursor-pointer">
                          {t('side-bar.courier')}
                        </span>
                      </Link>
                    </div>
                    <div
                      className={`${
                        window.location.href.includes("planning")
                          ? "text-primary flex gap-5  items-center"
                          : "flex gap-5  items-center"
                      } `}
                    >
                      <div className="w-[20px]">
                        {" "}
                        <FontAwesomeIcon icon={faCalendarPlus} />
                      </div>
                      <Link to="/dashboard/planning">
                        <span className="text-sm font-bold cursor-pointer">
                          {t('side-bar.planing')}
                        </span>
                      </Link>
                    </div>
                    <div
                      className={`${
                        window.location.href.includes("notes")
                          ? "text-primary flex gap-5  items-center"
                          : "flex gap-5  items-center"
                      } `}
                    >
                      <div className="w-[20px]">
                        <FontAwesomeIcon icon={faNoteSticky} />
                      </div>
                      <Link to="/dashboard/notes">
                        <span className="text-sm font-bold cursor-pointer">
                          {t('side-bar.notes')}
                        </span>
                      </Link>
                    </div>
                    <div
                      className={`${
                        window.location.href.includes("ranking")
                          ? "text-primary flex gap-5  items-center"
                          : "flex gap-5  items-center"
                      } `}
                    >
                      <div className="w-[20px]">
                        <FontAwesomeIcon icon={faFolderOpen} />
                      </div>
                      <Link to="/dashboard/ranking">
                        <span className="text-sm font-bold cursor-pointer">
                          {t('side-bar.classement')}
                        </span>
                      </Link>
                    </div>
                    <div
                      className={`${
                        window.location.href.includes("contact-information")
                          ? "text-primary flex gap-5  items-center"
                          : "flex gap-5  items-center"
                      } `}
                    >
                      <div className="w-[20px]">
                        {" "}
                        <FontAwesomeIcon icon={faPeopleGroup} />
                      </div>
                      <Link to="/dashboard/contact-information">
                      <span className="text-sm font-bold cursor-pointer">
                          {t('side-bar.coordonnees')}
                        </span>
                      </Link>
                    </div>
                    <div
                      className={`${
                        window.location.href.includes("time-table")
                          ? "text-primary flex gap-5  items-center"
                          : "flex gap-5  items-center"
                      } `}
                    >
                      <div className="w-[20px]">
                        {" "}
                        <FontAwesomeIcon icon={faClock} />
                      </div>
                      <Link to="/dashboard/time-table">
                        <span className="text-sm font-bold"> {t('side-bar.horaire')}</span>
                      </Link>
                    </div>
                  </div>
                </Collapse>
                {choosenModule == "Choose Module" && (
                  <>
                    <div
                      className={`${
                        window.location.href.includes("user")
                          ? "text-primary text-sm  font-normal flex gap-5 py-2"
                          : " text-slate-500 text-sm  font-normal flex gap-5 py-2"
                      }`}
                    >
                      <FontAwesomeIcon icon={faUser} />
                      <Link to="/dashboard/user">
                        <span>User</span>
                      </Link>
                    </div>
                    <div
                      className={`${
                        window.location.href.includes("company")
                          ? "text-primary text-sm  font-normal flex gap-5 py-2"
                          : " text-slate-500 text-sm  font-normal flex gap-5 py-2"
                      }`}
                    >
                      <FontAwesomeIcon icon={faBuilding} />
                      <Link to="/dashboard/company">
                        <span>Company</span>
                      </Link>
                    </div>
                    <div
                      className={`${
                        window.location.href.includes("subscription")
                          ? "text-primary text-sm  font-normal flex gap-5 py-2"
                          : " text-slate-500 text-sm  font-normal flex gap-5 py-2"
                      }`}
                    >
                      <FontAwesomeIcon icon={faCircleDollarToSlot} />
                      <Link to="/dashboard/subscription">
                        <span>Subscription</span>
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="flex border-gray border-t-2 py-5 items-center justify-between">
              <div className="title flex gap-4 items-center">
                <AccountCircleOutlined className="text-greener scale-[1.5]" />
                <span className="text-lg font-normal">Atete Arlette</span>
              </div>
              <div className="relative">
                <button type="button" onClick={handleSettings}>
                  <MoreVert />
                </button>
                <div className="absolute bottom-[30px]">
                  <Collapse in={settings}>
                    <div className="p-2 bg-white rounded-lg drop-shadow-lg">
                      <div>
                        <button
                          type="button"
                          onClick={UserRedirection}
                          className="px-3 py-2 hover:bg-black/10 w-full h-full rounded-lg transition-all"
                        >
                          {t('picliste-profil.option-1')}
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          onClick={handleLogout}
                          className="px-3 py-2 hover:bg-black/10 w-full h-full rounded-lg transition-all"
                        >
                          {t('picliste-profil.option-2')}
                        </button>
                      </div>
                    </div>
                  </Collapse>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-1 right-1 p-[2px] border-2 rounded-lg lg:hidden">
            <button type="button" onClick={handleSidebar}>
              <Close />
            </button>
          </div>
        </nav>
      </div>
      <div className={`min-h-screen ${sidebar ? "lg:ml-72" : "lg:ml-0"}`}>
        <nav className="bg-greener  flex justify-between px-10 text-white items-center z-20">
          <div className="py-3">
            <button
              type="button"
              onClick={handleSidebar}
              className="text-white"
            >
              <span className="text-4xl">
                <AlignRightOutlined className="rotate-180" />
              </span>
            </button>
          </div>
          <div className="list flex gap-5 items-center max-sm:hidden">
            <div className="py-5 relative">
              <span>Organisation</span>
              <span className="w-full h-[4px] bg-white absolute block bottom-0"></span>
            </div>
            <Dropdown overlay={languageMenu} trigger={["click"]}>
              <Button className="border-white border-2 p-2 h-min rounded-lg text-white">
                <TranslateRounded />
                <span>{currentLanguageCode}</span>
              </Button>
            </Dropdown>
          </div>
        </nav>
        <div className="relative bg-green">{children}</div>
      </div>
    </div>
  );
};

export default Layout;

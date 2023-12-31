import React from 'react'
import Layout from '../layouts/Dashboard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRightLong, faCalendar, faChartSimple, faEllipsisV, faMoneyBillTrendUp, faPeopleGroup, faSitemap, faTowerCell } from '@fortawesome/free-solid-svg-icons'
import Calender from "../assets/daily-calendar-11035-d6f3681f.svg"
import { Button, Popover } from 'antd';
import { useTranslation } from 'react-i18next'
import ScheduleTable from '../components/table/Index';
import { faContactBook, faNoteSticky } from '@fortawesome/free-regular-svg-icons'
const DashboardPage = () => {
  const { t } = useTranslation('dashboard')
  const content = (
    <div className="flex flex-col justify-around">
      <div className="flex justify-between p-1">
        <div className='
      text-white
      bg-primary
      rounded-full
      w-6
      h-6
      flex
      justify-center
      items-center
      '>
          <FontAwesomeIcon icon={faCalendar} />
        </div>
        <div className="">{t('body.Organisation.piclistes.sous-titre1')}</div>
        <div className="">14</div>
      </div>
      <div className="flex justify-between p-1">
        <div className='
      text-white
      bg-primary
      rounded-full
      w-6
      h-6
      flex
      justify-center
      items-center
      '>
          <FontAwesomeIcon icon={faContactBook} />
        </div>
        <div className="">{t('body.Organisation.piclistes.sous-titre2')}</div>
        <div className="">14</div>
      </div>
      <div className="flex justify-between p-1">
        <div className='
      text-white
      bg-primary
      rounded-full
      w-6
      h-6
      flex
      justify-center
      items-center
      '>
          <FontAwesomeIcon icon={faPeopleGroup} />
        </div>
        <div className="">{t('body.Organisation.piclistes.sous-titre3')}</div>
        <div className="">14</div>
      </div>
      <div className="flex justify-between p-1">
        <div className='
      text-white
      bg-primary
      rounded-full
      w-6
      h-6
      flex
      justify-center
      items-center
      '>
          <FontAwesomeIcon icon={faNoteSticky} />
        </div>
        <div className="">{t('body.Organisation.piclistes.sous-titre4')}</div>
        <div className="">14</div>
      </div>
    </div>
  );
  return (
    <Layout>
      <div className='bg-slate-200  p-6 h-screen'>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="rounded-2xl bg-white p-8 col-span-1 md:col-span-3 flex flex-wrap justify-between items-stretch">
            <div>
              <h4 className="text-sm text-slate-500 mb-3 font-semibold">  {t('body.classement.titre')}</h4>
              <h3 className="font-bold text-lg mb-3">{t('body.classement.sous-titre')}</h3>
              <div className="flex justify-between items-center">
                <p className="font-bold text-slate-600">9</p>
              </div>
              <div className="flex justify-between items-center mt-5 gap-5">
                <a href="/app/or/courier/received">
                  <Button type="button" className="bg-primary text-white hover:bg-transparent p-1 rounded border hover:border-primary hover:text-primary">
                    <span>{t('body.classement.btn-correspondance')}</span>
                  </Button>
                </a>
                <a href="/app/or/classement">
                  <Button type="button" className="text-primary-800 bg-slate-100 hover:bg-white p-1 px-3 border hover:border-primary hover:text-primary rounded">
                    <span><span>{t('body.classement.btn-plus')}</span></span>
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:text-right mt-5 md:mt-0">
              <h4 className="text-sm text-slate-500 mb-3 font-semibold">{t('body.classement.autre-1')}</h4>
              <div className="flex gap-5 items-center justify-between">
                <p className="text-slate-500 text-sm">{t('body.classement.autre-2')} : </p>
                <p className="font-bold text-slate-800 text-xl">9</p>
              </div>
              <div className="flex gap-5 items-center justify-between">
                <p className="text-slate-500 text-sm">{t('body.classement.autre-3')} :</p>
                <p className="font-bold text-slate-800 text-xl">4</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl bg-teal-700 text-white p-8 md:col-span-2">
            <h4 className="mb-3 font-semibold text-slate-200">{t('body.events.titre')}</h4>
            <div className="flex justify-between items-end">
              <div>
                <h3 className="font-semibold text-lg mb-3">...</h3>
                <p className="text-xs text-slate-200">...</p>
                <a className="flex items-end justify-between" href="/app/or/planning">
                  <Button type="button" className="bg-white text-teal-700 font-bold mt-6 p-2 rounded">
                    <span>{t('body.events.btn-plus')}</span>
                  </Button>
                </a>
              </div>
              <div className="w-32">
                <img src={Calender} className="-mb-2" alt="Calendar Icon" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap md:grid md:grid-cols-4 gap-5 mt-3">
          {/* First Card */}
          <div className="relative rounded-xl py-5 px-8 bg-white shadow hover:shadow-lg hover:duration-300 hover:cursor-pointer w-full">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold mb-1">
                  {t('side-bar.picliste-modules.module-1')}
                </h2>
                <p className="text-xs text-slate-500">Expires on Sat May 11 2024</p>
              </div>
              <p className="text-3xl text-pink-500">
                <FontAwesomeIcon icon={faSitemap} />
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold">9</p>
                <p className="text-sm text-slate-400">Files</p>
              </div>
              <Popover
                content={content} title={`${t('body.Organisation.piclistes.tire')}`}
              >
              <Button type="button" className="ant-btn css-19bti2s ant-btn-default border-none -mr-2">
                <FontAwesomeIcon icon={faEllipsisV} />
                </Button>
              </Popover>
            </div>
            <span className="absolute -bottom-2 shadow text-white bg-primary px-2 text-sm">Coming soon...</span>
          </div>
          <div className="relative rounded-xl py-5 px-8 bg-white shadow hover:shadow-lg hover:duration-300 hover:cursor-pointer w-full">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold mb-1">  {t('side-bar.picliste-modules.module-2')}</h2>
                <p className="text-xs text-slate-500">Expires on Sat May 11 2024</p>
              </div>
              <p className="text-3xl text-pink-500">
                <FontAwesomeIcon icon={faMoneyBillTrendUp} />
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold">9</p>
                <p className="text-sm text-slate-400">Files</p>
              </div>
              <Button type="button" className="ant-btn css-19bti2s ant-btn-default border-none -mr-2">
                <FontAwesomeIcon icon={faEllipsisV} />
              </Button>
            </div>
            <span className="absolute -bottom-2 shadow text-white bg-primary px-2 text-sm">Coming soon...</span>
          </div>
          <div className="relative rounded-xl py-5 px-8 bg-white shadow hover:shadow-lg hover:duration-300 hover:cursor-pointer w-full">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold mb-1">  {t('side-bar.picliste-modules.module-3')}</h2>
                <p className="text-xs text-slate-500">Expires on Sat May 11 2024</p>
              </div>
              <p className="text-3xl text-pink-500">
                <FontAwesomeIcon icon={faChartSimple} />
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold">9</p>
                <p className="text-sm text-slate-400">Files</p>
              </div>
              <Button type="button" className="ant-btn css-19bti2s ant-btn-default border-none -mr-2">
                <FontAwesomeIcon icon={faEllipsisV} />
              </Button>
            </div>
            <span className="absolute -bottom-2 shadow text-white bg-primary px-2 text-sm">Coming soon...</span>
          </div>
          <div className="relative rounded-xl py-5 px-8 bg-white shadow hover:shadow-lg hover:duration-300 hover:cursor-pointer w-full">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-bold mb-1">  {t('side-bar.picliste-modules.module-4')}</h2>
                <p className="text-xs text-slate-500">Expires on Sat May 11 2024</p>
              </div>
              <p className="text-3xl text-pink-500">
                <FontAwesomeIcon icon={faTowerCell} />
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-baseline gap-2">
                <p className="text-xl font-bold">9</p>
                <p className="text-sm text-slate-400">Files</p>
              </div>
              <Button type="button" className="ant-btn css-19bti2s ant-btn-default border-none -mr-2">
                <FontAwesomeIcon icon={faEllipsisV} />
              </Button>
            </div>
            <span className="absolute -bottom-2 shadow text-white bg-primary px-2 text-sm">Coming soon...</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl mt-8">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-lg">{t('body.Horaire personnel.titre')}</h3>
            <a href="/app/or/planning">
              <Button type="button" className=" text-primary p-1 ">
                <FontAwesomeIcon icon={faArrowRightLong} />
              </Button>
            </a>
          </div>
          <div className="mt-5">
            <ScheduleTable />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default DashboardPage
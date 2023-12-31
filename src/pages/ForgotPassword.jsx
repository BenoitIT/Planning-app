import React from 'react';
import { useTranslation } from 'react-i18next';
const ForgotPassword = () => {
  const { t } = useTranslation('Forgotpassword');
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-slate-200 md:px-10 py-0 md:py-14 w-[600px]">
        <div className="grid grid-cols-1 md:shadow-2xl rounded-lg">
          <div className="bg-white p-8 2xl:p-24 md:rounded-l-lg">
            <h1 className="text-primary font-black">AdminAtete</h1>
            <div className="my-6">
              <p className="text-slate-800 font-bold text-2xl mb-2">{t('titre')}</p>
              <p className="text-slate-600 font-light text-xs">{t('sous-titre')}</p>
            </div>
            <div className="mt-5 w-full">
              <div className="relative">
                <span className="text-lg text-gray-500 absolute top-1/2 transform -translate-y-1/2 left-2">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 14 16"
                    className="text-lg text-gray-500 mr-2"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fillRule="evenodd" d="M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z"></path>
                  </svg>
                </span>
                <input placeholder={t('ph-email')} name="email" className="pl-8 pr-4 py-2 w-full text-lg text-gray-500 border border-gray rounded-lg" type="email"  />
              </div>
              <br /><br />
              <button className="mb-6 bg-primary text-white font-medium flex justify-center items-center gap-2 border w-full py-[10px] rounded-lg">
                <span>
                  <span>{t('btn-reset')}</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

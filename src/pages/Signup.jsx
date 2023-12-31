import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import IMG from "../assets/logo_adminatete-e7a18511.svg"
import IMG1 from "../assets/man_transferring_data-5eac5d73.svg"
import { useTranslation } from 'react-i18next';

const Signup = () => {
  const { t } = useTranslation('Signup');
  const [showCompanyInfo, setShowCompanyInfo] = useState(true);
  const [isPreviewEnabled, setPreviewEnabled] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const toggleCompanyInfo = () => {
    setShowCompanyInfo(!showCompanyInfo);
    setPreviewEnabled(false);
  };

  const togglePreview = () => {
    setPreviewEnabled(!isPreviewEnabled);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="md:flex md:items-center md:justify-center md:min-h-screen h-[100vh]">
      <div className="md:flex md:w-[60rem] shadow-[0_0px_60px_-15px_rgba(0,0,0,0.4)] bg-white md:rounded-lg overflow-hidden md:my-8">
        <div className="md:flex-col md:justify-center md:basis-1/2 md:w-1/2 md:flex md:gap-8 md:py-5 p-5">
          <div>
            <img src={IMG} alt="" className="mx-auto w-28 mb-8" />
            <h1 className="text-3xl text-center">{t('titre')}</h1>
          </div>
          <img src={IMG1} alt="" />
          <div></div>
        </div>
        <div className="flex flex-col min-h-screen gap-4 pb-6 mx-auto text-black md:w-1/2 md:min-h-0 bg-primary md:gap-0 duration-200 py-5">
          <div className="h-fit">
            <div className="carousel-root">
              <Carousel selectedItem={showCompanyInfo ? 0 : 1} showStatus={false} showThumbs={false} dynamicHeight={false}>
                <div>
                  <div className="px-5">
                    <h4 className="text-sm font-light text-center text-white">{t('partie-1.sous-titre')}</h4>
                    <form className="flex flex-col gap-4 py-8 text-left">
                      <div className="input-text-label-group">
                        <label htmlFor="company-name" className='text-white'>{t('partie-1.champ-1')}<span className="text-red-500 text-sm ml-1">*</span></label>
                        <input placeholder={t('partie-1.ph-1')} type="text" id="company-name" name="company-name" className="pl-2 pr-2 py-2 w-full text-lg text-gray-500 border border-gray rounded-lg" />
                      </div>
                      <div className="input-text-label-group">
                        <label htmlFor="company-city" className='text-white'>{t('partie-1.champ-2')}<span className="text-red-500 text-smml-1 ">*</span></label>
                        <input placeholder={t('partie-1.ph-2')} type="text" id="company-city" name="company-city" className="pl-2 pr-2 py-2 w-full text-lg text-gray-500 border border-gray rounded-lg" />
                      </div>
                      <div className="input-text-label-group">
                        <label htmlFor="company-address" className='text-white'>{t('partie-1.champ-3')}<span className="text-red-500 text-sm ml-1">*</span></label>
                        <input placeholder={t('partie-1.ph-3')} type="text" id="company-address" name="company-address" className="pl-2 pr-2 py-2 w-full text-lg text-gray-500 border border-gray rounded-lg" />
                      </div>
                      <div className="input-text-label-group">
                        <label htmlFor="company-country" className='text-white'>{t('partie-1.champ-4')}<span className="text-red-500 text-sm ml-1">*</span></label>
                        <select className="pl-2 pr-2 py-2 w-full text-lg text-gray border border-gray rounded-lg">
                          <option >{t('partie-1.ph-4')}</option>
                          <option>Afghanistan</option>
                          <option>Albania</option>
                        </select>
                      </div>
                      <div className="input-text-label-group">
                        <label htmlFor="company-postal" className='text-white'>{t('partie-1.champ-5')}<span className="text-red-500 text-sm ml-1">*</span></label>
                        <input placeholder={t('partie-1.ph-4')} type="text" id="company-postal" name="company-postal" className="pl-2 pr-2 py-2 w-full text-lg text-gray-500 border border-gray rounded-lg" />
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  <div className="px-5">
                    <h4 className="text-sm font-light text-center text-white">{t('partie-2.sous-titre')}</h4>
                    <form className="flex flex-col gap-4 py-8 text-left">
                      <div className="input-text-label-group">
                        <label htmlFor="admin-name" className='text-white'><span>{t('partie-2.champ-1')} <span className="text-red-500 text-sm ml-1">*</span></span></label>
                        <input placeholder="Your name" type="text" id="admin-name" name="admin-name" className="pl-2 pr-2 py-2 w-full text-lg text-gray-500 border border-gray rounded-lg" />
                      </div>
                      <div className="input-text-label-group">
                        <label htmlFor="admin-firstname" className='text-white'>{t('partie-2.champ-2')}<span className="text-red-500 text-sm ml-1">*</span></label>
                        <input placeholder="Your first name" type="text" id="admin-firstname" name="admin-firstname" className="pl-2 pr-2 py-2 w-full text-lg text-gray-500 border  border-gray rounded-lg" />
                      </div>
                      <div className="input-text-label-group">
                        <label htmlFor="admin-email" className='text-white'>{t('partie-2.champ-3')}<span className="text-red-500 text-sm ml-1">*</span></label>
                        <input placeholder="Your email address" type="text" id="admin-email" name="admin-email" className="pl-2 pr-2 py-2 w-full text-lg text-gray-500 border border-gray rounded-lg" />
                      </div>
                      <div className="input-text-label-group">
                        <label htmlFor="admin-pwd" className='text-white'>{t('partie-2.champ-4')}<span className="text-red-500 text-sm ml-1">*</span></label>
                        <input placeholder="**********" type={isPasswordVisible ? 'text' : 'password'} id="admin-pwd" name="admin-pwd" className="pl-2 pr-2 py-2 w-full text-lg text-gray-500 border border-gray rounded-lg" />
                      </div>
                      <div className="input-text-label-group">
                        <label htmlFor="admin-pwdconfirm" className='text-white'>{t('partie-2.champ-5')}<span className="text-red-500 text-sm ml-1">*</span></label>
                        <input placeholder="**********" type={isPasswordVisible ? 'text' : 'password'} id="admin-pwdconfirm" name="admin-pwdconfirm" required="" className="pl-2 pr-2 py-2 w-full text-lg text-gray-500 border border-gray rounded-lg" />
                      </div>
                      <div className="flex gap-2">
                        <input type="checkbox" name="pwd-visibility" id="pwd-visibility" className="border-0 outline-none" onChange={togglePasswordVisibility} />
                        <label htmlFor="pwd-visibility" className='text-white'>{t('partie-2.champ-6')}</label>
                      </div>
                    </form>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          <p className="text-center text-sm mb-2 text-white">{t('partie-2.a-compte')} <a className="underline text-white" href="/login">{t('partie-2.se-connecter')} </a></p>
          <div className="grid grid-cols-2 gap-4 px-6 mt-auto">
            {showCompanyInfo ? (
              <button
                className={`mb-6 bg-primary text-white font-medium flex justify-center items-center gap-2 border w-full py-[10px] rounded-lg ${isPreviewEnabled ? '' : 'disabled:opacity-50 '
                  }`}
                onClick={toggleCompanyInfo}
              >
                {t('partie-2.btn-suivant')}
              </button>
            ) : (
              <>
                <button
                  className={`mb-6 bg-primary text-white font-medium flex justify-center items-center gap-2 border w-full py-[10px] rounded-lg`}
                  onClick={toggleCompanyInfo}
                >
                    {t('partie-2.btn-precedent')}
                </button>
                <button
                  className='mb-6 bg-primary text-white font-medium flex justify-center items-center gap-2 border w-full py-[10px] rounded-lg'
                >
                    {t('partie-2.btn-save')}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
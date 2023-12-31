import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import IMG1 from '../assets/image-login-4d59f5c6.png';
import IMG2 from '../assets/login-classement-d6cd85fd.png';
import IMG3 from '../assets/login-classNameement-d6cd85fd.png';
import IMG4 from '../assets/login-planning-b8b95e63.png';
import { toast } from 'react-toastify';
import { FcGoogle } from 'react-icons/fc';
import { Controller, useForm } from 'react-hook-form';
import Input from '../components/inputs/Input';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import Button from '../components/inputs/Button';
import Loading from '../components/inputs/Loading';
import { useLoginMutation } from '../redux/api/apiSlice';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../redux/reducers/userSlice';

const Login = () => {
  const { t } = useTranslation('Login');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [
    login,
    {
      isLoading: isLoginLoading,
      isSuccess: isLoginSuccess,
      isError: isLoginError,
      data: loginData,
    },
  ] = useLoginMutation();

  const onSubmit = (data) => {
    login({
      email: data.email,
      password: data.password,
    });
  };

  useEffect(() => {
    if (isLoginSuccess) {
      toast.success('Login successful');
      dispatch(setUser(loginData?.data?.user));
      dispatch(setToken(loginData?.data?.token));
      setTimeout(() => {
        navigate('/dashboard');
      }, 500);
    } else if (isLoginError) {
      toast.error(
        'Could not login. Please check your credentials and try again'
      );
    }
  }, [isLoginSuccess, isLoginError, loginData, dispatch, navigate]);

  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="bg-slate-200 md:px-10 py-0 md:py-14 w-full md:w-3/4 xl:w-3/4 2xl:w-7/12 max-w-[100%]">
        <div className="grid grid-cols-1 md:grid-cols-2 md:shadow-2xl rounded-lg">
          <div className=" bg-primary min-h-[80vh] md:flex justify-center items-center md:rounded-r-lg px-10 bg-primary-700 relative overflow-hidden">
            <div className="h-32 w-32 bg-primary animate-spin-slow absolute top-0 left-0 rounded-tl-[70px] rounded-bl-[150px] rounded-tr-[120px] rounded-br-[60px] p-2">
              <div className="h-32 w-32 bg-white/30 animate-spin-slow absolute top-0 left-0 rounded-tl-[70px] rounded-bl-[150px] rounded-tr-[120px] rounded-br-[60px]"></div>
            </div>
            <div className="h-32 w-32 bg-white/30 absolute bottom-0 right-0 rounded-tl-full"></div>
            <div className="w-full h-[66%] rounded-full bg-primary relative drop-shadow-2xl">
              <img
                src={IMG1}
                alt=""
                className="w-72 h-auto object-contain border rounded drop-shadow-xl shadow-lg shado absolute -top-10 left-3"
              />
              <img
                src={IMG2}
                alt=""
                className="w-72 h-auto object-contain border rounded drop-shadow-xl shadow-lg shado absolute -bottom-4 right-14"
              />
              <div className="relative w-full h-full">
                <img
                  src={IMG3}
                  alt=""
                  className="w-48 z-10 h-auto object-contain border rounded drop-shadow-xl shadow-lg shado absolute top-56 -left-5"
                />
                <img
                  src={IMG4}
                  alt=""
                  className="w-full h-[90%] object-contain rounded-2xl drop-shadow-xl shadow-lg absolute -top-4 -right-10 px-10 mb-10"
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-8 2xl:p-24 md:rounded-l-lg flex flex-col items-center gap-8">
            <h1 className="uppercase text-[20px] text-primary font-black">
              AdminAtete
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-[25px] items-center w-[80%] mx-auto max-[1000px]:w-[65%] max-[900px]:w-[75%] max-[650px]:w-[80%] max-[400px]:w-[85%] max-[350px]:w-[90%]"
            >
              <article className="flex flex-col items-center gap-2 justify-between w-full">
                <Link className="flex items-center justify-center w-fit ease-in-out duration-200 hover:scale-[.99] gap-2 bg-transparent p-[10px] border-[1px] border-gray rounded-md hover:bg-primary hover:text-white hover:border-white max-[650px]: max-[400px]: max-[350px]:">
                  <FcGoogle className="text-[24px]" />
                  Continue with Google
                </Link>
              </article>
              <span className="w-full flex items-center gap-8">
                <hr className="w-full border-[.5px] border-lightBlack" />
                <p className="w-full whitespace-nowrap ">
                  or Log in with email
                </p>
                <hr className="w-full border-[.5px] border-lightBlack" />
              </span>
              <menu className="w-full flex flex-col gap-[15px]">
                <li className="w-full flex flex-col gap-[10px]">
                  <Controller
                    name="email"
                    rules={{ required: 'Please enter your email address' }}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Input
                          icon={faUser}
                          label="Email address"
                          placeholder="e.g john@domain.rw"
                          useIcon
                          onChange={(e) => {
                            field.onChange(e);
                          }}
                        />
                      );
                    }}
                  />
                  {errors.username && (
                    <span className="text-red-600 ">
                      {errors.username.message}
                    </span>
                  )}
                </li>
                <li className="w-full flex flex-col gap-4">
                  <Controller
                    name="password"
                    rules={{ required: 'Please enter your password' }}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Input
                          icon={faLock}
                          useIcon
                          label="Password"
                          placeholder="*********"
                          type="password"
                          onChange={(e) => {
                            field.onChange(e);
                          }}
                        />
                      );
                    }}
                  />
                  {errors.password && (
                    <span className="text-red-600 ">
                      {errors.password.message}
                    </span>
                  )}
                </li>
                <li className="flex items-center gap-2 w-full justify-between">
                  <Controller
                    name="consent"
                    control={control}
                    render={({ field }) => {
                      return (
                        <label className="flex items-center gap-[10px]">
                          <Input
                            className="!w-fit"
                            labelClassName="!w-fit !flex !items-center"
                            type="checkbox"
                            {...field}
                          />
                          <p className="text-[14px] w-full">Remember me</p>
                        </label>
                      );
                    }}
                  />

                  <Button
                    value="Forgot password ?"
                    className="!p-0 !border-none hover:!bg-transparent underline hover:font-bold hover:!text-primary"
                    route="/forgot-password"
                  />
                </li>
                <li></li>
                <li className="w-full">
                  <Controller
                    name="submit"
                    control={control}
                    render={() => {
                      return (
                        <Button
                          submit
                          value={isLoginLoading ? <Loading /> : 'Login'}
                          primary
                          className="w-full max-w-full"
                        />
                      );
                    }}
                  />
                </li>
              </menu>
              <span className="flex items-center gap-2">
                <p>Don&apos;t have an account?</p>
                <Button
                  value="Register here"
                  route="/signup"
                  className="!p-0 border-none hover:!bg-transparent hover:!text-primary !text-underline hover:!font-bold"
                />
              </span>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

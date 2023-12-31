import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import Button from '../inputs/Button';
import { setCupboardModal, updateCupboardsList } from '../../redux/reducers/rankingSlice';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import Input from '../inputs/Input';
import { useCreateCupboardMutation } from '../../redux/api/apiSlice';
import { toast } from 'react-toastify';
import Loading from '../inputs/Loading';

const AddCupboard = ({ isOpen, user }) => {
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm();

  const [createCupboard, {
    data: createCupboardData,
    isLoading: createCupboardIsLoading,
    isSuccess: createCupboardIsSuccess,
  }] = useCreateCupboardMutation();

  const onSubmit = (data) => {
    createCupboard({
        name: data?.name,
        organizationId: user?.organizationId,
    })
  };

  useEffect(() => {
    if (createCupboardIsSuccess) {
        toast.success('Cupboard created successfully');
        const payload = {
            key: createCupboardData?.data?.id,
            id: createCupboardData?.data?.id,
            name: createCupboardData?.data?.name,
            rayonCount: createCupboardData?.data?.rayonCount || 0,
            createdAt: createCupboardData?.data?.createdAt,
            updatedAt: createCupboardData?.data?.updatedAt,
        }
        dispatch(updateCupboardsList(payload));
        setTimeout(() => {
            dispatch(setCupboardModal(false));
        }, 500);
    }
  }, [createCupboardData, createCupboardIsSuccess, dispatch]);

  return (
    <main
      className={`${
        isOpen ? 'flex overflow-y-hidden' : 'hidden'
      } absolute items-center justify-center w-full h-screen bg-gray bg-opacity-30 top-0 right-0 bottom-0 left-0`}
    >
      <section className="w-[45%] relative h-[35%] flex flex-col gap-6 items-center justify-start bg-white rounded-md shadow-md">
        <Button
          className="!p-0 text-[1.8rem] !border-none hover:!bg-transparent hover:!text-primary hover:scale-[.95] absolute right-4 top-4"
          value={
            <AiFillCloseCircle
              size={35}
              onClick={() => {
                dispatch(setCupboardModal(false));
              }}
            />
          }
        />
       <h1 className='text-[20px] uppercase text-primary font-semibold mt-4'>New Cupboard</h1>
       <form onSubmit={handleSubmit(onSubmit)} className='w-[80%] mx-auto flex flex-col gap-4'>
        <Controller name='name' control={control} render={({field}) => {
            return (
                <Input label='Cupboard Name' placeholder='e.g Cachets' {...field} />
            )
        }} />
        <Controller name='submit' control={control} render={() => {
            return (
              <Button
                submit
                value={createCupboardIsLoading ? <Loading /> : 'Add Cupboard'}
                primary
              />
            );
        }} />
       </form>
      </section>
    </main>
  );
};

AddCupboard.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
};

export default AddCupboard;

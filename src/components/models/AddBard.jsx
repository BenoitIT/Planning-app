import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import Button from '../inputs/Button';
import {
  setBardModal,
  updateBardsList,
} from '../../redux/reducers/rankingSlice';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import Input from '../inputs/Input';
import { useCreateBardMutation } from '../../redux/api/apiSlice';
import { toast } from 'react-toastify';
import Loading from '../inputs/Loading';

const AddBard = ({ isOpen, rayon }) => {
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm();

  const [
    createBard,
    {
      data: createBardData,
      isLoading: createBardIsLoading,
      isSuccess: createBardIsSuccess,
    },
  ] = useCreateBardMutation();

  const onSubmit = (data) => {
    createBard({
      name: data?.name,
      rayonId: rayon?.id,
    });
  };

  useEffect(() => {
    if (createBardIsSuccess) {
      toast.success('Cupboard created successfully');
      const payload = {
        key: createBardData?.data?.id,
        name: createBardData?.data?.name,
        id: createBardData?.data?.id,
        importDocumentCount: createBardData?.data?.importDocumentCount || 0,
        createdAt: createBardData?.data?.createdAt,
        updatedAt: createBardData?.data?.updatedAt,
      };
      dispatch(updateBardsList(payload));
      setTimeout(() => {
        dispatch(setBardModal(false));
      }, 500);
    }
  }, [createBardData, createBardIsSuccess, dispatch]);

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
                dispatch(setBardModal(false));
              }}
            />
          }
        />
        <h1 className="text-[20px] uppercase text-primary font-semibold mt-4">
          New Bard
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[80%] mx-auto flex flex-col gap-4"
        >
          <Controller
            name="name"
            control={control}
            render={({ field }) => {
              return (
                <Input
                  label="Bard Name"
                  placeholder="e.g Faldes"
                  {...field}
                />
              );
            }}
          />
          <Controller
            name="submit"
            control={control}
            render={() => {
              return (
                <Button
                  submit
                  value={createBardIsLoading ? <Loading /> : 'Add Bard'}
                  primary
                />
              );
            }}
          />
        </form>
      </section>
    </main>
  );
};

AddBard.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  rayon: PropTypes.shape.isRequired,
};

export default AddBard;

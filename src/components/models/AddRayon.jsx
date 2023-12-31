import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import Button from '../inputs/Button';
import {
  setRayonModal,
  updateRayonsList,
} from '../../redux/reducers/rankingSlice';
import { useDispatch } from 'react-redux';
import { Controller, useForm } from 'react-hook-form';
import Input from '../inputs/Input';
import { useCreateRayonMutation } from '../../redux/api/apiSlice';
import { toast } from 'react-toastify';
import Loading from '../inputs/Loading';

const AddRayon = ({ isOpen, cupboard }) => {
  const dispatch = useDispatch();

  const { handleSubmit, control } = useForm();

  const [
    createRayon,
    {
      data: createRayonData,
      isLoading: createRayonIsLoading,
      isSuccess: createRayonIsSuccess,
    },
  ] = useCreateRayonMutation();

  const onSubmit = (data) => {
    createRayon({
      name: data?.name,
      cupboardId: cupboard?.id,
    });
  };

  useEffect(() => {
    if (createRayonIsSuccess) {
      toast.success('Cupboard created successfully');
      const payload = {
        key: createRayonData?.data?.id,
        id: createRayonData?.data?.id,
        name: createRayonData?.data?.name,
        bardCount: createRayonData?.data?.bardCount || 0,
        createdAt: createRayonData?.data?.createdAt,
        updatedAt: createRayonData?.data?.updatedAt,
      };
      dispatch(updateRayonsList(payload));
      setTimeout(() => {
        dispatch(setRayonModal(false));
      }, 500);
    }
  }, [createRayonData, createRayonIsSuccess, dispatch]);

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
                dispatch(setRayonModal(false));
              }}
            />
          }
        />
        <h1 className="text-[20px] uppercase text-primary font-semibold mt-4">
          New Rayon
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
                <Input label="Rayon Name" placeholder="e.g Faldes" {...field} />
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
                  value={createRayonIsLoading ? <Loading /> : 'Add Rayon'}
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

AddRayon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  cupboard: PropTypes.shape.isRequired,
};

export default AddRayon;

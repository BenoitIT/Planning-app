import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import Button from '../../components/inputs/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyListBardsQuery } from '../../redux/api/apiSlice';
import { setBardsList, setRayon } from '../../redux/reducers/rankingSlice';
import moment from 'moment';
import { Table } from 'antd';
import Loading from '../../components/inputs/Loading';
import { useNavigate, useParams } from 'react-router-dom';
import { faFolder } from '@fortawesome/free-regular-svg-icons';

const BardsTable = () => {
  const dispatch = useDispatch();

  const { rayon } = useSelector((state) => state.ranking);

  const navigate = useNavigate();

  const { rayonId } = useParams();

  /**
   * GET LOGGEDIN USER AND CUPBOARDS FROM STATE
   */

  const { bards } = useSelector((state) => state.ranking);

  /**
   * FETCH CUPBOARDS FROM API
   */

  const [
    listBards,
    { data: bardsData, isLoading: bardsIsLoading, isSuccess: bardsIsSuccess },
  ] = useLazyListBardsQuery();

  useEffect(() => {
    listBards({
      rayonId,
    });
  }, [listBards, rayonId]);

  useEffect(() => {
    if (bardsIsSuccess) {
      dispatch(setBardsList(bardsData?.data?.bards || []));
      dispatch(setRayon(bardsData?.data?.rayon || {}));
    }
  }, [bardsData, bardsIsSuccess, dispatch]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
      render: (text, record) => (
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate(`bard/${record.key}`);
          }}
          value={
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faFolder} className="opacity-80" /> {text}
            </span>
          }
        />
      ),
    },
    { title: 'Size', dataIndex: 'importDocumentCount', key: 'key' },
    { title: 'Added', dataIndex: 'createdAt', key: 'key' },
    { title: 'Charge', dataIndex: 'updatedAt', key: 'key' },
    {
      title: 'Details',
      dataIndex: 'Details',
      key: 'key',
      render: () => <Button value="Plus" />,
    },
  ];

  return (
    <div className="flex flex-col gap-4 mt-3 w-[90%] mx-auto p-2 h-[85vh] bg-white pt-4 md:p-5 max-h-[85vh] overflow-auto rounded-2xl relative xs:w-full xs:mx-1 md:mx-4">
      <h3 className="font-bold text-lg">{rayon?.name}</h3>
      {bardsIsLoading ? (
        <main className="min-h-[50vh] w-full flex items-center justify-center">
          <Loading />
        </main>
      ) : (
        <Table
          dataSource={bards.map((bard) => {
            return {
              key: bard.id,
              name: bard.name,
              importDocumentCount: `${bard.importDocumentCount} element(s)`,
              createdAt: moment(bard.createdAt).format('DD/MM/YYYY'),
              updatedAt: moment(bard.updatedAt).format('DD/MM/YYYY'),
            };
          })}
          pagination={true}
          columns={columns}
        ></Table>
      )}
    </div>
  );
};

export default BardsTable;

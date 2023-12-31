import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Button from '../../components/inputs/Button';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { useLazyListImportDocumentsQuery } from '../../redux/api/apiSlice';
import { setImportDocuments } from '../../redux/reducers/rankingSlice';
import moment from 'moment';
import { Table } from 'antd';
import Loading from '../../components/inputs/Loading';
import { useNavigate, useParams } from 'react-router-dom';

const ImportDocumentsTable = () => {
  const dispatch = useDispatch();

  const [bard, setRayon] = useState({});

  const navigate = useNavigate();

  const { bardId } = useParams();

  /**
   * GET LOGGEDIN USER AND CUPBOARDS FROM STATE
   */

  const { importDocuments } = useSelector((state) => state.ranking);

  /**
   * FETCH CUPBOARDS FROM API
   */

  const [
    listImportDocuments,
    { data: importDocumentsData, isLoading: importDocumentsIsLoading, isSuccess: importDocumentsIsSuccess },
  ] = useLazyListImportDocumentsQuery();

  useEffect(() => {
    listImportDocuments({
      bardId,
    });
  }, [listImportDocuments, bardId]);

  useEffect(() => {
    if (importDocumentsIsSuccess) {
      dispatch(setImportDocuments(importDocumentsData?.data?.importDocuments || []));
      setRayon(importDocumentsData?.data?.bard || {});
    }
  }, [importDocumentsData, importDocumentsIsSuccess, dispatch]);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
      render: (text, record) => (
        <Button
          onClick={(e) => {
            e.preventDefault();
            navigate(`importDocument/${record.key}`);
          }}
          value={
            <span className="flex items-center gap-2">
              <FontAwesomeIcon icon={faTable} className="opacity-80" /> {text}
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
      <h3 className="font-bold text-lg">{bard?.name}</h3>
      {importDocumentsIsLoading ? (
        <main className="min-h-[50vh] w-full flex items-center justify-center">
          <Loading />
        </main>
      ) : (
        <Table
          dataSource={importDocuments.map((importDocument) => {
            return {
              key: importDocument.id,
              name: importDocument.name,
              importDocumentCount: `${importDocument.importDocumentCount} element(s)`,
              createdAt: moment(importDocument.createdAt).format('DD/MM/YYYY'),
              updatedAt: moment(importDocument.updatedAt).format('DD/MM/YYYY'),
            };
          })}
          pagination={true}
          columns={columns}
        ></Table>
      )}
    </div>
  );
};

export default ImportDocumentsTable;

import React from 'react'
import Layout from '../layouts/Dashboard';
import Note from '../components/notes/Index';
import PostIt from '../components/post_it/index';
import { Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
const Notes = () => {
    const { TabPane } = Tabs;
    const { t } = useTranslation('notes');
    function callback(key) {
        console.log(key);
    }
    return (
        <Layout>
            <div className=" bg-slate-200 p-2 h-screen">
                <div className="mx-4 mt-3 p-2 h-[85vh] bg-white pt-4 md:p-5 max-h-[85vh]  w-full md:w-auto overflow-auto rounded-2xl relative">
                    <Tabs defaultActiveKey="1" onChange={callback}>
                        <TabPane tab={t('notes.note.titre1')} key="1">
                            <Note />
                        </TabPane>
                        <TabPane tab={t('notes.post-it.titre1')} key="2">
                            <PostIt />
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </Layout>
    )
}

export default Notes 




import { useStoreActions, useStoreState } from 'easy-peasy';
import React, { useEffect } from 'react'
import Contact from '../components/Contact'
import HomeHeader from '../components/HomeHeader'

function Home() {
    const contacts = useStoreState(state => state.contacts); 
    const getContacts = useStoreActions(action => action.getContacts)
    useEffect(() => {
        getContacts();
    }, [])
    return (
        <>
            <HomeHeader />
            <div className="overflow-y-scroll">
                {
                    contacts.map((contact, i) => (
                        <Contact contact={contact} key={i} />
                    ))
                }
            </div>
        </>
    )
}

export default Home

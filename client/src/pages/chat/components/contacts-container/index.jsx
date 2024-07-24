import ProfileInfo from "./components/profile-info";
import NewDM from './components/new-dm/index';
import { useEffect } from "react";
import { apiClient } from "@/lib/api-client";
import { GET_DM_CONTACTS_ROUTES, GET_USER_CHANNELS_ROUTE } from "@/utils/constants";
import { useAppStore } from "@/store";
import ContactList from "@/components/contact-list";
import CreateChannel from "./components/create-channel";

const ContactsContainer = () => {

  const { setDirectMessagesContacts, directMessagesContacts, channels, setChannels } = useAppStore()

  useEffect(() => {
    const getContacts = async () => {
      const response = await apiClient.get(GET_DM_CONTACTS_ROUTES,{withCredentials:true,});
      if(response.data.contacts){
        setDirectMessagesContacts(response.data.contacts);
    }
  };

  const getChannels = async () => {
    const response = await apiClient.get(GET_USER_CHANNELS_ROUTE,{withCredentials:true,});
    if(response.data.channels){
      setChannels(response.data.channels);
  }
};
  
    getContacts();
    getChannels();
  },[setChannels, setDirectMessagesContacts]);

  return (
    <div className="relative md:w-[35vw] lg:w-[30vw] xl:w-[20vw] bg-[#100f1a] border-r-2 border-[#f74848] w-full" >
        <div className="pt-3">
        <Logo />
        </div>
        <div className="my-5">
            <div className="flex items-center justify-between pr-10">
                <Title text="Direct Messages" />
                <NewDM/>
            </div>
          <div className="max-h-[38vh] overflow-y-auto scrollbar-hidden">
            <ContactList contacts={directMessagesContacts}/>
          </div>  
        </div>
        <div className="my-5">
            <div className="flex items-center justify-between pr-10">
                <Title text="Channels" />
                <CreateChannel/>
            </div>
            <div className="max-h-[38vh] overflow-y-auto scrollbar-hidden">
            <ContactList contacts={channels} isChannel={true}/>
          </div> 
        </div>
    
    
    <ProfileInfo/>
    </div>
  );
};

export default ContactsContainer;


const Logo = () => {
    return (
      <div className="flex p-5  justify-start items-center ml-5">
        <span className="text-red-500 text-4xl font-semibold">#</span>
        <span className="text-3xl font-semibold ">Hello</span>
      </div>
    );
  };

  
  const Title = ({ text })=>{
    return (
        <h6 className="uppercase tracking-widest pl-10 text-red-400 text-opacity-90 text-sm">{text}</h6>
    )
  }

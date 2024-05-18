
import supabase, { supabaseUrl } from './supabase';
export const getBooking =  async (id) => {
    const{data,error}= await supabase
    .from('booking_24')
    .select('*,cabin_24(*),guest_24(*)')
    .eq('id',id);

    if(error){
        console.log(error);
        throw new Error ('Cabins could not be loaded');
    }
    return data;
};

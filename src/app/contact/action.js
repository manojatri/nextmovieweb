"use server";

import dbConn from "@/utlis/dbConn";
import Contact from "@/models/contact";

const submitContact = async(data) => {
    try {

        await dbConn();
        await Contact.create(data);

        return {status:"OK", message:"Message Sent Successfully!"}
        
        
    } catch (error) {

       return {status:"Error", message:"Server Error. Please Try Again"}
    }
}

export default submitContact
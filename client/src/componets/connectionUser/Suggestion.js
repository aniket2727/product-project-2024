import React, { useEffect, useState } from 'react';
import { getalluseraccounts } from '../Api/Connectionsuggestion';

const Suggestion = () => {
    const [alluserprofiledata, setalluserprofiledata] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getalluseraccounts();
                const allAccountsData = result.allaccounts || [];
                setalluserprofiledata(allAccountsData); // Assuming the data structure returned has a "data" property
                console.log("This is suggested profiles",allAccountsData);
            } catch (error) {
                console.error('Error fetching user accounts:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
             {
                   alluserprofiledata.map((item,index)=>{
                    return(
                      <div key={index}>
                         {item.email}
                      </div>
                    )  
                })
             }
        </div>
    );
};

export default Suggestion;

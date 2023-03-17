import {Route, Routes} from "react-router-dom";
import Landing from "../Pages/landing";
import Search from "../Pages/Search";
import Subscribe from "../Pages/Subscribe";
import Moviedetailspage from "../Pages/Moviedetailspage";
import Payment from "../Pages/payment";

import Confirmation from "../Pages/Confirmation";

import { Watchlist } from "../Components/watchlist";



const AllRoutes =()=>{
    return(

        <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/subscribe" element={<Subscribe />}></Route>
            {/* <Route path="/login" element={<Login />}></Route> */}
            {/* <Route path="/movies" element={<Movies />}></Route> */}
             <Route path="/movies/:id" element={<Moviedetailspage />}></Route>
            {/*<Route path="/shows/:id" element={<IndividualShowPage />}></Route>
            <Route path="/disney-plus" element={<DisneyPlus />}></Route> */}
            <Route path="/search" element={<Search />}></Route>
            <Route path ="/confirm" element={<Confirmation/>}></Route>
            <Route path ="/payment" element={<Payment/>}></Route>           
             <Route path="/Login" element={<Landing />} ></Route>
             <Route path="/watchlist" element={<Watchlist />} ></Route>
            

        </Routes>
    )
}
export {AllRoutes}
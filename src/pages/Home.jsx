import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
    const categories =useLoaderData()
    console.log(categories)
    return (
        <div>
            
            {/* Banner */}
            <Banner />
            {/* Heading */}
            <Heading  title={'Browse coffees by Category'} 
            subtitle={'choose your desired coffee category to browse through specific coffees that fit in your test'}/>
            {/* categories tab section */}
            <Categories categories={categories} />
            {/* dynamic nested component */}
            <Outlet />

        </div>
    );
};

export default Home;
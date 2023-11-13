import Categories from "../components/Categories";
import {useEffect} from "react";
function Services() {
    useEffect(() => {
        document.title = 'IT-SYSTEM - Services';
    }, []);
    return (
        <>
            <h2 className={"m-4"}>Categories</h2>
            <Categories/>
        </>
    );
}

export default Services;
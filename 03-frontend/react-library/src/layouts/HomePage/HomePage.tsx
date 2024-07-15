import { Carousel } from "./Components/Carousel";
import { ExploreTopProducts } from "./Components/ExploreTopProducts";
import { Heros } from "./Components/Heros";
import { UniverseServices } from "./Components/UniverseServices";

export const HomePage = () => {
    return(
        <>
        <ExploreTopProducts />
        <Carousel />
        <Heros />
        <UniverseServices/>
        
        </>
    );
}
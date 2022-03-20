import React from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";

function App() {
    return (
        <div className={App}>
            {/*<PageTitle title={"This is APP components!"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3}/>*/}

            <UncontrolledAccordion titleValue={"Menu"} />
            <UncontrolledAccordion titleValue={"User"} />

            <UncontrolledRating/>

            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/}
            {/*<Accordion titleValue={"User"} collapsed={false}/>*/}
            {/*Article 2*/}
            {/*<Rating value={0}/>*/}
            {/*<Rating value={1}/>*/}
            {/*<Rating value={2}/>*/}
            {/*<Rating value={3}/>*/}
            {/*<Rating value={4}/>*/}
            {/*<Rating value={5}/>*/}
            <OnOff/>
            <OnOff/>
        </div>
    );
}

function PageTitle(props: any) {
    return (
        <h2>{props.title}</h2>
    )
}


export default App;

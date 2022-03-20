import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

type AccordionTitlePropsType = {
    onClick: ()=> void
    title: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {

    let [collapsed, setCollapsed] = useState(false);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={()=>{props.onClick()}}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
};

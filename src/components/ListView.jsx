import * as React from 'react';
import { ListView } from '@progress/kendo-react-listview';
import { Avatar } from '@progress/kendo-react-layout';


const contacts = [
    {
        "name": "jenson delaney",
        "email": "jenson.delaney@mail.com",
        "image": "Jenson-Delaney",
        "messages": 3
    },
    {
        "name": "amaya coffey",
        "email": "amaya.coffey@mail.com",
        "image": "Amaya-Coffey",
        "messages": 1
    },
    {
        "name": "habib joyce",
        "email": "habib.joyce@mail.com",
        "image": "Habib-Joyce",
        "messages": 5
    },
    {
        "name": "lilly-ann roche",
        "email": "lilly-ann.roche@mail.com",
        "image": "Lilly-Ann-Roche",
        "messages": 8
    },
    {
        "name": "giulia haworth",
        "email": "giulia.haworth@mail.com",
        "image": "Giulia-Haworth",
        "messages": 3
    },
    {
        "name": "dawson humphrey",
        "email": "dawson.humphrey@mail.com",
        "image": "Dawson-Humphrey",
        "messages": 2
    },
    {
        "name": "reilly mccullough",
        "email": "reilly.mccullough@mail.com",
        "image": "Reilly-Mccullough",
        "messages": 3
    }
]

const MyItemRender = props => {
let item = props.dataItem;
return <div className='row p-2 border-bottom align-middle' style={{
    margin: 0,
    padding: ".5rem"
    }}>
        <div className='col-2'>
            <Avatar type='img' shape={'circle'} style={{width: "50px", height: "50px"}}>
                <img width={"50px"} src={`https://gist.github.com/simonssspirit/0db46d4292ea8e335eb18544718e2624/raw/2a595679acdb061105c80bd5eeeef58bb90aa5af/${item.image}-round-40x40.png`} />
            </Avatar>
        </div>
        <div className='col-6'>
            <h2 style={{
            fontSize: 16,
            color: '#454545',
            marginBottom: 0,
            fontWeight: "bold",
            marginLeft: "1.5rem"
        }} className="text-uppercase">{item.name}</h2>
            <div style={{
                fontSize: 12,
                color: "#a0a0a0",
                marginLeft: "1rem"
                }}>{item.email}</div>
            </div>
    </div>;
};

const ListViews = () => {
    return <div>
        <ListView data={contacts} item={MyItemRender} style={{ width: "100%" }} />
        </div>;
};

export default ListViews

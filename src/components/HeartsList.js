// import Heart from './Heart';
import CandyColorHeart from "./CandyColoredHeart";

// const messages = [
//     'cool cud',
//     'me my <3',
//     'you are bear',
//     'team bear',
//     'time hug',
//     'fang',
//     'bog love',
//     'me have love',
//     'all hover',
//     'sweat poo',
//     'u hack',
//     'stank love',
//     'heart me',
//     'wink bear',
//     'bear bear',
//     'be my bear',
//     'yank o way',
//     'mage love',
//     'oy',
//     'in a fan'
// ];

// const HeartsList = () => {
//     return (
//         <div className='hearts-container'>
//             {messages.map((message, index) => (
//                 <CandyColorHeart key={index} msg={message} />
//             ))}
//         </div>
//     );
// };

import { Component } from "react";

class HeartsList extends Component {
    constructor() {
        super();
        this.messages = [
            'cool cud',
            'me my <3',
            'you are bear',
            'team bear',
            'time hug',
            'fang',
            'bog love',
            'me have love',
            'all hover',
            'sweat poo',
            'u hack',
            'stank love',
            'heart me',
            'wink bear',
            'bear bear',
            'be my bear',
            'yank o way',
            'mage love',
            'oy',
            'in a fan'
        ];
    }
    render() {
        return (
            <div className="hearts-container">
                {this.messages.map((message, index) => (
                    <CandyColorHeart key={index} msg={message} />
                ))}
            </div>
        );
    }
}

export default HeartsList;
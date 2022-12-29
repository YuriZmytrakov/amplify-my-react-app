import HeartLogo from '../assets/heart.svg';

// const Heart = (props) => {
//     return (
//         <div className='heart'>
//             <img className='heart-img' src={HeartLogo} alt='heart' />
//             <p className='heart-message'>{props.msg}</p>
//         </div>
//     )
// };

// export default Heart;

import { Component } from 'react';

class Heart extends Component {
    render() {
        return (
            <div className='heart'>
                <img className='heart-img' src={HeartLogo} alt='heart' />
                <p className='heart-message'>{this.props.msg}</p>
            </div>
        );
    }
}

export default Heart;
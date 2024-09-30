// // src/components/Footer.js
// import React from 'react';

// const Footer = () => {
//     return ( <
//         footer className = "bg-dark text-white py-4 mt-auto" >
//         <
//         div className = "container text-center" >
//         <
//         p > & copy; { new Date().getFullYear() }
//         E - Shop.All rights reserved. < /p> <
//         /div> <
//         /footer>
//     );
// };

// export default Footer;




// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return ( <
        footer className = "bg-dark text-white py-4 mt-auto d-flex justify-content-bottom align-items-bottom container" >
        <
        div className = "text-center" >
        <
        p > & copy; { new Date().getFullYear() }
        E - Shop.All rights reserved. < /p> < /
        div > <
        /footer>
    );
};

export default Footer;
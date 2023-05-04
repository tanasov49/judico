import React from 'react';
interface IMain {
    children: React.ReactNode
}
function Main({children}: IMain) {
    return (
        <main className='main'>
            {children}
        </main>
    );
}

export default Main;
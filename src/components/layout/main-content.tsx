import React from 'react';
import {Link} from 'react-router-dom';
import RocketLogo from '@assets/branding/rocket.svg';
import {pathUtils} from '@utilities';

function MainContent(props: {children: React.ReactNode}) {
    const logoURL: string = pathUtils.isSurveyPath(window.location.pathname)
        ? pathUtils.getRootPath(window.location.pathname)
        : '/';

    return (
        <React.Fragment>
            <header>
                <div className='absolute top-0 left-0 h-12 m-4 lg:h-16'>
                    <Link
                        to={logoURL}
                        className={'ringable rounded centering-row'}
                    >
                        <img
                            src={RocketLogo}
                            alt='FastSurvey Icon'
                            className='w-12 h-12 p-1 lg:w-16 lg:h-16 lg:p-2'
                        />
                        <div className='mx-2 text-xl text-grey-500 lg:text-2xl font-weight-700 rubik'>
                            FastSurvey
                        </div>
                    </Link>
                </div>
            </header>
            <main className='w-screen min-h-screen px-2 pt-24 pb-20 bg-gray-100 xl:pb-32 xl:pt-16 centering-col'>
                {props.children}
            </main>
        </React.Fragment>
    );
}

export default MainContent;

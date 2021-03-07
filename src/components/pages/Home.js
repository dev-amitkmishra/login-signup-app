import React from 'react';
import { withRouter } from 'react-router';
import { WELCOMETEXT } from '../../constants';
import Button from '../atoms/Button';
import Text from '../atoms/Text';

const Home = ({ username, logoutHandler }) => {
    return (
        <>
            <div className="ui card">
                <div className="image">
                    <img src="/user.png" alt='user' />
                </div>
                <div className="content">
                    <Text text={`${WELCOMETEXT} ${username}`} />
                </div>
            </div>
            <Button handler={logoutHandler} text='Logout' classes="ui primary button" />
        </>
    )
};

export default withRouter(Home);
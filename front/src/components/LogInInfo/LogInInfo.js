import defaultAvatar from '../../assets/avatar/defaultAvatar.png';

const LogInInfo = () => {
    return (
        <div className='loginBox'>
            <figure>
                <img src={defaultAvatar} alt='userAvatar' />
            </figure>
            <div className='loginBox_Data'>
                <h4>Username</h4>
                <span>Role</span>
            </div>
        </div>
    );
};

export default LogInInfo;

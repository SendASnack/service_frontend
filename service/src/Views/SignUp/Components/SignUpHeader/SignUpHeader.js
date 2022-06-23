import './SignUpHeader.css';

const SignUpHeader = () => {
    return (
        <div className='sign-up-header' data-testid="sign-up-header">
            <h2 className='sign-up-header-title'>Sign Up</h2>
            <span className='sign-up-header-login'>You already have an account? <a className='link' href='#'>Login</a>!</span>
        </div>
    );
}

export default SignUpHeader;
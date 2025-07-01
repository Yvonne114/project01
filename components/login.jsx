import { GoogleLogin } from '@react-oauth/google';

const clientId="653715919293-i2tu31bg1durftntsi7hg5i2leuqhc1i.apps.googleusercontent.com";

function Login() {

	const onSuccess = (res) => {
		console.log("Login Success! Current user: ", res.profileObj);
	}

	const onFailure = (res) => {
		console.log("Login Failed!", res);
	}

	return(
		<div id="signInButton">
			<GoogleLogin
				clientId={clientId}
				buttonText="Login"
				onSuccess={onSuccess}
				onFailure={onFailure}
				cookiePolicy={'single_host_orgin'}
				isSignedIn={true}
			/>
		</div>
	)
}

export default Login;
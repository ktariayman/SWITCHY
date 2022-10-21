import React from 'react';
import GoogleLogin from 'react-google-login';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/logo.png';
import { client } from '../client';
const Login = () => {
  const navigate = useNavigate();
  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response?.profileObj));
    const { name, googleId, imageUrl } = response?.profileObj;
    console.log(response)
    const doc = {
      _id: googleId,
      _type: 'user',
      userName: name,
      image: imageUrl,
    };
    client.createIfNotExists(doc).then(() => {
      navigate('/', { replace: true });
    });
  };

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className=" relative w-full  " style={{height:"100vh"}}>
       
        {/* <img           className="w-full h-full object-cover"
                    src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.15752-9/275395978_4821649441203469_768457593443159779_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=ae9488&_nc_ohc=RLDevpvpnJUAX_kemGr&_nc_ht=scontent.ftun16-1.fna&oh=03_AVJYxvITHNxoV4xZhw7vM4zlhsKdxf_9W-tHzxGjMZyLOg&oe=6256D020"/>  */}
        <div className='flex justify-start items-center '>
        <img className="w-full h-full object-contain " style={{height:"100vh"}} src="https://scontent.ftun16-1.fna.fbcdn.net/v/t1.15752-9/275767222_3038867976442192_3595098594277279873_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=4VHAYswI1YMAX8KirPD&_nc_ht=scontent.ftun16-1.fna&oh=03_AVJik1zb3kWCsG5q0mA7wTM22sSk49O3PcpRi0NpxEfpag&oe=6258F527"/>


        </div>
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0    bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" />
          {/* <h1 style={{fontSize:"55px" , color:"#fff"}}>Switchy</h1> */}

          </div>

          <div className="shadow-2xl">
            <GoogleLogin
              clientId={`${process.env.REACT_APP_GOOGLE_API_TOKEN}`}
              render={(renderProps) => (
                <button
                  type="button"
                  className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  <FcGoogle className="mr-4" /> Sign in with google
                </button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy="single_host_origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

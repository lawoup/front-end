import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import LoadingOverlay from 'react-loading-overlay';
import GoogleButton from '../../components/GoogleButton/GoogleButton';
import Bannner from '../../assets/spreadsheet.svg';
import { signInWithGoogle } from '../../services/AuthService';

const Login: React.FC = () => {
  const { isLoading, isError, mutate } = useMutation(signInWithGoogle);

  useEffect(() => {
    if (isError) {
      console.log(isError);
      toast.error('Something went wrong')
    }
  }, [isError]);

  return (
    <div className="flex flex-wrap h-screen items-center justify-center py-5">
      <div className="w-full md:w-2/3 capitalize flex flex-col items-center justify-center lg:items-start">
        <h1 className="font-bold text-3xl md:text-[3vw] mb-4 lg:ml-[15%]">
          Worksheet Updater
        </h1>
        <p className="text-primary-focus mb-10 lg:ml-[15%] text-sm">
          Hassle free updates for your timesheets
        </p>
        <img src={Bannner} className="w-3/4 lg:ml-[15%]" />
      </div>
      <div className="w-full md:w-1/3 flex items-center justify-center">
        <GoogleButton onClick={mutate} />
      </div>
      <LoadingOverlay
        active={isLoading}
        spinner
        text="Authenticating with google..."
      />
    </div>
  );
}

export default Login;
import GoogleLogo from '../../assets/google-brands.svg';

interface Props {
  onClick: () => void;
}

const GoogleButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="btn btn-primary">
      <img src={GoogleLogo} className="w-6 h-6 mr-2" />
      Continue with google
    </button>
  );
};

export default GoogleButton;

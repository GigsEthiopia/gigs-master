import { useEffect, useState } from "react";
import * as Yup from "yup";

import AuthService from "../../../../services/auth/AuthService";
import { useNavigate } from "react-router-dom";
import { useCoverStore } from "../../../../state";
import EventBus from "../../../../utils/EventBus";

interface LoginViewModel {
  loading: boolean;
  message: string;
  validationSchema: Yup.ObjectSchema<any>;
  handleLogin: (formValue: { email: string; password: string }) => void;
  checkCurrentUser: () => void;
}

export default function LogInViewModel(): LoginViewModel {
  const navigate = useNavigate();
  const { setCurrentUser, onLogout } = useCoverStore();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue: { email: string; password: string }) => {
    const { email, password } = formValue;

    setMessage("");
    setLoading(true);

    AuthService.login(email, password)
      .then(() => {
       window.location.reload();
       setCurrentUser(AuthService.getCurrentUser());
       navigate(`/home/`);
      })
      .catch((error: any) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      });
  };
  // Use the useEffect hook to register and unregister the logout event listener
  useEffect(() => {
    EventBus.on("logout", onLogout);
  }, []); // Add onLogout as a dependency

  const checkCurrentUser = () => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      navigate(`/home`);
    }
  };

  return {
    loading,
    message,
    validationSchema,
    handleLogin,
    checkCurrentUser,
  };
}

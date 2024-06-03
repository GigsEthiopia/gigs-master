import { useEffect, useState } from "react";
import AuthService from "../../../services/auth/AuthService";
import { useNavigate } from "react-router-dom";

interface NewsFeedViewModel {
  userState: boolean;
}

export default function NewsFeedViewModel(): NewsFeedViewModel {
  const navigate = useNavigate();
  let userState = true;

  const checkCurrentUser = () => {
    const currentUser = AuthService.getCurrentUser();

    if (currentUser) {
      userState = true;
    }
  };

  return {
    userState,
  };
}

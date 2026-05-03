import React, { useEffect, useRef } from 'react'
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

interface Props {}

const Suppliers = (props: Props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;
  const toastShowRef = useRef(false);

  useEffect(() => {
    
    console.log("items.tsx useEffect: toastShowRef.current = ", toastShowRef.current)
    
    if (!message || toastShowRef.current) return;
  
    toastShowRef.current = true;
    toast.success(message);
    
    navigate(location.pathname,{ // navigate to this pageitself.
      replace: true,// Replace current history
      state: {}, // Clear navigation state.
    })

  } , [message, navigate, location.pathname] );
  
  return (
    <div>Suppliers</div>
  )
}

export default Suppliers
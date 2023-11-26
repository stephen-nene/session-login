//ServerCom.jsx
import axios from "axios";
import { message } from "antd";

import {  loginAction, logout, signupAction } from "../store/actions/userAction"
import { setUsers} from "../store/actions/appAction";
import{ addNewUser} from '../store/actions/appAction'

// const apiUrl = 'http://127.0.0.1:3000/api'
const apiUrl = '/api'


function showMessage(type, content, duration) {
    return message[type]({
      content,
      duration,
    });
  }
  export const handleGetUser = async (navigate,dispatch) => {
  
    try {
      const response = await axios.get(`${apiUrl}/me`);
      if (response.status === 200) {
        dispatch(loginAction(response.data.user));
        navigate('/');
        showMessage('success', 'Logged in successfully', 1);
      } else {
        navigate('/login');
        console.log(response.data);
        showMessage('error', 'Login failed. Please try again.', 1);
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        navigate('/login');
      } else {
        showMessage('error', 'Server error. Please try again later.');
      }
    } 
  };
  // export const handleGetCurrentUser = (dispatch, navigate, setLoginPrompt) => {
  //   // Check if user data is in local storage
  //   const userDataString = localStorage.getItem('userData');
  
  //   if (userDataString) {
  //     try {
  //       const userData = JSON.parse(userDataString);
  
  //       // Check if user data is not expired
  //       if (userData.expires > new Date().getTime()) {
  //         // User data is valid, dispatch it
  //         dispatch(login(userData.data));
  //         setLoginPrompt(true);
  //         return; // Exit the function
  //       }
  //     } catch (error) {
  //       // Handle JSON parsing error
  //       console.error('Error parsing user data:', error);
  //     }
  //   }
  //   console.log('error')
  
  //   // If no valid user data found in local storage, you can handle it here
  //   // For example, redirect the user to the login page
  //   // setTimeout(() => { navigate('/login'); }, 3);
  // };
  
  
  export const handleServerLogin = async (formData, dispatch, navigate) => {
    const loadingMessage = showMessage('loading', 'Logging in ...', 0);
  
    try {
      const response = await axios.post(`${apiUrl}/login`, formData);
      if (response.status === 200) {
        dispatch(loginAction(response.data.user));
        showMessage('success', 'Logged in successfully', 1);
        navigate('/profile');
      } else {
        showMessage('error', 'Login failed. Please try again.', 1);
      }
    } catch (error) {
      // Check if error.response exists before accessing its properties
      if (error.response && error.response.data && error.response.data.error) {
        showMessage('error', error.response.data.error);
        console.log(error)
      } else {
        showMessage('error', 'Server error. Please try again later.');
      }
    } finally {
      loadingMessage();
    }
  };

  
  export const handleServerLogout = async (dispatch, navigate) => {
    const loadingMessage = showMessage('loading', 'Logging out ...', 0);
    try {
      const response = await axios.delete(`${apiUrl}/logout`);
  
      if (response.status === 200) {
        dispatch(logout());
        navigate('/login')
        showMessage('success', 'Logged out successfully', 1);
      } else {
        showMessage('error', 'Logout failed. Please try again .', 1);
      }
    } catch (error) {
      console.log(error)
      // Handle any logout errors here if necessary.
      showMessage('error', 'Logout failed. Please try again.', 1);
    } finally {
      loadingMessage();
    }
  };
  
  export const handleServerSignup = async (formData, setError, dispatch, navigate) => {
    const loadingMessage = showMessage('loading', 'Signing up...', 0);
  
    try {
      const response = await axios.post(`${apiUrl}/users`, { ...formData, sendResetEmail: false });
  
      if (response.status === 201) {
        showMessage('success', 'Signed up successfully', 3);
        dispatch(signupAction(response.data));
        navigate('/dashboard');
        setError('');
      } else {
        showMessage('error', 'Signup failed. Please try again.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data);
        console.error('Error:', error.response.data);
        showMessage('error', 'Errors: Please check the fields.');
      } else {
        console.error('Error in response:', error);
        showMessage('error', 'Server error. Please try again later.');
      }
    } finally {
      loadingMessage();
    }
  
  };
  
  export const handleCreateDebt = async (debt,navigate,  dispatch) => {
    const loadingMessage = showMessage("loading", "Creating debt...", 0);
  
    try {
      const response = await axios.post(`${apiUrl}/debts`, debt);
  
      if (response.status === 201) {
        showMessage("success", "Debt created successfully", 3);
        dispatch(addNewDebt(response.data));
        navigate('/dashboard/debts');
      } else {
        showMessage("error", "Debt creation failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response);
        // setError(error.response.data);
        showMessage("error", "Errors: Please check the fields.");
      } else {
        console.error("Error in response:", error);
        showMessage("error", "Server error. Please try again later.");
      }
    } finally {
      loadingMessage();
    }
  };

  export const handleCreatePayroll = async (payroll,navigate,  dispatch,id) => {
    const loadingMessage = showMessage("loading", "Creating payroll...", 0);
  
    try {
      const response = await axios.post(`${apiUrl}/payrolls`, payroll);
  
      if (response.status === 201) {
        console.log(response.data)        
        showMessage("success", "Payroll created successfully", 3);
        // dispatch(addNewDebt(response.data));
        navigate(`/dashboard/user/${id}`);
      } else {
        showMessage("error", "Payroll creation failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response);
        // setError(error.response.data);
        showMessage("error", "Errors: Please check the fields.");
      } else {
        console.error("Error in response:", error);
        showMessage("error", "Server error. Please try again later.");
      }
    } finally {
      loadingMessage();
    }
  };

  export const handleCreateUser = async (user,navigate,  dispatch) => {
    const loadingMessage = showMessage("loading", "Creating user...", 0);
  
    try {
      const response = await axios.post(`${apiUrl}/users`, user);
  
      if (response.status === 201) {
        showMessage("success", "User created successfully", 3);
        dispatch(addNewUser(response.data));
        navigate('/dashboard/users');
      } else {
        showMessage("error", "User creation failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response);
        // setError(error.response.data);
        showMessage("error", "Errors: Please check the fields.");
      } else {
        console.error("Error in response:", error);
        showMessage("error", "Server error. Please try again later.");
      }
    } finally {
      loadingMessage();
    }
  };

  export const handleCreateRoute = async (route,navigate,  dispatch) => {
    const loadingMessage = showMessage("loading", "Creating route...", 0);
  
    try {
      const response = await axios.post(`${apiUrl}/routes`, route);
  
      if (response.status === 201) {
        showMessage("success", "Route created successfully", 3);
        dispatch(addNewRoute(response.data));
        navigate('/dashboard/routes');
      } else {
        showMessage("error", "Debt creation failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response);
        // setError(error.response.data);
        showMessage("error", "Errors: Please check the fields.");
      } else {
        console.error("Error in response:", error);
        showMessage("error", "Server error. Please try again later.");
      }
    } finally {
      loadingMessage();
    }
  };

  export const handleCreateOrder = async (order,navigate,  dispatch) => {
    const loadingMessage = showMessage("loading", "Creating order...", 0);
  
    try {
      const response = await axios.post(`${apiUrl}/orders`, order);
  
      if (response.status === 201) {      
        showMessage("success", "Order created successfully", 3);
        dispatch(addNewOrder(response.data));
        navigate('/dashboard/orders');
      } else {
        showMessage("error", "Order creation failed. Please try again.");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response);
        // setError(error.response.data);
        showMessage("error", "Errors: Please check the fields.");
      } else {
        console.error("Error in response:", error);
        showMessage("error", "Server error. Please try again later.");
      }
    } finally {
      loadingMessage();
    }
  }; 
  
  export const handleCreateBlog = async (formData, closeModal, dispatch, navigate) => {
    const loadingMessage = showMessage('loading', 'Creating blog...', 0);
  
    try {
      const response = await axios.post(`${apiUrl}/articles`, formData);
  
      if (response.status === 201) {
        showMessage('success', 'Blog Creation successful', 3);
        // console.log(response.data)
        closeModal()
        dispatch(setAddNewArticle(response.data));
        // navigate('/dashboard');
      } else {
        showMessage('error', 'Blog Creation failed. Please try again.');
      }
    } catch (error) {
      if (error.response && error.response.data) {
        console.error('Error:', error);
      } else {
        console.error('Error in response:', error);
        showMessage('error', 'Server error. Please try again later.');
      }
    } finally {
      loadingMessage();
    }
  
  };
  
  export const fetchOrders = async (dispatch) => {
    const loadingMessage = showMessage('loading', 'Fetching orders...', 0);
  
  
    try {
      //   const response = await axios.get('/api/articles');
      const response = await axios.get(`${apiUrl}/orders`);
  
      if (response.status === 200) {
        dispatch(setOrders(response.data));
        showMessage('success', 'Orders fetched successfully', 1);
      } else {
        showMessage('error', 'Failed to fetch orders. Please try again.', 1);
      }
    } catch (error) {
      console.error('Error fetching orders:', error);
      showMessage('error', 'Failed to fetch orders. Please try again later.', 1);
    } finally {
      loadingMessage();
    }
  };

  export const fetchDebts = async (dispatch) => {
    const loadingMessage = showMessage('loading', 'Fetching debts...', 0);
  
  
    try {
      //   const response = await axios.get('/api/articles');
      const response = await axios.get(`${apiUrl}/debts`);
  
      if (response.status === 200) {
        dispatch(setDebts(response.data));
        showMessage('success', 'Debts fetched successfully', 1);
      } else {
        showMessage('error', 'Failed to debts articles. Please try again.', 1);
      }
    } catch (error) {
      console.error('Error fetching debts:', error);
      showMessage('error', 'Failed to fetch debts. Please try again later.', 1);
    } finally {
      loadingMessage();
    }
  };

  export const fetchUsers = async (dispatch) => {
    const loadingMessage = showMessage('loading', 'Fetching users...', 0);
  
    try {
      //   const response = await axios.get('/api/users');
      const response = await axios.get(`${apiUrl}/users`);
      if (response.status === 200) {
        dispatch(setUsers(response.data));
        showMessage('success', 'users fetched successfully', 1);
      } else {
        showMessage('error', 'Failed to fetch users. Please try again.', 1);
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      showMessage('error', 'Failed to fetch users. Please try again later.', 1);
    } finally {
      loadingMessage();
    }
  };

  export const fetchUser = async (id,setSelectedUser) => {
    const loadingMessage = showMessage('loading', 'Fetching user...', 0);
  
    try {
      const response = await axios.get(`${apiUrl}/users/${id}`);
      if (response.status === 200) {
        setSelectedUser(response.data)
        showMessage('success', 'user fetched successfully', 1);
      } else {
        showMessage('error', 'Failed to fetch user. Please try again.', 1);
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      showMessage('error', 'Failed to fetch user. Please try again later.', 1);
    } finally {
      loadingMessage();
    }
  };

  export const updateUser = async (id, updatedUser, setSelectedUser) => {
    const loadingMessage = showMessage('loading', 'Updating user...', 0);
  
    try {
      const response = await axios.put(`${apiUrl}/users/${id}`, updatedUser);
      if (response.status === 200) {
        console.log(response.data)
        setSelectedUser(response.data);
        showMessage('success', 'User updated successfully', 1);
      } else {
        showMessage('error', 'Failed to update user. Please try again.', 1);
      }
    } catch (error) {
      console.error('Error updating user:', error);
      showMessage('error', 'Failed to update user. Please try again later.', 1);
    } finally {
      loadingMessage();
    }
  };
  

  export const fetchRoutes = async (dispatch) => {
    const loadingMessage = showMessage('loading', 'Fetching routes...', 0);
  
  
    try {
      const response = await axios.get(`${apiUrl}/routes`);
  
      if (response.status === 200) {
        dispatch(setRoutes(response.data));
        showMessage('success', 'Routes fetched successfully', 1);
      } else {
        showMessage('error', 'Failed to routes articles. Please try again.', 1);
      }
    } catch (error) {
      console.error('Error fetching routes:', error);
      showMessage('error', 'Failed to fetch routes. Please try again later.', 1);
    } finally {
      loadingMessage();
    }
  };

  export const handleUpdate = (dispatch, closeModal, editableFields, debt) => {
    const loadingMessage = message.loading({ content: `Updating debt...${debt.id}`, duration: 0 });
    axios.put(`${apiUrl}/debts/${debt.id}`, editableFields)
        .then((response) => {
            dispatch(updateDebt(response.data))
            closeModal()
            message.success("Debt updated successfully");
        })
        .catch((error) => {
            message.error(`Error updating debt: ${error.message}`);
            console.error('Error updating debt:', error);
        })
        .finally(() => {
            loadingMessage();
        })
};

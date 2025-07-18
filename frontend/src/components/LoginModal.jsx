import React, { useState } from "react";
import { useUserStore } from "../stores/useUserStore";

const LoginModal = ({ onClose, onLoginSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const { login, signup, user } = useUserStore();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (isLogin) {
      await login(formData.email, formData.password);
    } else {
      await signup(formData);
    }
    setLoading(false);
    if (useUserStore.getState().user) {
      onLoginSuccess();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-900 rounded-lg p-6 w-full max-w-md text-white">
        <h2 className="text-2xl font-semibold mb-4">{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white mb-4"
                required
              />
            </div>
          )}
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white mb-4"
              required
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 rounded bg-gray-800 text-white mb-4"
              required
            />
          </div>
          {!isLogin && (
            <div>
              <label className="block mb-2 font-medium">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 rounded bg-gray-800 text-white mb-4"
                required
              />
            </div>
          )}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-emerald-500 rounded hover:bg-emerald-600 transition-colors"
            >
              {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
              className="text-sm underline"
            >
              {isLogin ? "Create an account" : "Already have an account?"}
            </button>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="mt-4 w-full px-4 py-2 bg-red-600 rounded hover:bg-red-700 transition-colors"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;

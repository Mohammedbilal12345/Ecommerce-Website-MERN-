import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const Profile = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobileNumber: "",
    profilePicture: "", // Store profile picture
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Retrieve user data from local storage
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      setUserData(JSON.parse(storedData));
    }
  }, []);

  const handleSave = () => {
    // Save data to local storage
    localStorage.setItem("userData", JSON.stringify(userData));
    setIsEditing(false); // Exit edit mode
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData((prev) => ({ ...prev, profilePicture: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBack = () => {
    // Navigate to /cart when Back button is clicked
    navigate("/cart");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-700">Welcome, {userData.name || "User"}!</h2>
        </div>

        <div className="flex justify-center mb-6">
          <div className="relative">
            <img
              src={userData.profilePicture || "/images/default-profile.png"} // Default image path
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-lg"
            />
            <input
              type="file"
              onChange={handleProfilePictureChange}
              className="absolute bottom-0 right-0 bg-green-500 text-white p-2 rounded-full cursor-pointer opacity-0 hover:opacity-80 transition-opacity"
            />
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-start mb-4">
          <button
            onClick={handleBack} // Call the handleBack function to navigate to /cart
            className="bg-gray-500 text-white p-3 rounded-md hover:bg-gray-600 transition"
          >
            Back to Cart
          </button>
        </div>

        {isEditing ? (
          <div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full p-3 mt-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full p-3 mt-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  value={userData.mobileNumber}
                  onChange={handleChange}
                  placeholder="Enter your mobile number"
                  className="w-full p-3 mt-2 border rounded-md border-gray-300 focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={handleSave}
                className="bg-green-500 text-white p-3 rounded-md w-1/3 hover:bg-green-600 transition"
              >
                Save
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-gray-700 p-3 rounded-md w-1/3 hover:bg-gray-400 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-600">
              <strong>Email:</strong> {userData.email || "Not provided"}
            </p>
            <p className="text-gray-600">
              <strong>Mobile Number:</strong> {userData.mobileNumber || "Not provided"}
            </p>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-green-500 text-white p-3 rounded-md w-full hover:bg-green-600 transition"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

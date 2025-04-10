import { useState, useEffect } from "react";
import { X, Calendar, User, Phone, MapPin, Home, CheckCircle } from "lucide-react";
import toast from "react-hot-toast";

const BookingForm = ({ setIsDrawerOpen }) => {
  const [referenceId, setReferenceId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    pincode: "",
    address: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  

  useEffect(() => {
    if (isClient && isSubmitted) {
      const randomId = `INV-${Math.floor(100000 + Math.random() * 900000)}`;
      setReferenceId(randomId);
    }
  }, [isSubmitted, isClient]);

  const validateForm = () => {
    const newErrors = {};
  
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = "Only letters are allowed";
    }
  
    // Age validation
    if (!formData.age) {
      newErrors.age = "Age is required";
    } else if (formData.age < 1 || formData.age > 120) {
      newErrors.age = "Age must be between 1 and 120";
    }
  
    // Gender validation
    if (!formData.gender) {
      newErrors.gender = "Gender is required";
    }
  
    // Phone validation (supports +91 or similar codes)
    const phoneRegex = /^\+\d{1,4}\s?[6-9]\d{9}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone =
        "Enter a valid phone number with country code (e.g., +91 9876543210)";
    }
  
    // Pincode validation
    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be 6 digits";
    }
  
    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    }
  
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      setIsSubmitting(true);
      const ticketNumber = `INV-${Math.floor(100000 + Math.random() * 900000)}`;
      const payload = { ...formData, ticketNumber };
  
      try {
        const res = await fetch("/api/sendMessage", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
  
        const result = await res.json();
  
        if (!res.ok || result.success === false) {
          if (result.message === "Phone number already exists." && result.data) {
            // Phone number already exists — show full details from backend
            toast.success(`Phone number already exists!Ticket: ${result.data.ticketNumber}`);
            setReferenceId(result.data.ticketNumber);
            setIsDrawerOpen(false)
          } else {
            // General error
            alert(result.error || "Something went wrong.");
          }
  
          setIsSubmitting(false);
          return;
        }
  
        // Success handling
        await new Promise(resolve => setTimeout(resolve, 1000));
  
        setReferenceId(ticketNumber);
        setIsSubmitted(true);
        setIsSubmitting(false);
      } catch (error) {
        console.error("API Error:", error);
        setIsSubmitting(false);
      }
    }
  };
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) return null;

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xs bg-white ">
        <div className="max-w-md w-full mx-4 bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all">
          <div className="relative p-8">
            <button 
              onClick={() => setIsDrawerOpen(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={24} />
            </button>
            
            <div className="text-center">
              <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-green-100 mb-6">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-6">Thank you, {formData.name}! Your booking has been successfully completed.</p>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6 border border-gray-200">
                <div className="text-sm text-gray-500 mb-1">Your Reference ID</div>
                <div className="text-2xl font-mono font-bold text-indigo-600">{referenceId}</div>
                <div className="text-xs text-gray-400 mt-2">Please save this for future reference</div>
              </div>
              
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition duration-200 ease-in-out transform hover:-translate-y-1"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="max-w-3xl w-full mx-4 my-8 bg-white rounded-xl shadow-2xl overflow-hidden transform transition-all">
        <div className="relative">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 pt-8 pb-16 px-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mt-16 -mr-16"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-5 rounded-full -mb-16 -ml-16"></div>
            
            <button 
              onClick={() => setIsDrawerOpen(false)} 
              className="absolute top-4 right-4 text-white hover:text-gray-200 transition"
            >
              <X size={24} />
            </button>
            
            <h1 className="text-3xl font-bold text-white relative z-10">Event Booking</h1>
            <p className="text-indigo-100 mt-2 relative z-10">Please fill out your details below</p>
          </div>
          
          {/* Form */}
          <div className="px-8 pt-6 pb-8  bg-white rounded-t-3xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <input
                      name="name"
                      type="text"
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-gray-400" />
                    </div>
                    <input
                      name="age"
                      type="number"
                      placeholder="Age"
                      value={formData.age}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border ${errors.age ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition`}
                    />
                  </div>
                  {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User size={18} className="text-gray-400" />
                    </div>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border ${errors.gender ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition appearance-none bg-white`}
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-gray-400" />
                    </div>
                    <input
                      name="phone"
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition`}
                    />
                  </div>
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin size={18} className="text-gray-400" />
                    </div>
                    <input
                      name="pincode"
                      type="text"
                      placeholder="Pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border ${errors.pincode ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition`}
                    />
                  </div>
                  {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
                </div>

                <div className="space-y-1">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Home size={18} className="text-gray-400" />
                    </div>
                    <input
                      name="address"
                      type="text"
                      placeholder="Address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`w-full pl-10 pr-4 py-3 border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition`}
                    />
                  </div>
                  {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                </div>
              </div>

              <div className="flex items-center justify-end pt-4">
                <button
                  type="button"
                  onClick={() => setIsDrawerOpen(false)}
                  className="mr-4 py-3 px-6 bg-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="py-3 px-8 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md transition duration-200 ease-in-out transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </div>
                  ) : "Submit Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
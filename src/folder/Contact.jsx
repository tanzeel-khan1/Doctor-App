import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/contacts",
        data
      );

      if (response.status === 200 || response.status === 201) {
        setMessage({
          type: "success",
          text: "✅ Form Submitted Successfully!",
        });
        reset();
      } else {
        setMessage({
          type: "error",
          text: "Something went wrong! Please try again.",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage({
        type: "error",
        text: error.response?.data?.message || "❌ Server error! Try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center items-center py-10 px-4">
      <motion.div
        className="w-full max-w-6xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.form
          className="bg-white p-6 md:p-10 rounded-xl shadow-lg w-full space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Full Name"
                {...register("FullName", { required: "Full Name is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
              />
              {errors.FullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.FullName.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="email"
                placeholder="Email"
                {...register("Email", { required: "Email is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
              />
              {errors.Email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Email.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("PhoneNumber", {
                  required: "Phone Number is required",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"/>
              {errors.PhoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.PhoneNumber.message}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <input
                type="text"
                placeholder="Department"
                {...register("Department", {
                  required: "Department is required",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
              />
              {errors.Department && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.Department.message}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <textarea
              placeholder="Additional Information"
              rows={3}
              {...register("AdditionalInformation")}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none transition-colors"
            />
            <input
              type="datetime-local"
              {...register("DateandTime")}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors"
            />
          </div>

          <AnimatePresence>
            {message && (
              <motion.div
                key="message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className={`p-4 rounded-md text-center font-medium ${
                  message.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {message.text}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex justify-center pt-4">
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-teal-500 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              } text-white font-medium px-8 py-3 rounded-md shadow-sm transition-colors cursor-pointer`}
              whileHover={!isSubmitting ? { scale: 1.05 } : {}}
              whileTap={!isSubmitting ? { scale: 0.95 } : {}}
            >
              {isSubmitting ? "Submitting..." : "Confirm"}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
}

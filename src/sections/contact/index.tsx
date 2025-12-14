import { useForm } from "react-hook-form";
import { SelectedPage } from "@/reusables/types";
import { motion } from "framer-motion";
import { useState } from "react";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const inputStyles = `mb-5 w-full rounded-xl bg-white border-2 border-purple-soft/50 text-text-dark
  px-5 py-3 placeholder-text-light focus:border-purple-main focus:outline-none transition-colors duration-300`;

  const {
    register,
    trigger,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const isValid = await trigger();
    
    if (!isValid) {
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        reset();
        setTimeout(() => setSubmitSuccess(false), 5000);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-gradient-to-b from-bg-white to-bg-light py-10 px-6"
    >
      <motion.div 
        className="max-w-4xl mx-auto"
        onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}
      >
        {/* HEADER */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative mb-8">
            <div className="text-[120px] md:text-[200px] font-bold text-purple-soft/30 leading-none text-center select-none">
              TALK
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-5xl md:text-6xl font-bold text-text-dark">
                GET IN TOUCH
              </h2>
            </div>
          </div>
        </motion.div>

        {/* FORM */}
        <motion.div
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border-2 border-purple-soft/50"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={onSubmit}>
            {/* Web3Forms Access Key */}
            <input 
              type="hidden" 
              name="access_key" 
              value="8d697bca-0ba9-46bf-b4ec-835601a11f5f"
            />

            {/* NAME */}
            <div className="mb-4">
              <label className="block text-text-dark font-semibold mb-2 text-sm">
                Your Name
              </label>
              <input
                className={inputStyles}
                type="text"
                placeholder="John Will"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm -mt-3">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 characters."}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div className="mb-6">
              <label className="block text-text-dark font-semibold mb-2 text-sm">
                Your Email
              </label>
              <input
                className={inputStyles}
                type="email"
                placeholder="johnwill@example.com"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm -mt-3">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div className="mb-6">
              <label className="block text-text-dark font-semibold mb-2 text-sm">
                Message
              </label>
              <textarea
                className={inputStyles}
                placeholder="Hello! I would like to get in touch with you..."
                rows={6}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm -mt-3">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                </p>
              )}
            </div>

            {/* SUCCESS MESSAGE */}
            {submitSuccess && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl"
              >
                ✓ Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {/* SUBMIT BUTTON */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-purple-main text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-purple-light transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
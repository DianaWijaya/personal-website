import { useForm } from "react-hook-form";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HText from "@/shared/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Contact = ({ setSelectedPage }: Props) => {
  const inputStyles = `mb-5 w-full rounded-lg bg-cream-10 text-brown-700
  px-5 py-3 placeholder-brown-500 text-sm`;

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="mx-auto flex w-5/6 flex-col items-center pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Contact)}>
        {/* HEADER */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: -50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <HText>Contact Me</HText>
          <p className="mt-2 text-brown-100">
            Please contact me directly at dianawijaya1234@gmail.com or through this form.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.div
          className="mt-10 flex justify-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <form
            className="w-full max-w-md mx-auto"
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/99c81f49a1a534e947f7693183a12389"
            method="POST"
          >
            <input
              className={inputStyles}
              type="text"
              placeholder="Your name"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-brown-700 text-sm">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}

            <input
              className={inputStyles}
              type="text"
              placeholder="Your email"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-brown-700 text-sm">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className={inputStyles}
              placeholder="Message"
              rows={4}
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="mt-1 text-brown-700 text-sm">
                {errors.message.type === "required" && "This field is required."}
                {errors.message.type === "maxLength" && "Max length is 2000 char."}
              </p>
            )}

            {/* SUBMIT BOTTON */}
            <div className="mt-3 flex justify-center">
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-cream-100 text-brown-700 transition duration-500 hover:bg-brown-300"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;

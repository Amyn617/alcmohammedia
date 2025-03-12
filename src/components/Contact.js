import React, { useContext, useState } from "react";
import { LanguageContext } from "./LanguageContext";

const Contact = () => {
  const { t, language } = useContext(LanguageContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = t("nameRequired");
    if (!formData.email) newErrors.email = t("emailRequired");
    if (!formData.subject) newErrors.subject = t("subjectRequired");
    if (!formData.message) newErrors.message = t("messageRequired");
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      // Handle form submission (e.g., send data to server)
      console.log("Form submitted:", formData);
    }
  };

  return (
    <section
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className="py-10 lg:py-20 mx-auto max-w-7xl px-4 lg:px-8"
      aria-label="contact"
    >
      <div className="text-center mb-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-gray-500 mt-2">
          {t("getInTouch")}
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700">{t("name")}</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700">{t("email")}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700">{t("subject")}</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full p-3 border rounded"
          />
          {errors.subject && <p className="text-red-500">{errors.subject}</p>}
        </div>
        <div>
          <label className="block text-gray-700">{t("message")}</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded"
            rows="5"
          ></textarea>
          {errors.message && <p className="text-red-500">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700 transition"
        >
          {t("submit")}
        </button>
        {submitted && <p className="text-green-500">{t("formSubmitted")}</p>}
      </form>
    </section>
  );
};

export default Contact;

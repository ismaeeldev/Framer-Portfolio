import React, { useState } from "react";
import { mapConfig } from "../data/siteData";

const Contact = () => {
  const [form, setForm] = useState({ fullname: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const isDisabled = !form.fullname.trim() || !form.email.trim() || !form.message.trim() || loading;

  const showToast = (message, type = "info") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: "", type: "" });
    }, 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullname", form.fullname);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("access_key", "0979291c-ba01-42a6-83ab-fb1087b636d8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const data = await res.json();

      if (data.success) {
        showToast("Thank you! I will get back to you as soon as possible.", "success");
        setForm({
          fullname: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Form submission error:", data);
        showToast("Something went wrong. Please try again.", "error");
      }
    } catch (error) {
      console.error("Network error:", error);
      showToast("Network error. Please check your connection and try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="h2 article-title">Get in Touch</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src={mapConfig.src}
            width="400"
            height="300"
            loading="lazy"
            title="Map"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form className="form" data-form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              name="fullname"
              className="form-input"
              placeholder="Full name"
              required
              data-form-input
              value={form.fullname}
              onChange={handleChange}
              disabled={loading}

            />

            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              required
              data-form-input
              value={form.email}
              onChange={handleChange}
              disabled={loading}

            />
          </div>

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            data-form-input
            value={form.message}
            onChange={handleChange}
            disabled={loading}
          ></textarea>

          <button
            className={`form-btn ${loading ? 'loading' : ''}`}
            type="submit"
            data-form-btn
            disabled={isDisabled}
          >
            {loading ? (
              <>
                <div className="spinner"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <ion-icon name="paper-plane"></ion-icon>
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </section>

      {/* Toast Notification */}
      <div className={`toast ${toast.show ? 'show' : ''} ${toast.type}`}>
        <div className="toast-content">
          <div className="toast-icon">
            {toast.type === 'success' && (
              <ion-icon name="checkmark-circle"></ion-icon>
            )}
            {toast.type === 'error' && (
              <ion-icon name="close-circle"></ion-icon>
            )}
            {toast.type === 'info' && (
              <ion-icon name="information-circle"></ion-icon>
            )}
          </div>
          <div className="toast-message">{toast.message}</div>
          <button
            className="toast-close"
            onClick={() => setToast({ show: false, message: "", type: "" })}
          >
            <ion-icon name="close"></ion-icon>
          </button>
        </div>
      </div>

      <style jsx>{`
        .form-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          position: relative;
        }

        .form-btn.loading {
          opacity: 0.8;
          pointer-events: none;
        }

        .spinner {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .form-input:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        /* Toast Styles */
        .toast {
          position: fixed;
          top: 20px;
          right: 20px;
          background: var(--border-gradient-onyx);
          border: 1px solid var(--jet);
          border-radius: 12px;
          padding: 1px;
          max-width: 400px;
          box-shadow: var(--shadow-3);
          transform: translateX(150%);
          transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.25, 1.35);
          z-index: 1000;
          overflow: hidden;
        }

        .toast::before {
          content: '';
          position: absolute;
          inset: 1px;
          background: var(--bg-gradient-jet);
          border-radius: 11px;
          z-index: -1;
        }

        .toast.show {
          transform: translateX(0);
        }

        .toast-content {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 16px;
          position: relative;
          z-index: 1;
        }

        .toast-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .toast.success .toast-icon {
          color: var(--orange-yellow-crayola);
        }

        .toast.error .toast-icon {
          color: var(--bittersweet-shimmer);
        }

        .toast.info .toast-icon {
          color: var(--vegas-gold);
        }

        .toast-message {
          flex: 1;
          color: var(--white-2);
          font-size: var(--fs-6);
          font-weight: var(--fw-400);
          line-height: 1.4;
        }

        .toast-close {
          background: none;
          border: none;
          color: var(--light-gray-70);
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: var(--transition-1);
          flex-shrink: 0;
        }

        .toast-close:hover {
          color: var(--white-2);
          background: rgba(255, 255, 255, 0.1);
        }

        /* Progress Bar */
        .toast::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          height: 3px;
          background: var(--text-gradient-yellow);
          border-radius: 0 0 12px 12px;
          animation: progress 4s linear forwards;
        }

        .toast.success::after {
          background: var(--text-gradient-yellow);
        }

        .toast.error::after {
          background: var(--bittersweet-shimmer);
        }

        .toast.info::after {
          background: var(--vegas-gold);
        }

        @keyframes progress {
          0% {
            width: 100%;
          }
          100% {
            width: 0%;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .toast {
            top: 10px;
            right: 10px;
            left: 10px;
            max-width: none;
            transform: translateY(-150%);
          }

          .toast.show {
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          .toast-content {
            padding: 12px;
            gap: 10px;
          }

          .toast-icon {
            font-size: 18px;
          }

          .toast-message {
            font-size: var(--fs-7);
          }
        }
      `}</style>
    </article>
  );
};

export default Contact;
"use client";

import React, { useState } from 'react';
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useTranslation } from '../../../i18n';

interface ContactFormProps {
  lng: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ lng }) => {
  const [t, setT] = useState<any>(() => (key: string) => key);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  React.useEffect(() => {
    const useTranslationAnon = async () => {
      const { t } = await useTranslation(lng, 'contactForm');
      setT(() => t);
    };
    useTranslationAnon();
  }, [lng]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const usersCollectionRef = collection(db, 'users');
      await addDoc(usersCollectionRef, {
        email,
        firstName,
        phoneNumber: phoneNumber || null,
        createdAt: new Date().toISOString(),
      });

      setSubmitStatus('success');
      setEmail('');
      setFirstName('');
      setPhoneNumber('');
    } catch (error) {
      console.error('Error saving user data: ', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-header">
            <h2>{t('contactForm.title')}</h2>
            <p className="contact-description">{t('contactForm.description')}</p>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="firstName">{t('contactForm.nameLabel')}</label>
              <input
                id="firstName"
                type="text"
                className="form-control"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">{t('contactForm.emailLabel')}</label>
              <input
                id="email"
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                {t('contactForm.phoneLabel')} <span className="optional">({t('contactForm.optional')})</span>
              </label>
              <input
                id="phone"
                type="tel"
                className="form-control"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="consent-text">
              <p>{t('contactForm.consentText')}</p>
              <p>{t('contactForm.revokeConsent')}</p>
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contactForm.submitting') : t('contactForm.submitButton')}
            </button>

            {submitStatus === 'success' && (
              <div className="alert alert-success">
                {t('contactForm.successMessage')}
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="alert alert-danger">
                {t('contactForm.errorMessage')}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

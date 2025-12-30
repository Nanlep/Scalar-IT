import React, { useState } from 'react';
import { X, CheckCircle, Shield, AlertTriangle } from 'lucide-react';
import { Button } from './Button';
import { INQUIRY_TYPES, ORG_SCALES } from '../constants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    scale: ORG_SCALES[0],
    inquiryType: INQUIRY_TYPES[0],
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-scalar-dark bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border-t-4 border-scalar-red">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start mb-6">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Request Enterprise Consultation
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Scalar IT engagements are tailored for enterprise and government entities. 
                      Please provide valid organizational details to proceed.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                 <div>
                    <label className="block text-sm font-medium text-gray-700">Inquiry Type</label>
                    <select 
                      name="inquiryType" 
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-scalar-red focus:border-scalar-red sm:text-sm border"
                    >
                      {INQUIRY_TYPES.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">Organization Scale</label>
                    <select 
                      name="scale" 
                      value={formData.scale}
                      onChange={handleInputChange}
                      className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-scalar-red focus:border-scalar-red sm:text-sm border"
                    >
                      {ORG_SCALES.map(scale => (
                        <option key={scale} value={scale}>{scale}</option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 p-2 border focus:ring-scalar-red focus:border-scalar-red"
                      />
                    </div>
                     <div>
                      <label className="block text-sm font-medium text-gray-700">Business Email</label>
                      <input 
                        type="email" 
                        name="email" 
                        required
                        placeholder="name@company.com"
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 p-2 border focus:ring-scalar-red focus:border-scalar-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700">Organization Name</label>
                      <input 
                        type="text" 
                        name="organization" 
                        required
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 p-2 border focus:ring-scalar-red focus:border-scalar-red"
                      />
                    </div>
                     <div>
                      <label className="block text-sm font-medium text-gray-700">Role / Title</label>
                      <input 
                        type="text" 
                        name="role" 
                        required
                        className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 p-2 border focus:ring-scalar-red focus:border-scalar-red"
                      />
                    </div>
                  </div>

                   <div>
                    <label className="block text-sm font-medium text-gray-700">Project Context (Brief)</label>
                    <textarea 
                      name="details" 
                      rows={3}
                      className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 p-2 border focus:ring-scalar-red focus:border-scalar-red"
                      placeholder="Please describe the scope and primary objectives..."
                    ></textarea>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded text-xs text-gray-500 flex items-start gap-2">
                    <Shield className="w-4 h-4 text-gray-400 shrink-0" />
                    <span>
                      Information submitted via this form is encrypted and processed in strict accordance with our NDA protocols and Data Privacy Policy.
                    </span>
                  </div>
              </div>

              <div className="mt-8 flex justify-end gap-3">
                <Button variant="text" onClick={onClose} type="button">Cancel</Button>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Processing...' : 'Submit Inquiry'}
                </Button>
              </div>
            </form>
          ) : (
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Inquiry Received</h3>
              <div className="mt-2 px-4">
                <p className="text-sm text-gray-500 mb-4">
                  Your consultation request has been logged in our secure CRM. 
                  A Principal Architect or Sector Lead will review your organizational profile and contact you within 24 business hours.
                </p>
                <Button onClick={onClose} variant="outline" fullWidth>Close</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { X, Loader2, CheckCircle, Sparkles, AlertCircle } from 'lucide-react';
import { Button } from './Button';
import { INQUIRY_TYPES, ORG_SCALES } from '../constants';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [referenceId, setReferenceId] = useState('');
  const [error, setError] = useState<string | null>(null);
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
    setError(null);
    setStatusMessage('Preparing project context...');

    try {
      await new Promise(r => setTimeout(r, 600));
      setStatusMessage('Analyzing requirements...');
      
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const contentType = response.headers.get('content-type');
      let result;
      
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
      } else {
        const text = await response.text();
        throw new Error(`Server Response Error: ${response.status} ${response.statusText}`);
      }

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Submission failed');
      }
      
      setStatusMessage('Done.');
      setReferenceId(result.refId);
      setIsSuccess(true);
    } catch (err: any) {
      console.error("Submission Error:", err);
      setError(err.message || 'We could not process your request at this moment. Please email hello@scalar.com');
      setStatusMessage('Error.');
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="fixed inset-0 bg-scalar-dark bg-opacity-60 transition-opacity backdrop-blur-sm" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full rounded-lg">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button onClick={onClose} className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none">
              <X className="h-6 w-6" />
            </button>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="px-6 pt-8 pb-6">
              <div className="mb-6">
                <h3 className="text-xl font-serif font-bold text-gray-900" id="modal-title">
                  Let's Accelerate Your Growth
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  Tell us about your project. Our team will review your needs and provide clarity on the next steps.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-start gap-2 rounded">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className={`space-y-4 ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">Service Interest</label>
                      <select name="inquiryType" value={formData.inquiryType} onChange={handleInputChange} className="block w-full border-gray-200 py-2.5 px-3 text-sm border rounded focus:ring-scalar-red focus:border-scalar-red">
                        {INQUIRY_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-500 mb-1">Organization Type</label>
                      <select name="scale" value={formData.scale} onChange={handleInputChange} className="block w-full border-gray-200 py-2.5 px-3 text-sm border rounded focus:ring-scalar-red focus:border-scalar-red">
                        {ORG_SCALES.map(scale => <option key={scale} value={scale}>{scale}</option>)}
                      </select>
                    </div>
                 </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleInputChange} className="block w-full text-sm border-gray-200 p-2.5 border rounded focus:ring-scalar-red focus:border-scalar-red" />
                    <input type="email" name="email" placeholder="Work Email" required value={formData.email} onChange={handleInputChange} className="block w-full text-sm border-gray-200 p-2.5 border rounded focus:ring-scalar-red focus:border-scalar-red" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="organization" placeholder="Company / Org Name" required value={formData.organization} onChange={handleInputChange} className="block w-full text-sm border-gray-200 p-2.5 border rounded focus:ring-scalar-red focus:border-scalar-red" />
                    <input type="text" name="role" placeholder="Your Role" required value={formData.role} onChange={handleInputChange} className="block w-full text-sm border-gray-200 p-2.5 border rounded focus:ring-scalar-red focus:border-scalar-red" />
                  </div>

                  <textarea name="details" rows={3} value={formData.details} onChange={handleInputChange} className="block w-full text-sm border-gray-200 p-2.5 border rounded focus:ring-scalar-red focus:border-scalar-red" placeholder="How can we help you grow? (Project goals, challenges, timeline)"></textarea>
              </div>

              {isSubmitting && (
                <div className="mt-4 flex items-center gap-3 text-sm text-scalar-dark">
                  <Loader2 className="w-4 h-4 animate-spin text-scalar-red" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <div className="mt-8 flex justify-end gap-3">
                <Button variant="text" onClick={onClose} type="button" disabled={isSubmitting}>Close</Button>
                <Button variant="primary" type="submit" disabled={isSubmitting} className="rounded">
                  {isSubmitting ? 'Sending...' : 'Request Discovery Session'}
                </Button>
              </div>
            </form>
          ) : (
            <div className="px-6 py-12 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-50 mb-6">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Request Received</h3>
              <p className="text-slate-500 mb-8 max-w-xs mx-auto">
                Thank you for choosing Scalar. Your project reference ID is below. A growth specialist will be in touch shortly.
              </p>
              
              <div className="bg-slate-50 py-3 px-6 rounded-lg inline-block border border-slate-200 mb-8">
                <span className="block text-xs text-slate-400 uppercase tracking-widest mb-1">Reference ID</span>
                <span className="font-mono text-lg font-bold text-scalar-dark">{referenceId}</span>
              </div>

              <div>
                <Button onClick={onClose} fullWidth className="rounded">Return to Homepage</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Loader2, MailCheck, Lock, Shield, AlertCircle } from 'lucide-react';
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
    setStatusMessage('Establishing secure handshake...');

    try {
      await new Promise(r => setTimeout(r, 600));
      setStatusMessage('Encrypting payload...');
      
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
        throw new Error(result.message || 'Institutional Gateway transmission failed');
      }
      
      setStatusMessage('Transmission complete.');
      setReferenceId(result.refId);
      setIsSuccess(true);
    } catch (err: any) {
      console.error("Gateway Error:", err);
      setError(err.message || 'An institutional gateway error occurred. Please contact enterprise@scalarit.pro directly.');
      setStatusMessage('Transmission aborted.');
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
        <div className="fixed inset-0 bg-scalar-dark bg-opacity-75 transition-opacity" aria-hidden="true" onClick={onClose}></div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

        <div className="inline-block align-bottom bg-white text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full border-t-4 border-scalar-red">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button onClick={onClose} className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none">
              <X className="h-6 w-6" />
            </button>
          </div>

          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start mb-6">
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                    Enterprise Intake Gateway
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Requests are processed by our AI Intake Officer and routed to the sector lead.
                    </p>
                  </div>
                </div>
              </div>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-medium flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div className={`space-y-4 ${isSubmitting ? 'opacity-50 pointer-events-none' : ''}`}>
                 <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Inquiry Type</label>
                      <select name="inquiryType" value={formData.inquiryType} onChange={handleInputChange} className="block w-full border-gray-300 py-2 text-sm border focus:ring-scalar-red focus:border-scalar-red">
                        {INQUIRY_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Org Scale</label>
                      <select name="scale" value={formData.scale} onChange={handleInputChange} className="block w-full border-gray-300 py-2 text-sm border focus:ring-scalar-red focus:border-scalar-red">
                        {ORG_SCALES.map(scale => <option key={scale} value={scale}>{scale}</option>)}
                      </select>
                    </div>
                 </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Full Name" required value={formData.name} onChange={handleInputChange} className="block w-full text-sm border-gray-300 p-2 border focus:ring-scalar-red focus:border-scalar-red" />
                    <input type="email" name="email" placeholder="Business Email" required value={formData.email} onChange={handleInputChange} className="block w-full text-sm border-gray-300 p-2 border focus:ring-scalar-red focus:border-scalar-red" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <input type="text" name="organization" placeholder="Organization" required value={formData.organization} onChange={handleInputChange} className="block w-full text-sm border-gray-300 p-2 border focus:ring-scalar-red focus:border-scalar-red" />
                    <input type="text" name="role" placeholder="Role / Title" required value={formData.role} onChange={handleInputChange} className="block w-full text-sm border-gray-300 p-2 border focus:ring-scalar-red focus:border-scalar-red" />
                  </div>

                  <textarea name="details" rows={3} value={formData.details} onChange={handleInputChange} className="block w-full text-sm border-gray-300 p-2 border focus:ring-scalar-red focus:border-scalar-red" placeholder="Scope and Objectives..."></textarea>
                  
                  <div className="bg-slate-50 p-3 rounded text-[10px] text-slate-500 flex items-start gap-2 border border-slate-100">
                    <Shield className="w-3 h-3 text-slate-400 shrink-0" />
                    <span>Transmissions are logged for audit compliance under Scalar ISO 27001 protocols.</span>
                  </div>
              </div>

              {isSubmitting && (
                <div className="mt-4 p-3 bg-slate-900 border border-slate-700 flex items-center gap-3">
                  <Loader2 className="w-4 h-4 text-scalar-red animate-spin" />
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{statusMessage}</span>
                </div>
              )}

              <div className="mt-8 flex justify-end gap-3">
                <Button variant="text" onClick={onClose} type="button" disabled={isSubmitting}>Cancel</Button>
                <Button variant="primary" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Transmitting...' : 'Authorize Routing'}
                </Button>
              </div>
            </form>
          ) : (
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-50 mb-6">
                <MailCheck className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl leading-6 font-bold text-gray-900 mb-2">Routing Complete</h3>
              <div className="mt-2 px-4">
                <p className="text-sm text-gray-500 mb-6">
                  Inquiry logged and routed for architect review.
                </p>
                
                <div className="bg-slate-900 p-4 rounded border border-slate-700 mb-6 text-left">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest font-mono">Institutional Ref ID</span>
                    <Lock className="w-3 h-3 text-slate-600" />
                  </div>
                  <div className="font-mono text-lg font-bold text-white tracking-tighter">{referenceId}</div>
                  <div className="text-[9px] font-mono text-slate-500 mt-2 uppercase">Verified Gateway: Scalar-Relay-v2</div>
                </div>

                <Button onClick={onClose} variant="outline" fullWidth>Terminate Session</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

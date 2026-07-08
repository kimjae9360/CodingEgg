import React from 'react';

// Small reusable confirmation dialog, styled to match the app instead of
// using the jarring native window.confirm().
export default function ConfirmModal({ open, title, message, confirmLabel = '확인', cancelLabel = '취소', onConfirm, onCancel, theme = 'dark' }) {
  if (!open) return null;
  const isDark = theme === 'dark';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={onCancel}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`w-full max-w-sm rounded-3xl p-6 shadow-2xl border-2 ${isDark ? 'bg-[#334155] border-[#475569] text-white' : 'bg-white border-gray-200 text-gray-800'}`}
      >
        <h2 className="text-xl font-black mb-2">{title}</h2>
        <p className={`font-bold mb-6 ${isDark ? 'text-gray-300' : 'text-gray-500'}`}>{message}</p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className={`flex-1 py-3 rounded-xl font-bold transition ${isDark ? 'bg-[#0B1120] hover:bg-[#20262b] text-gray-300' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'}`}
          >
            {cancelLabel}
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-3 rounded-xl font-bold bg-[#ff4b4b] hover:bg-[#e53e3e] text-white transition"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

// File: src/components/tabs/SupportTab.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  createTicket,
  getTickets,
  deleteTicket,
} from '../../api';
import {
  FiSend,
  FiPaperclip,
  FiTrash2,
  FiDownload,
  FiArrowLeft,
} from 'react-icons/fi';

const categories = [
  'Order Issue',
  'Technical Problem',
  'Refund Request',
  'General',
];

const SupportTab = () => {
  const navigate = useNavigate();

  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({
    subject: '',
    category: 'General',
    message: '',
    attachments: [],
  });

  /* ---------- load tickets ---------- */
  useEffect(() => {
    getTickets().then(setTickets);
  }, []);

  /* ---------- helpers ---------- */
  const addAttachment = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () =>
      setForm((f) => ({
        ...f,
        attachments: [
          ...f.attachments,
          { filename: file.name, data: reader.result },
        ],
      }));
    reader.readAsDataURL(file);
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.subject || !form.message)
      return alert('Fill subject & message');
    await createTicket(form);
    setForm({
      subject: '',
      category: 'General',
      message: '',
      attachments: [],
    });
    setTickets(await getTickets());
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this ticket?')) return;
    await deleteTicket(id);
    setTickets((prev) => prev.filter((t) => t._id !== id));
  };

  /* ---------- render ---------- */
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Header with Back button */}
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-300">
        <button
          type="button"
          onClick={() => navigate('/design-studio')}
          className="flex items-center px-5 py-3 bg-white border-2 border-gray-300 rounded-lg shadow-sm hover:bg-gray-100 transition"
        >
          <FiArrowLeft className="mr-3 text-black" size={18} />
          <span className="font-bold tracking-wide text-black">
            BACK TO STUDIO
          </span>
        </button>
        <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-700">
          SUPPORT TICKETS
        </h1>
        <div className="w-10" />
      </div>

      {/* form */}
      <form
        onSubmit={submit}
        className="bg-white p-6 rounded-lg shadow-md mb-10 space-y-4"
      >
        <input
          className="w-full border p-3 rounded text-gray-800"
          placeholder="Subject"
          value={form.subject}
          onChange={(e) =>
            setForm({ ...form, subject: e.target.value })
          }
        />

        <select
          className="w-full border p-3 rounded text-gray-800"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <textarea
          className="w-full border p-3 rounded h-32 text-gray-800"
          placeholder="Describe your issue…"
          value={form.message}
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        {/* attachments preview */}
        <div className="space-x-2">
          {form.attachments.map((a) => (
            <span
              key={a.filename}
              className="text-xs bg-gray-200 px-2 py-1 rounded text-gray-700"
            >
              {a.filename}
            </span>
          ))}
        </div>

        <label className="inline-flex items-center cursor-pointer text-sm text-blue-600">
          <FiPaperclip className="mr-1" /> Attach file
          <input
            type="file"
            onChange={addAttachment}
            className="hidden"
          />
        </label>

        <button
          type="submit"
          className="flex items-center bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded font-bold"
        >
          <FiSend className="mr-2" /> Submit
        </button>
      </form>

      {/* list */}
      <h3 className="text-xl font-semibold mb-4">My Tickets</h3>
      {tickets.length === 0 ? (
        <p className="text-gray-700">No tickets yet.</p>
      ) : (
        <ul className="space-y-4">
          {tickets.map((t) => (
            <li
              key={t._id}
              className="bg-white shadow p-4 rounded border text-gray-800"
            >
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold">{t.subject}</div>
                  <p className="text-sm text-gray-600">
                    Category: {t.category}
                  </p>
                </div>
                <button
                  onClick={() => handleDelete(t._id)}
                  className="text-red-600 hover:text-red-800"
                  title="Delete ticket"
                >
                  <FiTrash2 />
                </button>
              </div>

              <p className="mt-2 whitespace-pre-line">{t.message}</p>

              {t.attachments.length > 0 && (
                <div className="mt-3 space-y-1">
                  {t.attachments.map((att) => (
                    <div
                      key={att.filename}
                      className="flex items-center space-x-2 text-sm"
                    >
                      <a
                        href={att.data}
                        download={att.filename}
                        className="text-blue-600 hover:text-blue-800 underline truncate max-w-[200px]"
                      >
                        {att.filename}
                      </a>
                      <FiDownload className="text-blue-600" />
                    </div>
                  ))}
                </div>
              )}

              <div className="flex justify-between mt-3 text-xs">
                {t.status === 'Resolved' && (
                  <span className="px-2 py-1 rounded bg-green-200 text-green-800">
                    Resolved
                  </span>
                )}
                <span>
                  {new Date(t.createdAt).toLocaleDateString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SupportTab;





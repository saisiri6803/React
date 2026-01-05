import { useState, useMemo, useRef, useEffect } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { 
  collection, addDoc, updateDoc, deleteDoc, onSnapshot, doc, query, serverTimestamp 
} from "firebase/firestore";
import { db } from "./firebase";

const STATUS_OPTIONS = ["All", "Applied", "Shortlisted", "Interview", "Offer", "Rejected"];

function App() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [editingId, setEditingId] = useState(null);
  const inputRef = useRef(null);
  const today = new Date().toISOString().slice(0, 10);

  // Real-time listener for jobs
  useEffect(() => {
    const q = query(collection(db, "applications"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const jobsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setJobs(jobsData);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const [form, setForm] = useState({
    company: "",
    title: "",
    status: "Applied",
    location: "",
    source: "",
    date: today,
  });

  const resetForm = () =>
    setForm({
      company: "",
      title: "",
      status: "Applied",
      location: "",
      source: "",
      date: today,
    });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.company || !form.title) return;

    try {
      if (editingId) {
        // Update existing
        await updateDoc(doc(db, "applications", editingId), form);
        setEditingId(null);
      } else {
        // Add new
        const newJob = {
          ...form,
          createdAt: serverTimestamp(),
        };
        await addDoc(collection(db, "applications"), newJob);
      }
      resetForm();
    } catch (error) {
      console.error("Error saving job:", error);
      alert("Failed to save: " + error.message);
    }
  };

  const handleEdit = (job) => {
    setEditingId(job.id);
    setForm({
      company: job.company || "",
      title: job.title || "",
      status: job.status || "Applied",
      location: job.location || "",
      source: job.source || "",
      date: job.date || today,
    });
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "applications", id));
      if (editingId === id) {
        setEditingId(null);
        resetForm();
      }
    } catch (error) {
      console.error("Error deleting job:", error);
      alert("Failed to delete: " + error.message);
    }
  };

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesStatus = filterStatus === "All" || job.status === filterStatus;
      const term = searchTerm.toLowerCase();
      const matchesSearch =
        job.company?.toLowerCase().includes(term) ||
        job.title?.toLowerCase().includes(term);
      return matchesStatus && matchesSearch;
    });
  }, [jobs, filterStatus, searchTerm]);

  if (loading) {
    return <div className="min-h-screen bg-slate-950 flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-semibold tracking-tight">
            Job Application Tracker
          </h1>
          <span className="text-xs md:text-sm text-slate-400">
            Total: {jobs.length}
          </span>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] items-start content-start">
        {/* Form */}
        <section className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 shadow-lg shadow-slate-950/40">
          <h2 className="text-lg font-medium mb-3">
            {editingId ? "Edit application" : "Add new application"}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Company *
                </label>
                <input
                  type="text"
                  name="company"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Google, Infosys..."
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Role / Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Frontend Developer"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={form.status}
                  onChange={handleChange}
                  className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option>Applied</option>
                  <option>Shortlisted</option>
                  <option>Interview</option>
                  <option>Offer</option>
                  <option>Rejected</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={form.location}
                  onChange={handleChange}
                  className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Remote / Bengaluru"
                />
              </div>
              <div>
                <label className="block text-xs text-slate-400 mb-1">
                  Source
                </label>
                <input
                  type="text"
                  name="source"
                  value={form.source}
                  onChange={handleChange}
                  className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="LinkedIn, Naukri..."
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">
                Applied on
              </label>

              <div
                className="relative cursor-pointer select-none"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent clicks from bubbling up
                  inputRef.current?.showPicker?.() || inputRef.current?.focus();
                }}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    inputRef.current?.showPicker?.() || inputRef.current?.focus();
                  }
                }}
              >
                {/* Icon */}
                <FaRegCalendarAlt
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
                />

                {/* Date input - make it full width */}
                <input
                  ref={inputRef}
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  className="w-full rounded-md bg-slate-950 border border-slate-700 pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                />
              </div>
            </div>


            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-colors"
              >
                {editingId ? "Update" : "Add"} application
              </button>
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    resetForm();
                  }}
                  className="text-xs text-slate-400 hover:text-slate-200"
                >
                  Cancel edit
                </button>
              )}
            </div>
          </form>
        </section>

        {/* List + filters */}
        <section className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 shadow-lg shadow-slate-950/40 flex flex-col">
          <div className="flex flex-col sm:flex-row gap-3 mb-4 items-start sm:items-center">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search by company or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-md bg-slate-950 border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {STATUS_OPTIONS.map((status) => (
                <button
                  key={status}
                  onClick={() => setFilterStatus(status)}
                  className={`px-3 py-1 rounded-full text-xs border transition-colors ${filterStatus === status
                    ? "bg-emerald-500 text-slate-950 border-emerald-400"
                    : "bg-slate-950 border-slate-700 text-slate-300 hover:border-slate-500"
                    }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-auto rounded-lg border border-slate-800">
            <table className="min-w-full text-xs md:text-sm">
              <thead className="bg-slate-950">
                <tr className="text-slate-400">
                  <th className="px-3 py-2 text-left font-medium">Company</th>
                  <th className="px-3 py-2 text-left font-medium">Role</th>
                  <th className="px-3 py-2 text-left font-medium">Status</th>
                  <th className="px-3 py-2 text-left font-medium hidden md:table-cell">
                    Location
                  </th>
                  <th className="px-3 py-2 text-left font-medium hidden md:table-cell">
                    Source
                  </th>
                  <th className="px-3 py-2 text-left font-medium hidden md:table-cell">
                    Applied on
                  </th>
                  <th className="px-3 py-2 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredJobs.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-3 py-6 text-center text-slate-500"
                    >
                      No applications yet. Start by adding one on the left.
                    </td>
                  </tr>
                )}
                {filteredJobs.map((job) => (
                  <tr
                    key={job.id}
                    className="border-t border-slate-800 hover:bg-slate-900/70"
                  >
                    <td className="px-3 py-2 align-middle">
                      <div className="font-medium">{job.company}</div>
                    </td>
                    <td className="px-3 py-2 align-middle">{job.title}</td>
                    <td className="px-3 py-2 align-middle">
                      <span
                        className={`inline-flex items-center rounded-full px-2 py-0.5 text-[11px] font-medium ${job.status === "Offer"
                          ? "bg-emerald-500/10 text-emerald-300 border border-emerald-500/40"
                          : job.status === "Interview"
                            ? "bg-sky-500/10 text-sky-300 border border-sky-500/40"
                            : job.status === "Rejected"
                              ? "bg-rose-500/10 text-rose-300 border border-rose-500/40"
                              : "bg-slate-700/40 text-slate-200 border border-slate-500/40"
                          }`}
                      >
                        {job.status}
                      </span>
                    </td>
                    <td className="px-3 py-2 align-middle hidden md:table-cell">
                      {job.location || "-"}
                    </td>
                    <td className="px-3 py-2 align-middle hidden md:table-cell">
                      {job.source || "-"}
                    </td>
                    <td className="px-3 py-2 align-middle hidden md:table-cell">
                      {job.date || "-"}
                    </td>
                    <td className="px-3 py-2 align-middle text-right">
                      <button
                        onClick={() => handleEdit(job)}
                        className="text-xs text-emerald-400 hover:text-emerald-300 mr-3"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="text-xs text-rose-400 hover:text-rose-300"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

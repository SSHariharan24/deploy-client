import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { getIcon, availableIcons } from "./iconMap.jsx";
import {
  FaPlus,
  FaEdit,
  FaTrash,
  FaSave,
  FaTimes,
  FaEye,
  FaEyeSlash,
  FaArrowUp,
  FaArrowDown,
  FaUpload,
  FaSignOutAlt,
  FaCloudUploadAlt,
  FaExternalLinkAlt,
  FaGithub,
  FaCheck,
  FaImage,
} from "react-icons/fa";

const API_BASE = import.meta.env.VITE_API_URL || "https://portfolio-mern-5dev.onrender.com/api";

// ─── Category Options ───────────────────────────────────────────────────────
const CATEGORIES = ["Full-Stack", "Frontend", "Utility"];

// ─── Empty Project Template ─────────────────────────────────────────────────
const emptyProject = {
  name: "",
  category: "Full-Stack",
  stack: [],
  description: "",
  image: "",
  hoverImage: "",
  link: "",
  github: "",
  order: 0,
  isVisible: true,
};

export const AdminProjects = () => {
  const [adminKey, setAdminKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingProject, setEditingProject] = useState(null); // null = not editing, object = editing
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({ ...emptyProject });
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [notification, setNotification] = useState(null);
  const [selectedIconKey, setSelectedIconKey] = useState("");
  const [techName, setTechName] = useState("");

  // ─── Auth ───────────────────────────────────────────────────────────────
  const handleLogin = async (e) => {
    e.preventDefault();
    setAuthError("");
    try {
      const res = await axios.post(`${API_BASE}/projects/auth/verify`, { adminKey });
      if (res.data.valid) {
        setIsAuthenticated(true);
        localStorage.setItem("portfolio_admin_key", adminKey);
      }
    } catch {
      setAuthError("Invalid admin key. Try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAdminKey("");
    localStorage.removeItem("portfolio_admin_key");
  };

  // Check for stored key on mount
  useEffect(() => {
    const storedKey = localStorage.getItem("portfolio_admin_key");
    if (storedKey) {
      setAdminKey(storedKey);
      axios
        .post(`${API_BASE}/projects/auth/verify`, { adminKey: storedKey })
        .then((res) => {
          if (res.data.valid) setIsAuthenticated(true);
        })
        .catch(() => localStorage.removeItem("portfolio_admin_key"));
    }
  }, []);

  // ─── Fetch Projects ─────────────────────────────────────────────────────
  const fetchProjects = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE}/projects/all`, {
        headers: { "x-admin-key": adminKey },
      });
      setProjects(res.data);
    } catch (err) {
      showNotification("Failed to fetch projects", "error");
    } finally {
      setLoading(false);
    }
  }, [adminKey]);

  useEffect(() => {
    if (isAuthenticated) fetchProjects();
  }, [isAuthenticated, fetchProjects]);

  // ─── Notifications ──────────────────────────────────────────────────────
  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // ─── Form Handlers ─────────────────────────────────────────────────────
  const startCreate = () => {
    setIsCreating(true);
    setEditingProject(null);
    setFormData({ ...emptyProject, order: projects.length });
  };

  const startEdit = (project) => {
    setEditingProject(project._id);
    setIsCreating(false);
    setFormData({
      name: project.name,
      category: project.category,
      stack: project.stack || [],
      description: project.description,
      image: project.image,
      hoverImage: project.hoverImage || "",
      link: project.link || "",
      github: project.github || "",
      order: project.order,
      isVisible: project.isVisible,
    });
  };

  const cancelEdit = () => {
    setEditingProject(null);
    setIsCreating(false);
    setFormData({ ...emptyProject });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ─── Tech Stack Management ──────────────────────────────────────────────
  const addTech = () => {
    if (!techName.trim() || !selectedIconKey) return;
    setFormData((prev) => ({
      ...prev,
      stack: [...prev.stack, { name: techName.trim(), iconKey: selectedIconKey }],
    }));
    setTechName("");
    setSelectedIconKey("");
  };

  const removeTech = (index) => {
    setFormData((prev) => ({
      ...prev,
      stack: prev.stack.filter((_, i) => i !== index),
    }));
  };

  // ─── Image Upload ──────────────────────────────────────────────────────
  const handleImageUpload = async (e, field) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    try {
      const form = new FormData();
      form.append("image", file);
      const res = await axios.post(`${API_BASE}/projects/upload`, form, {
        headers: {
          "x-admin-key": adminKey,
          "Content-Type": "multipart/form-data",
        },
      });
      setFormData((prev) => ({ ...prev, [field]: res.data.url }));
      showNotification("Image uploaded successfully!");
    } catch {
      showNotification("Image upload failed", "error");
    } finally {
      setUploading(false);
    }
  };

  // ─── Save Project ──────────────────────────────────────────────────────
  const handleSave = async () => {
    if (!formData.name.trim() || !formData.description.trim()) {
      showNotification("Name and description are required", "error");
      return;
    }
    if (!formData.image) {
      showNotification("Project image is required", "error");
      return;
    }

    setSaving(true);
    try {
      if (isCreating) {
        await axios.post(`${API_BASE}/projects`, formData, {
          headers: { "x-admin-key": adminKey },
        });
        showNotification("Project created successfully!");
      } else {
        await axios.put(`${API_BASE}/projects/${editingProject}`, formData, {
          headers: { "x-admin-key": adminKey },
        });
        showNotification("Project updated successfully!");
      }
      cancelEdit();
      fetchProjects();
    } catch (err) {
      showNotification(err.response?.data?.error || "Save failed", "error");
    } finally {
      setSaving(false);
    }
  };

  // ─── Delete Project ────────────────────────────────────────────────────
  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete "${name}"? This cannot be undone.`)) return;
    try {
      await axios.delete(`${API_BASE}/projects/${id}`, {
        headers: { "x-admin-key": adminKey },
      });
      showNotification("Project deleted");
      fetchProjects();
    } catch {
      showNotification("Delete failed", "error");
    }
  };

  // ─── Toggle Visibility ─────────────────────────────────────────────────
  const toggleVisibility = async (id) => {
    try {
      await axios.patch(`${API_BASE}/projects/${id}/visibility`, {}, {
        headers: { "x-admin-key": adminKey },
      });
      fetchProjects();
    } catch {
      showNotification("Visibility toggle failed", "error");
    }
  };

  // ─── Reorder ────────────────────────────────────────────────────────────
  const moveProject = async (index, direction) => {
    const newProjects = [...projects];
    const swapIndex = index + direction;
    if (swapIndex < 0 || swapIndex >= newProjects.length) return;
    [newProjects[index], newProjects[swapIndex]] = [newProjects[swapIndex], newProjects[index]];
    const orderedIds = newProjects.map((p) => p._id);
    try {
      await axios.put(
        `${API_BASE}/projects-reorder`,
        { orderedIds },
        { headers: { "x-admin-key": adminKey } }
      );
      fetchProjects();
    } catch {
      showNotification("Reorder failed", "error");
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // LOGIN SCREEN
  // ═══════════════════════════════════════════════════════════════════════════
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-white mb-2">🔐 Admin Panel</h1>
            <p className="text-slate-400 text-sm">Enter your admin key to manage projects</p>
          </div>
          <form onSubmit={handleLogin} className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/50 shadow-2xl">
            <label className="block text-sm font-semibold text-slate-300 mb-2">Admin Key</label>
            <input
              type="password"
              value={adminKey}
              onChange={(e) => setAdminKey(e.target.value)}
              placeholder="Enter your admin key..."
              className="w-full px-4 py-3 bg-slate-800/80 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              autoFocus
            />
            {authError && (
              <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                <FaTimes className="text-xs" /> {authError}
              </p>
            )}
            <button
              type="submit"
              className="w-full mt-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-indigo-500/20"
            >
              Unlock Admin Panel
            </button>
          </form>
          <p className="text-center mt-6">
            <a href="/" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors">
              ← Back to Portfolio
            </a>
          </p>
        </div>
      </div>
    );
  }

  // ═══════════════════════════════════════════════════════════════════════════
  // ADMIN DASHBOARD
  // ═══════════════════════════════════════════════════════════════════════════
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Notification Toast */}
      {notification && (
        <div
          className={`fixed top-6 right-6 z-50 px-5 py-3 rounded-xl font-semibold text-sm shadow-2xl flex items-center gap-2 transition-all duration-300 animate-slide-in ${
            notification.type === "error"
              ? "bg-red-500/90 text-white border border-red-400/30"
              : "bg-emerald-500/90 text-white border border-emerald-400/30"
          }`}
        >
          {notification.type === "error" ? <FaTimes /> : <FaCheck />}
          {notification.message}
        </div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-extrabold text-white">⚙️ Project Manager</h1>
            <span className="px-2.5 py-0.5 bg-indigo-500/10 text-indigo-400 text-xs font-bold rounded-full border border-indigo-500/20">
              {projects.length} projects
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="px-4 py-2 text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <FaExternalLinkAlt className="text-xs" /> View Portfolio
            </a>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-500/10 text-red-400 text-sm font-semibold rounded-lg hover:bg-red-500/20 transition-all flex items-center gap-1.5"
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Add Project Button */}
        {!isCreating && !editingProject && (
          <button
            onClick={startCreate}
            className="mb-8 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-indigo-500/20 flex items-center gap-2"
          >
            <FaPlus /> Add New Project
          </button>
        )}

        {/* ─── Edit/Create Form ───────────────────────────────────────────── */}
        {(isCreating || editingProject) && (
          <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl p-8 border border-slate-800/50 shadow-2xl mb-8">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              {isCreating ? <><FaPlus className="text-indigo-400" /> New Project</> : <><FaEdit className="text-indigo-400" /> Edit Project</>}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Name */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5">Project Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="My Awesome Project"
                  className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-300 mb-1.5">Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Brief description of the project..."
                  rows={3}
                  className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5">
                  Project Image * {uploading && <span className="text-indigo-400 animate-pulse">(Uploading...)</span>}
                </label>
                <div className="flex gap-2">
                  <input
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    placeholder="Paste URL or upload →"
                    className="flex-1 px-4 py-2.5 bg-slate-800/80 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                  />
                  <label className="px-4 py-2.5 bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 rounded-xl cursor-pointer hover:bg-indigo-600/30 transition-all flex items-center gap-1.5 text-sm font-semibold">
                    <FaCloudUploadAlt /> Upload
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, "image")}
                      className="hidden"
                    />
                  </label>
                </div>
                {formData.image && (
                  <img src={formData.image} alt="Preview" className="mt-2 h-24 rounded-lg object-contain bg-slate-800/50 border border-slate-700/30 p-1" />
                )}
              </div>

              {/* Hover Image Upload */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5">
                  Hover Image <span className="text-slate-500 font-normal">(optional)</span>
                </label>
                <div className="flex gap-2">
                  <input
                    name="hoverImage"
                    value={formData.hoverImage}
                    onChange={handleInputChange}
                    placeholder="Paste URL or upload →"
                    className="flex-1 px-4 py-2.5 bg-slate-800/80 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                  />
                  <label className="px-4 py-2.5 bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 rounded-xl cursor-pointer hover:bg-indigo-600/30 transition-all flex items-center gap-1.5 text-sm font-semibold">
                    <FaCloudUploadAlt /> Upload
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageUpload(e, "hoverImage")}
                      className="hidden"
                    />
                  </label>
                </div>
                {formData.hoverImage && (
                  <img src={formData.hoverImage} alt="Hover Preview" className="mt-2 h-24 rounded-lg object-contain bg-slate-800/50 border border-slate-700/30 p-1" />
                )}
              </div>

              {/* Live Link */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5">Live Demo URL</label>
                <input
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  placeholder="https://my-project.vercel.app"
                  className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                />
              </div>

              {/* GitHub Link */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5">GitHub URL</label>
                <input
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  placeholder="https://github.com/user/repo"
                  className="w-full px-4 py-2.5 bg-slate-800/80 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-sm"
                />
              </div>

              {/* Tech Stack Builder */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-slate-300 mb-1.5">Tech Stack</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {formData.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-500/10 text-indigo-400 text-xs font-bold px-3 py-1.5 rounded-xl flex items-center gap-1.5 border border-indigo-500/20"
                    >
                      <span className="text-sm">{getIcon(tech.iconKey)}</span>
                      {tech.name}
                      <button
                        onClick={() => removeTech(idx)}
                        className="ml-1 text-red-400 hover:text-red-300 transition-colors"
                      >
                        <FaTimes className="text-[10px]" />
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    value={techName}
                    onChange={(e) => setTechName(e.target.value)}
                    placeholder="Tech name (e.g., React.js)"
                    className="flex-1 px-3 py-2 bg-slate-800/80 border border-slate-700/50 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <select
                    value={selectedIconKey}
                    onChange={(e) => setSelectedIconKey(e.target.value)}
                    className="px-3 py-2 bg-slate-800/80 border border-slate-700/50 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">Select icon...</option>
                    {availableIcons.map((icon) => (
                      <option key={icon.key} value={icon.key}>{icon.label}</option>
                    ))}
                  </select>
                  <button
                    onClick={addTech}
                    disabled={!techName.trim() || !selectedIconKey}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1"
                  >
                    <FaPlus className="text-xs" /> Add
                  </button>
                </div>
              </div>

              {/* Visibility Toggle */}
              <div className="flex items-center gap-3">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    name="isVisible"
                    checked={formData.isVisible}
                    onChange={handleInputChange}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-slate-700 peer-focus:ring-2 peer-focus:ring-indigo-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                </label>
                <span className="text-sm font-medium text-slate-300">
                  {formData.isVisible ? "Visible on portfolio" : "Hidden from portfolio"}
                </span>
              </div>

              {/* Sort Order */}
              <div>
                <label className="block text-sm font-semibold text-slate-300 mb-1.5">Sort Order</label>
                <input
                  type="number"
                  name="order"
                  value={formData.order}
                  onChange={handleInputChange}
                  min={0}
                  className="w-24 px-4 py-2.5 bg-slate-800/80 border border-slate-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex gap-3 mt-8 pt-6 border-t border-slate-800/50">
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold rounded-xl transition-all duration-300 flex items-center gap-2 disabled:opacity-50"
              >
                <FaSave /> {saving ? "Saving..." : isCreating ? "Create Project" : "Save Changes"}
              </button>
              <button
                onClick={cancelEdit}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold rounded-xl transition-all flex items-center gap-2"
              >
                <FaTimes /> Cancel
              </button>
            </div>
          </div>
        )}

        {/* ─── Projects List ──────────────────────────────────────────────── */}
        {loading ? (
          <div className="text-center py-20">
            <div className="inline-block w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
            <p className="mt-4 text-slate-400 text-sm">Loading projects...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {projects.map((project, index) => (
              <div
                key={project._id}
                className={`bg-slate-900/60 backdrop-blur-sm rounded-2xl p-5 border transition-all duration-300 ${
                  !project.isVisible
                    ? "border-slate-800/30 opacity-60"
                    : "border-slate-800/50 hover:border-indigo-500/20"
                }`}
              >
                <div className="flex items-start gap-5">
                  {/* Thumbnail */}
                  <div className="w-32 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-slate-800/50 border border-slate-700/30">
                    {project.image ? (
                      <img src={project.image} alt={project.name} className="w-full h-full object-contain p-0.5" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-600">
                        <FaImage className="text-2xl" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white truncate">{project.name}</h3>
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                        project.isVisible
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                          : "bg-red-500/10 text-red-400 border border-red-500/20"
                      }`}>
                        {project.isVisible ? "VISIBLE" : "HIDDEN"}
                      </span>
                      <span className="px-2 py-0.5 text-[10px] font-bold rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm truncate mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.stack?.map((tech, i) => (
                        <span key={i} className="text-[10px] font-semibold text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded-lg flex items-center gap-1">
                          <span className="text-indigo-400">{getIcon(tech.iconKey)}</span> {tech.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() => moveProject(index, -1)}
                      disabled={index === 0}
                      className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Move Up"
                    >
                      <FaArrowUp className="text-xs" />
                    </button>
                    <button
                      onClick={() => moveProject(index, 1)}
                      disabled={index === projects.length - 1}
                      className="p-2 text-slate-500 hover:text-white hover:bg-slate-800 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                      title="Move Down"
                    >
                      <FaArrowDown className="text-xs" />
                    </button>
                    <button
                      onClick={() => toggleVisibility(project._id)}
                      className="p-2 text-slate-500 hover:text-yellow-400 hover:bg-yellow-500/10 rounded-lg transition-all"
                      title={project.isVisible ? "Hide" : "Show"}
                    >
                      {project.isVisible ? <FaEye className="text-sm" /> : <FaEyeSlash className="text-sm" />}
                    </button>
                    <button
                      onClick={() => startEdit(project)}
                      className="p-2 text-slate-500 hover:text-indigo-400 hover:bg-indigo-500/10 rounded-lg transition-all"
                      title="Edit"
                    >
                      <FaEdit className="text-sm" />
                    </button>
                    <button
                      onClick={() => handleDelete(project._id, project.name)}
                      className="p-2 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-all"
                      title="Delete"
                    >
                      <FaTrash className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {projects.length === 0 && (
              <div className="text-center py-20 text-slate-500">
                <FaImage className="text-4xl mx-auto mb-4 opacity-50" />
                <p className="text-lg font-semibold">No projects yet</p>
                <p className="text-sm mt-1">Click "Add New Project" to get started</p>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
};

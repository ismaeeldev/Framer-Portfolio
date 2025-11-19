import React, { useState, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import '../assets/css/ProjectDetail.css';
import {
    X,
    ExternalLink,
    Star,
    Monitor,
    Clock,
    Github,
    Palette,
    Zap,
    Users
} from "lucide-react";

const enrichProject = (project) => {
    if (!project) return null;

    const fallbackDescription =
        "A professionally crafted, responsive website designed to enhance brand presence, performance, and user experience.";

    const fallbackTags = [
        { name: project.category || "Web", color: "#00e9ff" },
        { name: "Responsive Design", color: "#00e9ff" },
        { name: "SEO Optimized", color: "#00e9ff" },
    ];

    return {
        id: project.id,
        name: project.name || project.title,
        description: project.description || fallbackDescription,
        category: project.category || "Web",
        status: project.status || "Completed",
        timeline: project.timeline || "2 – 4 Weeks",
        date: project.date || "2024-01-10",
        tags: project.tags || fallbackTags,
        features:
            project.features ||
            [
                "Fully mobile-friendly design",
                "Modern UI/UX layout",
                "SEO structured pages",
                "Optimized performance",
                "Brand-consistent visuals",
            ],
        feedback:
            project.feedback ||
            [
                {
                    name: "Client",
                    role: "Business Owner",
                    message:
                        "Outstanding work — improved our online credibility and conversions.",
                    rating: 5,
                    date: "2024-01-15",
                },
            ],
        images: project.images || [project.image],
        url: project.url,
        githubUrl: project.githubUrl,
        accentColor: project.accentColor || "#00e9ff",
        platform:
            project.category?.toLowerCase().includes("wix")
                ? "Wix"
                : project.category?.toLowerCase().includes("framer")
                    ? "Framer"
                    : "Custom",
        techStack: project.techStack || ["React", "Tailwind CSS", "Framer Motion"],
        liveStats: project.liveStats || { users: "10K+", performance: "95%", satisfaction: "4.9" }
    };
};

const ProjectDetail = ({ project, isOpen, onClose }) => {
    const enriched = useMemo(() => enrichProject(project), [project]);
    const [iframeLoaded, setIframeLoaded] = useState(false);
    const [iframeError, setIframeError] = useState(false);
    const [activeTab, setActiveTab] = useState("overview");
    const [scrollProgress, setScrollProgress] = useState(0);
    const [useImageFallback, setUseImageFallback] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            if (enriched?.accentColor) {
                document.documentElement.style.setProperty('--project-accent', enriched.accentColor);
            }
        } else {
            document.body.style.overflow = 'unset';
            document.documentElement.style.removeProperty('--project-accent');
        }

        return () => {
            document.body.style.overflow = 'unset';
            document.documentElement.style.removeProperty('--project-accent');
        };
    }, [isOpen, enriched]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };

        if (isOpen) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]);

    // Reset states when project changes
    useEffect(() => {
        if (isOpen && enriched) {
            // Reset states on mount/change
            setIframeLoaded(false);
            setIframeError(false);
            setUseImageFallback(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, project?.id]); // Use project id to avoid cascading renders

    const handleIframeError = () => {
        setIframeError(true);
        // Show image fallback if iframe fails
        setUseImageFallback(true);
    };

    const handleIframeLoad = () => {
        setIframeLoaded(true);
        setIframeError(false);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`project-star ${i < rating ? "project-star-active" : "project-star-inactive"}`}
            />
        ));
    };

    if (!isOpen || !enriched) return null;

    const accentColor = enriched.accentColor;
    const showIframe = enriched.url && !useImageFallback;

    return (
        <AnimatePresence mode="wait">
            {/* Backdrop */}
            <motion.div
                className="project-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                    // Ensure backdrop click closes modal reliably
                    // Only close if clicking directly on backdrop, not on children
                    if (e.target === e.currentTarget || e.target.classList.contains('project-backdrop')) {
                        onClose();
                    }
                }}
            >
                <div className="project-backdrop-gradient" />
                <div className="project-backdrop-overlay" />
            </motion.div>

            {/* Main Modal */}
            <div
                className="project-modal-container"
                onClick={(e) => {
                    // Only close if clicking directly on the container (backdrop area)
                    if (e.target === e.currentTarget) {
                        onClose();
                    }
                }}
            >
                <motion.div
                    className="project-modal-main normal"
                    style={{
                        border: `1px solid ${accentColor}30`,
                        boxShadow: `0 0 80px ${accentColor}20`
                    }}
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 50 }}
                    transition={{ type: "spring", damping: 25 }}
                    onClick={(e) => {
                        // Prevent clicks inside modal from closing it
                        e.stopPropagation();
                    }}
                >
                    {/* Progress Bar */}
                    <div
                        className="project-progress-bar"
                        style={{
                            width: `${scrollProgress}%`,
                            background: `linear-gradient(90deg, ${accentColor} 0%, ${accentColor}80 100%)`
                        }}
                    />

                    {/* Header */}
                    <div
                        className="project-header"
                        style={{
                            borderBottom: `1px solid ${accentColor}20`,
                        }}
                    >
                        {/* Background Glow */}
                        <div
                            className="project-header-glow"
                            style={{
                                background: `radial-gradient(circle, ${accentColor} 0%, transparent 70%)`
                            }}
                        />

                        <div className="project-header-content">
                            <div className="project-status-indicator">
                                <div
                                    className="project-status-dot"
                                    style={{ backgroundColor: accentColor }}
                                />
                                <span
                                    className="project-status-badge"
                                    style={{
                                        color: accentColor,
                                        borderColor: `${accentColor}40`,
                                        backgroundColor: `${accentColor}10`
                                    }}
                                >
                                    {enriched.status}
                                </span>
                            </div>

                            <h2 className="project-title">
                                {enriched.name}
                            </h2>

                            <div className="project-meta">
                                <span className="project-meta-item">
                                    <Monitor className="project-meta-icon" />
                                    {enriched.platform}
                                </span>
                                <span className="project-meta-item">
                                    <Clock className="project-meta-icon" />
                                    {enriched.timeline}
                                </span>
                                <span className="project-meta-item">
                                    <Palette className="project-meta-icon" />
                                    {enriched.techStack.slice(0, 2).join(", ")}
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="project-actions">
                            {enriched.githubUrl && (
                                <a
                                    href={enriched.githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-action-link"
                                    style={{ color: accentColor }}
                                >
                                    <Github className="project-action-icon" />
                                </a>
                            )}
                            {enriched.url && (
                                <a
                                    href={enriched.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-action-link"
                                    style={{ color: accentColor }}
                                >
                                    <ExternalLink className="project-action-icon" />
                                </a>
                            )}
                            {/* Maximize button removed - not needed */}
                            <button
                                onClick={(e) => {
                                    // Ensure close button works reliably
                                    e.stopPropagation();
                                    e.preventDefault();
                                    if (onClose) {
                                        onClose();
                                    }
                                }}
                                className="project-action-btn project-close-btn"
                                aria-label="Close modal"
                                type="button"
                                style={{ zIndex: 100 }}
                            >
                                <X className="project-action-icon" />
                            </button>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="project-content">
                        {/* Preview Section */}
                        <div className="project-preview">
                            {/* Navigation Arrows for Images - Removed since user has only one screenshot */}

                            {/* View Mode Indicator - Removed since user has only one screenshot */}

                            {/* Laptop Mockup */}
                            <div className="project-laptop-container">
                                <div className="project-laptop-frame">
                                    {/* Screen */}
                                    <div
                                        className="project-laptop-screen"
                                        style={{
                                            boxShadow: `0 0 60px ${accentColor}15`
                                        }}
                                    >
                                        {/* Camera */}
                                        <div className="project-laptop-camera" />

                                        {/* Content */}
                                        {showIframe ? (
                                            <div className="project-iframe-container">
                                                {!iframeLoaded && !iframeError && (
                                                    <div className="project-iframe-loading">
                                                        <div className="project-loading-content">
                                                            <div
                                                                className="project-loading-spinner"
                                                                style={{
                                                                    borderTopColor: accentColor,
                                                                    borderRightColor: accentColor
                                                                }}
                                                            />
                                                            <p className="project-loading-text">
                                                                Loading Live Website...
                                                            </p>
                                                            {/* Fallback button removed since user has only one screenshot */}
                                                        </div>
                                                    </div>
                                                )}
                                                {iframeError && (
                                                    <div className="project-iframe-error">
                                                        <div className="project-error-content">
                                                            <p className="project-error-text">
                                                                Failed to load website
                                                            </p>
                                                            {/* Fallback button removed since user has only one screenshot */}
                                                        </div>
                                                    </div>
                                                )}
                                                {/* Iframe wrapper for zoom-out scaling */}
                                                <div className="project-iframe-wrapper">
                                                    <iframe
                                                        src={enriched.url}
                                                        className="project-iframe"
                                                        onLoad={handleIframeLoad}
                                                        onError={handleIframeError}
                                                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
                                                        title={`Live preview of ${enriched.name}`}
                                                        style={{ display: iframeLoaded && !iframeError ? 'block' : 'none' }}
                                                    />
                                                </div>
                                            </div>
                                        ) : (
                                            enriched.images && enriched.images[0] && (
                                                <img
                                                    src={enriched.images[0]}
                                                    className="project-image"
                                                    alt="Project screenshot"
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                    }}
                                                />
                                            )
                                        )}
                                    </div>
                                </div>

                                {/* Laptop Base */}
                                <div className="project-laptop-base" />
                            </div>

                            {/* Thumbnails for Images - Removed since user has only one screenshot */}
                        </div>

                        {/* Project Details */}
                        <div className="project-details">
                            {/* Tab Navigation */}
                            <div className="project-tabs">
                                {["overview", "features", "feedback", "stats"].map((tab) => (
                                    <button
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`project-tab ${activeTab === tab ? 'active' : ''}`}
                                    >
                                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                        {activeTab === tab && (
                                            <motion.div
                                                className="project-tab-indicator"
                                                style={{ backgroundColor: accentColor }}
                                                layoutId="activeTab"
                                            />
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    className="project-tab-content"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Overview Tab */}
                                    {activeTab === "overview" && (
                                        <div className="project-overview">
                                            <p className="project-description">
                                                {enriched.description}
                                            </p>
                                            <div className="project-tags">
                                                {enriched.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="project-tag"
                                                        style={{
                                                            color: tag.color || accentColor,
                                                            borderColor: `${tag.color || accentColor}40`,
                                                            backgroundColor: `${tag.color || accentColor}10`
                                                        }}
                                                    >
                                                        {tag.name}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Features Tab */}
                                    {activeTab === "features" && (
                                        <div className="project-features">
                                            {enriched.features.map((feature, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="project-feature"
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <Zap
                                                        className="project-feature-icon"
                                                        style={{ color: accentColor }}
                                                    />
                                                    <span className="project-feature-text">
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Feedback Tab */}
                                    {activeTab === "feedback" && (
                                        <div className="project-feedback">
                                            {enriched.feedback.map((item, index) => (
                                                <motion.div
                                                    key={index}
                                                    className="project-feedback-item"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <div className="project-feedback-header">
                                                        <div className="project-feedback-user">
                                                            <h4 className="project-feedback-name">{item.name}</h4>
                                                            <p className="project-feedback-role">{item.role}</p>
                                                        </div>
                                                        <div className="project-feedback-rating">
                                                            {renderStars(item.rating)}
                                                        </div>
                                                    </div>
                                                    <p className="project-feedback-message">"{item.message}"</p>
                                                    <p className="project-feedback-date">{item.date}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Stats Tab */}
                                    {activeTab === "stats" && (
                                        <div className="project-stats">
                                            {Object.entries(enriched.liveStats).map(([key, value], index) => (
                                                <motion.div
                                                    key={key}
                                                    className="project-stat-item"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <Users className="project-stat-icon"
                                                        style={{ color: accentColor }} />
                                                    <div
                                                        className="project-stat-value"
                                                        style={{ color: accentColor }}
                                                    >
                                                        {value}
                                                    </div>
                                                    <div className="project-stat-label">
                                                        {key.replace(/([A-Z])/g, ' $1').trim()}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ProjectDetail;
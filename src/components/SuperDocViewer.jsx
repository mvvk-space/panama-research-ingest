import React, { useEffect, useRef, useState } from 'react';
import { Upload, FileText, X } from 'lucide-react';
import '@harbour-enterprises/superdoc/style.css';
import { SuperDoc } from '@harbour-enterprises/superdoc';

const SuperDocViewer = ({ onSubmit, existingTags }) => {
    const [file, setFile] = useState(null);
    const editorRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        abstract: '',
        tags: ''
    });

    const handleFileUpload = (event) => {
        const uploadedFile = event.target.files[0];
        if (uploadedFile && uploadedFile.name.endsWith('.docx')) {
            setFile(uploadedFile);
            setFormData(prev => ({ ...prev, title: uploadedFile.name.replace('.docx', '') }));
        } else {
            alert('Please upload a valid .docx file');
        }
    };

    const handleClearFile = () => {
        setFile(null);
        editorRef.current = null;
        setShowModal(false);
    };

    const handleSubmitClick = () => {
        setShowModal(true);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (onSubmit) {
            onSubmit({
                title: formData.title,
                authors: formData.author.split(',').map(a => a.trim()).filter(a => a),
                abstract: formData.abstract,
                tags: formData.tags.split(',').map(tag => tag.trim()).filter(t => t),
                file: file // Passing the raw file
            });
        }
        handleClearFile();
    };

    useEffect(() => {
        if (file && !editorRef.current) {
            try {
                const superdoc = new SuperDoc({
                    selector: '#superdoc-container',
                    toolbar: '#superdoc-toolbar',
                    document: file,
                    documentMode: 'editing',
                    pagination: true,
                    rulers: true,
                    onReady: (event) => {
                        console.log('SuperDoc is ready', event);
                    },
                    onEditorCreate: (event) => {
                        console.log('Editor is created', event);
                        editorRef.current = event;
                    },
                });
            } catch (error) {
                console.error("Failed to initialize SuperDoc:", error);
            }
        }
        return () => {
            // Optional cleanup
        };
    }, [file]);

    if (!file) {
        return (
            <div className="superdoc-upload-container">
                <div className="upload-box">
                    <FileText size={48} className="upload-icon" />
                    <h3>Upload a Document</h3>
                    <p>Select a .docx file to view and edit</p>

                    <label className="upload-btn">
                        <Upload size={18} />
                        <span>Choose File</span>
                        <input
                            type="file"
                            accept=".docx"
                            onChange={handleFileUpload}
                            style={{ display: 'none' }}
                        />
                    </label>
                </div>
            </div>
        );
    }

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '1rem' }}>
                <button
                    className="view-collection-btn"
                    onClick={handleSubmitClick}
                    style={{
                        background: 'var(--color-accent)',
                        color: 'var(--color-bg-dark)',
                        border: 'none',
                        padding: '0.8rem 1.5rem',
                        fontSize: '1rem'
                    }}
                >
                    Submit for Approval
                </button>
            </div>

            <div className="superdoc-wrapper" style={{ height: 'calc(100vh - 200px)' }}>
                <div className="superdoc-header">
                    <div className="file-info">
                        <FileText size={20} />
                        <span className="file-name">{file.name}</span>
                    </div>
                    <div id="superdoc-toolbar"></div>
                    <button className="close-btn" onClick={handleClearFile} title="Close Document">
                        <X size={20} />
                    </button>
                </div>
                <div id="superdoc-container" className="superdoc-content"></div>
            </div>

            {showModal && (
                <div className="modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="modal-content" onClick={e => e.stopPropagation()} style={{ width: '500px' }}>
                        <button className="modal-close" onClick={() => setShowModal(false)}>
                            <X size={24} />
                        </button>

                        <div className="modal-header">
                            <h2 className="modal-title" style={{ fontSize: '1.5rem' }}>Submit Research</h2>
                        </div>

                        <form onSubmit={handleFormSubmit} className="modal-body" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Author Name(s)</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Dr. Jane Doe"
                                    value={formData.author}
                                    onChange={e => setFormData({ ...formData, author: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--color-glass-border)',
                                        borderRadius: '8px',
                                        color: 'var(--color-text-primary)'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Title</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.title}
                                    onChange={e => setFormData({ ...formData, title: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--color-glass-border)',
                                        borderRadius: '8px',
                                        color: 'var(--color-text-primary)'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Abstract</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.abstract}
                                    onChange={e => setFormData({ ...formData, abstract: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--color-glass-border)',
                                        borderRadius: '8px',
                                        color: 'var(--color-text-primary)',
                                        fontFamily: 'inherit'
                                    }}
                                />
                            </div>

                            <div>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Tags (comma separated)</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Botany, Conservation"
                                    value={formData.tags}
                                    onChange={e => setFormData({ ...formData, tags: e.target.value })}
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem',
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid var(--color-glass-border)',
                                        borderRadius: '8px',
                                        color: 'var(--color-text-primary)',
                                        marginBottom: '0.5rem'
                                    }}
                                />
                                {existingTags && existingTags.length > 0 && (
                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                        {existingTags.map(tag => (
                                            <button
                                                key={tag}
                                                type="button"
                                                onClick={() => {
                                                    const currentTags = formData.tags ? formData.tags.split(',').map(t => t.trim()) : [];
                                                    if (!currentTags.includes(tag)) {
                                                        const newTags = [...currentTags, tag].filter(t => t).join(', ');
                                                        setFormData({ ...formData, tags: newTags });
                                                    }
                                                }}
                                                className="tag"
                                                style={{ cursor: 'pointer', border: '1px solid var(--color-glass-border)' }}
                                            >
                                                + {tag}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="modal-footer" style={{ marginTop: '1rem', padding: 0, border: 'none', background: 'transparent' }}>
                                <button type="submit" className="upload-btn" style={{ width: '100%', justifyContent: 'center' }}>
                                    Submit Document
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default SuperDocViewer;

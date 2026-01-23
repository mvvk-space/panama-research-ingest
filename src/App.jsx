import React, { useState } from 'react';
import { Search, BookOpen, Leaf, Users, FileText, Download, Filter, Menu, X, Mail, MapPin, Layers, ChevronRight } from 'lucide-react';
import { researchData as initialResearchData, authors as initialAuthors, collections } from './data';
import './index.css';
import SuperDocViewer from './components/SuperDocViewer';

// Components
const Sidebar = ({ isOpen, toggleSidebar, activeView, setActiveView }) => (
  <>
    <div className={`sidebar-overlay ${isOpen ? 'open' : ''}`} onClick={toggleSidebar} />
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="logo-icon">
          <Leaf size={28} color="var(--color-accent)" />
        </div>
        <h1 className="logo-text">Smithsonian <br /><span className="highlight">Panama</span></h1>
      </div>

      <nav className="nav-menu">
        <button
          className={`nav-item ${activeView === 'archive' ? 'active' : ''}`}
          onClick={() => { setActiveView('archive'); toggleSidebar(); }}
        >
          <BookOpen size={20} />
          <span>Research Archive</span>
        </button>
        <button
          className={`nav-item ${activeView === 'authors' ? 'active' : ''}`}
          onClick={() => { setActiveView('authors'); toggleSidebar(); }}
        >
          <Users size={20} />
          <span>Authors</span>
        </button>
        <button
          className={`nav-item ${activeView === 'collections' ? 'active' : ''}`}
          onClick={() => { setActiveView('collections'); toggleSidebar(); }}
        >
          <Layers size={20} />
          <span>Collections</span>
        </button>
        <button
          className={`nav-item ${activeView === 'superdoc' ? 'active' : ''}`}
          onClick={() => { setActiveView('superdoc'); toggleSidebar(); }}
        >
          <FileText size={20} />
          <span>Document Viewer</span>
        </button>
      </nav>

      <div className="sidebar-footer">
        <p>© 2026 Smithsonian Institute</p>
        <p className="dim">Jungle Retreat Archive</p>
      </div>
    </aside>
  </>
);

const ResearchCard = ({ item }) => (
  <div className="card">
    <div className="card-header">
      <div className="card-type">{item.type}</div>
      <div className="card-citations">
        <span className="citation-count">{item.citations}</span> Citations
      </div>
    </div>
    <h3 className="card-title">{item.title}</h3>
    <div className="card-meta">
      <span className="authors">{item.authors.join(", ")}</span>
      <span className="date">• {new Date(item.date).getFullYear()}</span>
    </div>
    <p className="card-abstract">{item.abstract}</p>
    <div className="card-footer">
      <div className="tags">
        {item.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <button className="icon-btn" aria-label="Download">
        <Download size={18} />
      </button>
    </div>
  </div>
);

const AuthorModal = ({ author, onClose, publications }) => {
  if (!author) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          {author.image ? (
            <img src={author.image} alt={author.name} className="modal-author-img" />
          ) : (
            <div className="modal-author-placeholder">{author.name[0]}</div>
          )}
          <div>
            <h2 className="modal-title">{author.name}</h2>
            <p className="modal-subtitle">{author.role} • {author.institution}</p>
          </div>
        </div>

        <div className="modal-body">
          <h3 className="modal-section-title">Published Research</h3>
          <div className="modal-publications">
            {publications.length > 0 ? (
              publications.map(pub => (
                <div key={pub.id} className="publication-item">
                  <div className="pub-header">
                    <span className="pub-type">{pub.type}</span>
                    <span className="pub-date">{new Date(pub.date).getFullYear()}</span>
                  </div>
                  <h4 className="pub-title">{pub.title}</h4>
                  <p className="pub-abstract">{pub.abstract}</p>
                  <div className="pub-footer">
                    <span className="pub-citation">{pub.citations} Citations</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="no-pubs">No publications found in this archive.</p>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button className="contact-btn">
            <Mail size={16} /> Contact Researcher
          </button>
        </div>
      </div>
    </div>
  );
};

const AuthorCard = ({ author, onClick }) => (
  <div className="card author-card" onClick={() => onClick(author)} style={{ cursor: 'pointer' }}>
    <div className="author-header">
      {author.image ? (
        <img src={author.image} alt={author.name} className="author-img" />
      ) : (
        <div className="author-img-placeholder">{author.name[0]}</div>
      )}
      <div className="author-info">
        <h3 className="card-title">{author.name}</h3>
        <p className="author-role">{author.role}</p>
        <p className="author-inst"><MapPin size={14} style={{ display: 'inline', marginRight: '4px' }} /> {author.institution}</p>
      </div>
    </div>

    <div className="author-interests">
      <h4>Research Interests</h4>
      <div className="tags">
        {author.interests.map(interest => <span key={interest} className="tag">{interest}</span>)}
      </div>
    </div>

    <button className="contact-btn">
      <Mail size={16} /> Contact Researcher
    </button>
  </div>
);

const CollectionCard = ({ collection }) => (
  <div className="card collection-card" style={{ padding: 0, overflow: 'hidden' }}>
    <div className="collection-cover" style={{ backgroundImage: `url(${collection.coverImage})` }}>
      <div className="collection-overlay">
        <span className="item-count"><FileText size={14} style={{ marginRight: 4 }} /> {collection.itemCount} Items</span>
      </div>
    </div>
    <div className="collection-content" style={{ padding: '1.5rem' }}>
      <h3 className="card-title">{collection.title}</h3>
      <p className="collection-desc">{collection.description}</p>
      <div className="collection-footer">
        <div className="curator-info">
          <span className="dim-label">Curated by</span>
          <span className="curator-name">{collection.curator}</span>
        </div>
        <button className="view-collection-btn">
          Explore <ChevronRight size={16} />
        </button>
      </div>
    </div>
  </div>
);

const LandingPage = ({ onEnter }) => (
  <div className="landing-page">
    <div className="landing-content">
      <div className="landing-icon">
        <Leaf size={64} color="var(--color-accent)" />
      </div>
      <h1 className="landing-title">Smithsonian <br /><span className="highlight">Panama</span></h1>
      <p className="landing-subtitle">Jungle Retreat Archive</p>
      <button className="enter-btn" onClick={onEnter}>
        Enter Archive <ChevronRight size={20} />
      </button>
    </div>
  </div>
);

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeView, setActiveView] = useState("archive"); // 'archive', 'authors', 'collections'
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [showLanding, setShowLanding] = useState(true);
  const [researchItems, setResearchItems] = useState(initialResearchData);
  const [authorsList, setAuthorsList] = useState(initialAuthors);
  const [categories, setCategories] = useState(["All", "Botany", "Zoology", "Entomology", "Ecology", "Microclimate", "Hydrology"]);

  const handleNewSubmission = (submission) => {
    const newItem = {
      id: researchItems.length + 1,
      title: submission.title || "Untitled Submission",
      authors: submission.authors || ["Guest Researcher"],
      date: new Date().toISOString(),
      abstract: submission.abstract || "No abstract provided.",
      citations: 0,
      tags: submission.tags || ["New Submission"],
      type: "Draft",
      ...submission
    };
    // Handle new tags
    const newTags = submission.tags || [];
    const uniqueNewTags = newTags.filter(tag => !categories.includes(tag));
    if (uniqueNewTags.length > 0) {
      setCategories(prev => [...prev, ...uniqueNewTags]);
    }

    // Handle Authors
    // Simple check: if author name doesn't exist, create a stub profile
    const submitterNames = submission.authors || ["Guest Researcher"];
    const newAuthors = [];

    submitterNames.forEach(name => {
      const exists = authorsList.some(a => a.name === name);
      if (!exists) {
        newAuthors.push({
          id: "temp-" + Date.now() + Math.random(),
          name: name,
          role: "Contributor",
          institution: "External",
          interests: newTags,
          image: null // Placeholder will be used
        });
      }
    });

    if (newAuthors.length > 0) {
      setAuthorsList(prev => [...prev, ...newAuthors]);
    }

    setResearchItems([newItem, ...researchItems]);
    setActiveView('archive');
    alert("Document submitted for approval!");
  };

  // Filter Logic for Archive
  const filteredData = researchItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.abstract.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === "All" || item.tags.includes(activeFilter);
    return matchesSearch && matchesFilter;
  });

  // Filter Logic for Authors
  const filteredAuthors = authorsList.filter(author =>
    author.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    author.institution.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter Logic for Collections
  const filteredCollections = collections.filter(col =>
    col.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    col.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get publications for selected author
  // Get publications for selected author
  const authorPublications = selectedAuthor
    ? researchItems.filter(paper => paper.authors.includes(selectedAuthor.name))
    : [];



  if (showLanding) {
    return <LandingPage onEnter={() => setShowLanding(false)} />;
  }

  return (
    <div className="app-container">
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        activeView={activeView}
        setActiveView={setActiveView}
      />

      <main className="main-content">
        <header className="top-bar">
          <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} color="var(--color-text-primary)" />
          </button>
          <div className="user-profile">
            <span className="user-name">Guest Researcher</span>
            <div className="avatar">G</div>
          </div>
        </header>

        {activeView === 'archive' && (
          <>
            <section className="hero">
              <h2 className="section-title">Explore the Jungle's Secrets</h2>
              <p className="section-subtitle">Access decades of biological research from the Panama field station.</p>

              <div className="search-container">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Search for species, authors, or topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div className="filters">
                {categories.map(cat => (
                  <button
                    key={cat}
                    className={`filter-pill ${activeFilter === cat ? 'active' : ''}`}
                    onClick={() => setActiveFilter(cat)}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </section>

            <section className="results-grid">
              {filteredData.map(item => (
                <ResearchCard key={item.id} item={item} />
              ))}
              {filteredData.length === 0 && (
                <div className="no-results">
                  <p>No research documents found matching your criteria.</p>
                </div>
              )}
            </section>
          </>
        )}

        {activeView === 'authors' && (
          <>
            <section className="hero">
              <h2 className="section-title">Connect with Researchers</h2>
              <p className="section-subtitle">Meet the minds behind the groundbreaking discoveries in the rainforest.</p>

              <div className="search-container">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Find a researcher or institution..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </section>

            <section className="results-grid">
              {filteredAuthors.map(author => (
                <AuthorCard
                  key={author.id}
                  author={author}
                  onClick={setSelectedAuthor}
                />
              ))}
            </section>
          </>
        )}

        {activeView === 'collections' && (
          <>
            <section className="hero">
              <h2 className="section-title">Curated Collections</h2>
              <p className="section-subtitle">Themed sets of specimens, data, and papers hand-picked by our curators.</p>

              <div className="search-container">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="Search collections..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </section>

            <section className="results-grid">
              {filteredCollections.map(col => (
                <CollectionCard key={col.id} collection={col} />
              ))}
            </section>
          </>
        )}

        {activeView === 'superdoc' && (
          <div style={{ height: '100%' }}>
            <div style={{ marginBottom: '1rem' }}>
              <h2 className="section-title" style={{ fontSize: '2rem' }}>Document Workspace</h2>
              <p className="section-subtitle">View and edit your .docx files</p>
            </div>
            <SuperDocViewer
              onSubmit={handleNewSubmission}
              existingTags={categories.filter(c => c !== "All")}
            />
          </div>
        )}

        {/* Modal */}
        {selectedAuthor && (
          <AuthorModal
            author={selectedAuthor}
            onClose={() => setSelectedAuthor(null)}
            publications={authorPublications}
          />
        )}

      </main>
    </div>
  );
}

export default App;

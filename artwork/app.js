/**
 * ArtSpace Logic
 * Handles image rendering, uploading, and local persistence.
 */

// --- Constants & Config ---
const STORAGE_KEY = 'artspace_gallery_v1';
const MAX_IMAGE_WIDTH = 800; // Resize large images to save LocalStorage space

// Seed data to populate the gallery initially
const SEED_DATA = [
    {
        id: 'seed_1',
        title: 'Cyberpunk City',
        author: 'NeoArtist',
        date: new Date().toISOString(),
        image: 'https://images.unsplash.com/photo-1515462277126-2dd0c162007a?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'seed_2',
        title: 'Abstract Fluid',
        author: 'Jane Doe',
        date: new Date().toISOString(),
        image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'seed_3',
        title: 'Neon Geometry',
        author: 'Unknown',
        date: new Date().toISOString(),
        image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800'
    },
    {
        id: 'seed_4',
        title: 'Space Odyssey',
        author: 'Cosmos',
        date: new Date().toISOString(),
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800'
    }
];

// --- Application Logic ---

class ArtSpace {
    constructor() {
        this.gallery = [];
        this.init();
    }

    init() {
        this.loadGallery();
        this.setupEventListeners();
        this.renderGallery();
    }

    loadGallery() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            this.gallery = JSON.parse(stored);
        } else {
            // Initialize with seed data if empty
            this.gallery = SEED_DATA;
            this.saveGallery();
        }
    }

    saveGallery() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(this.gallery));
        } catch (e) {
            console.error('Storage quota exceeded', e);
            alert('Storage full! Clear some space to upload more.');
        }
    }

    // Resize image to base64 to save space
    async processImage(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;

                    // Maintain aspect ratio
                    if (width > MAX_IMAGE_WIDTH) {
                        height = Math.round((height * MAX_IMAGE_WIDTH) / width);
                        width = MAX_IMAGE_WIDTH;
                    }

                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0, width, height);
                    resolve(canvas.toDataURL('image/jpeg', 0.8)); // Compress quality 0.8
                };
            };
            reader.onerror = error => reject(error);
        });
    }

    addArtwork(artwork) {
        this.gallery.unshift(artwork); // Add to top
        this.saveGallery();
        this.renderGallery();
    }

    renderGallery() {
        const grid = document.getElementById('galleryGrid');
        const emptyState = document.getElementById('emptyState');
        
        grid.innerHTML = '';
        
        if (this.gallery.length === 0) {
            emptyState.classList.remove('hidden');
            return;
        } else {
            emptyState.classList.add('hidden');
        }

        this.gallery.forEach((art, index) => {
            const card = document.createElement('div');
            card.className = 'art-card';
            card.style.animationDelay = `${index * 100}ms`; // Staggered animation
            card.innerHTML = `
                <div class="art-image-wrapper">
                    <img src="${art.image}" alt="${art.title}" loading="lazy">
                </div>
                <div class="art-info">
                    <h3>${art.title || 'Untitled'}</h3>
                    <p>by ${art.author || 'Anonymous'}</p>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    setupEventListeners() {
        // Modal Logic
        const modal = document.getElementById('uploadModal');
        const openBtn = document.getElementById('uploadBtn');
        const closeBtn = document.getElementById('closeModal');
        const publishBtn = document.getElementById('publishBtn');
        
        // Drag & Drop
        const dropZone = document.getElementById('dropZone');
        const fileInput = document.getElementById('fileInput');
        const previewImg = document.getElementById('imagePreview');
        const previewCont = document.getElementById('previewContainer');

        let currentFile = null;

        const toggleModal = (show) => {
            modal.classList.toggle('active', show);
            if (!show) {
                // Reset form
                this.resetForm();
            }
        };

        openBtn.addEventListener('click', () => toggleModal(true));
        closeBtn.addEventListener('click', () => toggleModal(false));
        modal.addEventListener('click', (e) => {
            if (e.target === modal) toggleModal(false);
        });

        // File Selection Logic
        dropZone.addEventListener('click', () => fileInput.click());
        
        dropZone.addEventListener('dragover', (e) => {
            e.preventDefault();
            dropZone.classList.add('dragover');
        });
        
        dropZone.addEventListener('dragleave', () => {
            dropZone.classList.remove('dragover');
        });
        
        dropZone.addEventListener('drop', (e) => {
            e.preventDefault();
            dropZone.classList.remove('dragover');
            if (e.dataTransfer.files.length) {
                handleFileSelect(e.dataTransfer.files[0]);
            }
        });

        fileInput.addEventListener('change', (e) => {
            if (e.target.files.length) {
                handleFileSelect(e.target.files[0]);
            }
        });

        const handleFileSelect = (file) => {
            if (!file.type.startsWith('image/')) {
                alert('Please upload an image file.');
                return;
            }
            currentFile = file;
            
            // Show preview logic
            const reader = new FileReader();
            reader.onload = (e) => {
                previewImg.src = e.target.result;
                previewCont.classList.add('visible');
                dropZone.classList.add('hidden');
            };
            reader.readAsDataURL(file);
        };

        // Publish Action
        publishBtn.addEventListener('click', async () => {
            if (!currentFile) {
                alert('Please select an image first.');
                return;
            }

            const title = document.getElementById('artTitle').value;
            const author = document.getElementById('artAuthor').value;
            
            publishBtn.textContent = 'Processing...';
            publishBtn.disabled = true;

            try {
                const base64Image = await this.processImage(currentFile);
                
                const newArtwork = {
                    id: Date.now().toString(),
                    title: title,
                    author: author,
                    date: new Date().toISOString(),
                    image: base64Image
                };

                this.addArtwork(newArtwork);
                
                // Success feedback
                toggleModal(false);
                this.showToast();
                
            } catch (error) {
                console.error(error);
                alert('Failed to process image.');
            } finally {
                publishBtn.textContent = 'Publish to Gallery';
                publishBtn.disabled = false;
            }
        });
    }

    resetForm() {
        document.getElementById('fileInput').value = '';
        document.getElementById('artTitle').value = '';
        document.getElementById('artAuthor').value = '';
        document.getElementById('imagePreview').src = '';
        document.getElementById('previewContainer').classList.remove('visible');
        document.getElementById('dropZone').classList.remove('hidden');
    }

    showToast() {
        const toast = document.getElementById('toast');
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    new ArtSpace();
});

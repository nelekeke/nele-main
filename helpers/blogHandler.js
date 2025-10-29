class BlogHandler {
    constructor() {
        this.postsContainer = document.getElementById('posts-container');
        this.posts = [];
    }

    async loadPosts() {
        try {
            const response = await fetch('./data/blogPosts.json');
            const data = await response.json();
            this.posts = data.posts;
            this.displayPosts();
        } catch (error) {
            console.error('Error loading blog posts:', error);
            this.showError('Virhe ladattaessa blogikirjoituksia.');
        }
    }

    displayPosts() {
        if (!this.postsContainer) return;

        this.postsContainer.innerHTML = '';

        if (this.posts.length === 0) {
            this.showError('Ei blogikirjoituksia näytettävänä.');
            return;
        }

        // Render all posts in the same container
        this.posts.forEach(post => {
            const article = document.createElement('article');
            article.className = 'post';

            // Render non-featured posts using the same .hero-text card structure
            // so they visually match the featured hero post.
            article.innerHTML = `
                <div class="hero-text">
                    <h1>${post.title}</h1>
                    <div class="post-meta">
                        <span class="post-date">${this.formatDate(post.date)}</span>
                        <span class="post-author">${post.author}</span>
                    </div>
                    <div class="post-content">
                        ${this.renderContent(post.content)}
                    </div>
                    <div class="post-footer">
                        <div class="post-tags">
                            ${this.renderTags(post.tags)}
                        </div>
                    </div>
                </div>
            `;

            this.postsContainer.appendChild(article);
        });
    }

    renderContent(content) {
        return content.map(block => {
            switch (block.type) {
                case 'paragraph':
                    return `<p>${block.text}</p>`;
                case 'subheading':
                    return `<h3>${block.text}</h3>`;
                case 'list':
                    return `
                        <ul>
                            ${block.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    `;
                default:
                    return '';
            }
        }).join('');
    }

    renderTags(tags) {
        return tags
            .map(tag => `<span class="tag">#${tag}</span>`)
            .join('');
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('fi-FI', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    showError(message) {
        if (this.blogContainer) {
            this.blogContainer.innerHTML = `
                <div class="error-message">
                    <p>${message}</p>
                </div>
            `;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const blogHandler = new BlogHandler();
    blogHandler.loadPosts();
});
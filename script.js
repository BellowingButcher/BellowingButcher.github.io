document.addEventListener('DOMContentLoaded', (event) => {
    // Smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Array of blog posts
    const blogPosts = [
        {
            title: "Harvest Season Begins",
            date: "2023-10-01",
            content: "Join us as we start the harvest season with fresh vegetables and fruits."
        },
        {
            title: "New Butchering Techniques",
            date: "2023-09-15",
            content: "Learn about the new sustainable butchering methods we've adopted at the farm."
        },
        {
            title: "Upcoming Events",
            date: "2023-11-15",
            content: "Mark your calendars for our farm's annual fall festival!"
        },
        {
            title: "Cooper is a Poopy Butt",
            date: "2024-12-04",
            content: "Today I signed up for X and now I am writing blogs. What will happen next?"
        }
    ];

    // Function to generate blog posts
    function generateBlogPosts(posts) {
        const blogPostsContainer = document.getElementById('blogPosts');
        posts.forEach(post => {
            const article = document.createElement('article');
            article.innerHTML = `
                <h3>${post.title}</h3>
                <p>Posted on: <time datetime="${post.date}">${new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time></p>
                <p>${post.content}</p>
            `;
            blogPostsContainer.appendChild(article);
        });
    }

    // Generate blog posts
    generateBlogPosts(blogPosts);
});
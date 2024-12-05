document.addEventListener('DOMContentLoaded', (event) => {
    // Simple interaction: Smooth scrolling to sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Example of adding dynamic content
    const blogSection = document.getElementById('blog');
    let newPost = document.createElement('article');
    newPost.innerHTML = `
        <h3>Upcoming Events</h3>
        <p>Posted on: <time datetime="2023-11-15">November 15, 2023</time></p>
        <p>Mark your calendars for our farm's annual fall festival!</p>
    `;
    blogSection.appendChild(newPost);
	
	let anotherPost = document.createElement('article');
	anotherPost.innerHTML = `
		<h3>Test Article</h3>
		<p>Posted on: <time datetime="2024-12-04">December 4, 2024</time></p>
		<p>Today I signed up for X and now I am writing blogs. What will happen next?</p>
	`;
	blogSection.appendChild(newPost);
});
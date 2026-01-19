//Used on the resume to make the employment history interactive (each job is clickable)
document.addEventListener('DOMContentLoaded', function () {
    //Placeholder array with employment history data
    const employmentHistory = [
        { id: 1, title: 'Military', company: 'United States Coast Guard', years: '2008 - Present', description: 'United States Coast Guard Yeoman specialize in military human resource issues, ranging from pay to travel and assignments.  Yeoman are human relations problem solvers, uniquely specialized to support the needs of the military.' },
        { id: 2, title: 'Customer Service Representative', company: 'The Original Fudge Kitchen', years: '2002 - 2008', description: 'The Original Fudge Kitchen is a candy store located in Cape May, NJ.  At this employment, I assisted customers and sold store products.' }
        // Add more entries as needed
    ];

    const timeline = document.getElementById('timeline');

    // Create timeline entries
    employmentHistory.forEach(job => {
        //Entry container for job
        const entry = document.createElement('div');
        entry.className = 'entry';
        entry.id = 'entry-' + job.id;

        // Title header for job
        const header = document.createElement('div');
        header.className = 'entry-header';
        header.innerText = job.title;

        // Content container for job, initially hidden
        const content = document.createElement('div');
        content.className = 'entry-content';
        content.innerHTML = `<strong>Company:</strong> ${job.company}<br>
                             <strong>Years:</strong> ${job.years}<br>
                             <p>${job.description}</p>`;
        content.style.display = 'none';

        // Append header and content to the entry
        entry.appendChild(header);
        entry.appendChild(content);

        // Event listener to toggle content visibility
        header.addEventListener('click', function () {
            // Check if the clicked header's content is currently shown
            const isContentShown = content.style.display === 'block';
            // Hide all open contents
            document.querySelectorAll('.entry-content').forEach(el => {
                el.style.display = 'none'; // Remove active class
            });
            //deactivate all headers
            document.querySelectorAll('.entry').forEach(el => {
                el.classList.remove('active'); // Remove active class
            });

            if (!isContentShown) {
                //If it was not shown before, display it
                content.style.display = 'block';
                entry.classList.add('active');
            } //If it was shown, it will be hiddent as part of the above loop
        });

        timeline.appendChild(entry);
    });
});
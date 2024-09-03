const input = document.querySelector("input");
const jobListings = document.querySelectorAll(".job-listing");
const filters = [
    ...document.querySelectorAll("#frontend, #backend, #junior, #senior, #fullstack, #midweight, #javascript, #react, #css, #html, #python, #sass, #ror, #django, #vue, #ruby")
];

let selectedFilters = [];

filters.forEach(filter => {
    filter.addEventListener("click", function() {
        const keywordText = this.innerText;

        // Toggle the filter in the selectedFilters array
        if (selectedFilters.includes(keywordText)) {
            selectedFilters = selectedFilters.filter(filter => filter !== keywordText);
        } else {
            selectedFilters.push(keywordText);
        }

        // Update the input placeholder to show the selected filters
        input.placeholder = selectedFilters.join(", ");
        input.style.display = "block";
        

        // Filter job listings based on selected filters
        jobListings.forEach(jobListing => {
            const jobText = jobListing.innerText.toLowerCase();
            const matchesAllFilters = selectedFilters.every(filter => jobText.includes(filter.toLowerCase()));

            if (matchesAllFilters) {
                jobListing.style.display = 'flex';
            } else {
                jobListing.style.display = 'none';
            }
        });
    });
});

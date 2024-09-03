const input = document.querySelector("input");
const frontends = document.querySelectorAll("#frontend");
const backends = document.querySelectorAll("#backend");
const juniors = document.querySelectorAll("#junior");
const seniors = document.querySelectorAll("#senior");
const fullstacks = document.querySelectorAll("#fullstack"); 
const midweights = document.querySelectorAll("#midweight");
const javascripts = document.querySelectorAll("#javascript");
const reacts = document.querySelectorAll("#react");
const csss = document.querySelectorAll("#css");
const htmls = document.querySelectorAll("#html");
const pythons = document.querySelectorAll("#python"); 
const sasss = document.querySelectorAll("#sass");
const ror = document.querySelector("#ror"); 
const django = document.querySelector("#django"); 
const vue = document.querySelector("#vue");
const rubys = document.querySelectorAll("#ruby");
const jobListings = document.querySelectorAll(".job-listing");

frontends.forEach(frontend => {
    frontend.addEventListener("click", function(){
        const keywordText = this.innerText;
        input.placeholder = keywordText;
        input.style.display = "block"

        jobListings.forEach(jobListing => {
            if (jobListing.innerText.toLowerCase().includes(keywordText.toLowerCase())) {
                jobListing.style.display = 'flex'; 
    
            } else {
                jobListing.style.display = 'none'; 
            }
        });
    })
})




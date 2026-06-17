import GitHubCalendar
from "react-github-calendar";

export default function GithubStats(){

return(

<section>

<h2 className="section-title">
GitHub Activity
</h2>

<GitHubCalendar
username="YOUR_GITHUB_USERNAME"
/>

</section>

);

}
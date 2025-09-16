# COMP488 Github + Vercel Assignment

This is a simple website created for assignment 2.
It demonstrates HTML, CSS, JavaScript, Git/Github for version control and deployment with Vercel

## Run Locally
1. Clone GitHub repo to local system
- HTTP Link to clone: https://github.com/jmlizardi/comp488-jlizardi1-vercel-site.git
2. Navigate to assignment_2 direcctory
3. Open 'index.html' in your browser (double-click or 'open index.html' on macOS)

## LIVE DEMO
[view site on Vercel] (https://comp488-vercel-site-4bij.vercel.app/)

# Reflection
For this assignment I created a simple static site using HTML, CSS, and JaveScript. The site contains clearly marked sections. First section defines the project, Second has some filler "Lorem ipsum" text, and the third contains a interactive button "Click Me" that upon being toggled changes the text above the button. The site has a clear header, clearly marked sections, a footer, and a marked interactive demo. The site is mobile device friendly. The goal here was to practice deploying a realistic workflow: version control with Git, hosting code on GitHub, and automatic deployment via Vercel.

The Git/GitHub portion helped me practice clear, incremental commits. Something i've generally still been getting used to in this class with the git add, commit, push pipeline. Making meaningful commits with brief, effective comments to mark progression and be easy to follow. I connected my new local repo to the remote GitHub and verified the URL for fetch/origin to better grasp how origin works in the CLI call. After the repo was live, importing it into Vercel was forward and easy. It was cool to experiment with new pushes after deployment to see that any new actions would automatically redeploy and go into effect making it easy to make live changes to the site. I had a inital hiccup on Vercel where I renamed the repo, and did not update the local push URL causing a "Repository not found" error while pushing origin main. I resolved it with Git updating the URL and pushed again. After which which was easily addressed and just helped reinforce order of operations and troubleshooting with Git and GitHub.

One thing I learned was how Git and GitHub integrate so you can track development easily so you can follow progression instead of just working and updating a 'final file' by providing a chronological structure for the entire project. I learned what a .gitignore file does, which I used mine to disable .DS_Store which in assignment_1 was giving me commit issues. I learned more about how GitHub functions as a remote host, as the cloud essentially for created code. I always knew GitHub had a lot of cool functionality and integration but I did not know how easy it would be to deploy a HTML site with Vercel thanks to GitHub. I learned Vercel is a neat tool that allows live deployments of sites with very little manual configuration, even providing a domain and continously updating any new developments. Ultimately these three tools together showed me how we can locally generate something, sync it to the cloud, and auto deploy from the cloud and this project took me through the deployment workflow in a simple way by automating it with tools which is a real world example of CI/CD pipelines. I am also walking away with better habits such as making effective commits to provide a clear history of each design phase a project passes through. 
Go to www.git-scm.com and setup git on window
https://git-scm.com/downloads

After installing, use Gitbash command prompt always

Make sure you can connect to GitHub using SSH. You can set it up using below instructions available
https://docs.github.com/en/github/authenticating-to-github/connecting-to-github-with-ssh

Once you finish the above steps you can connect to github using SSH 

Go to Github.com to checkout (pull down) the code in your local working directory
git clone git@github.com:adityaamoghe/DiscordBot.git

Then run following commands
git checkout Develop

We will be using this branch for all the code changes
Make small changes and then use following command to push the code to remote
git add -u  // This will ad any changes to existing files into git staging areas for commit. One can also do "git add . " if you add any new files in the code

Then commit locally
git commit -m "Some nice description of the changes"  // Do not commit large changes. And do not commit very small either. Do small changes in logical unit and do frequent commit

Now push this changes to remote GitHub
git push
var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/frankvp11/PersonalWebsite.git', // Update to point to your repository  
        user: {
            name: 'Frank van Paassen', // update to use your name
            email: 'frankvanpaassen3@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)
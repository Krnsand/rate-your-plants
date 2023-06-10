# **PetFriends**

This is a social media for your pets! You can make your beloved pets a profile so they can post silly photos of themselves and follow, vote (or downvote), and comment on other pets' profiles! All pets are welcome! From cats, dogs, hedgehogs, lizards, and so on. The site is a content-sharing platform, which, and once you sign up, you will be redirected to sign in and then redirected to the home page/main feed. From there you can click on your profile icon in the top right of the NavBar and see your profile stats - which is a count of how many posts you've added, how many users you follow, and how many users follow you - see your posts and click on the bars to edit your profile, password, and username. Personalise your pet's profile with a picture and a bio, a little bit about your pet!

Once your pet follows a few profiles, you'll be able to see said followed profiles in the "PawFeed" section from the NavBar. The NavBar also contains a "Saved" section, which allows you to see posts that you (your pets) specifically saved.

There is a sidebar featured on the posts and profile pages, which displays the most followed users for a "Recommended users to follow" feature.

Once you're on the HomePage, you can "Add post", you can also use the search bar above the "Add post" section to search through all posts using a keyword or a user's name. 

On the post's page, you will see the full post on a card, the count of votes/downvotes, along with the reply section at the bottom of the post. The three dots on the side of a post you own allow you to edit or delete your posts, and the three dots beside a reply allows for the same functions.

This project is the final of five projects that need to be completed to receive a diploma in Software Development from The Code Institute.

## **Responsive screen display**

![screenshot](documentation/test_screenshots/responsive.png)


A live version of this website will be found here: https://pet-friends.herokuapp.com/

* Deployed FrontEnd - https://pet-friends.herokuapp.com/

* Deployed BackEnd API - https://petfriends-api.herokuapp.com/

* BackEnd Repo - https://github.com/JodyMurray/my-api.git

* FrontEnd Repo - https://github.com/JodyMurray/petfriends.git



## **Table of Contents** ##
<details><summary>UX</summary>

- [User Demographic](#user-demographic "User Demographic")
- [Site Goals](#site-goals "Site Goals")
- [Audience](#audience "Audience")
- [User Stories](#user-stories "User Stories")

</details>
<details><summary>Design</summary>

- [Colour Scheme](#colour-scheme "Colour Scheme")
- [Typography](#typography "Typography")
- [Iconography](#iconography "Iconography")
- [Wireframes](#wireframes "Wireframes")
- [Images](#images "Images")

</details>
<details><summary>Features</summary>

- [NavBar](#navbar "NavBar")
- [Home Landing Page](#home-landing-page "Home Landing Page")
- [Post Page](#post-page "Post Page")
- [About Page](#about-page "About Page")
- [PawFeed](#pawfeed "PawFeed")
- [Saved](#saved "Saved")
- [Profile Page](#profile-page "Profile Page")
- [Sign-in](#sign-in "Sign-in")
- [Sign-up](#sign-up "Sign-up")
- [No results found](#no-results-found "No results found")
- [CRUD](#crud "CRUD")
- [Defensive Design](#defensive-design "Defensive Design")
- [Future Implementations](#future-implementations "Future Implementations")
- [Components](#components "Components")

</details>

<details><summary>Technologies Used</summary>

- [Languages Used](#languages-used "Languages Used")
- [Frameworks, Libraries and Programs Used](#frameworks-libraries-and-programs-used "Frameworks, Libraries and Programs Used")
- [Databases platform and cloud storage](#databases-platform-and-cloud-storage "Databases platform and cloud storage")

</details>
<details><summary>Testing</summary>

- [Introduction](#introduction "Introduction")
- [Validator testing](#validator-testing "Validator Testing")
- [Manual Testing](#manual-testing "Manual Testing")
- [User Story Testing](#user-story-testing "User Story Testing")
- [Fixed Bugs and Solutions](#fixed-bugs-and-solutions "Fixed Bugs and Solutions") 
- [Unfixed Bugs](#unfixed-bugs "Unfixed Bugs")

</details>

<details><summary>Deployment</summary>

- [GitHub](#github "GitHub")
- [Heroku](#heroku "heroku")

</details>


<details><summary>Credits</summary>

- [Acknowledgements](#acknowledgements "Acknowledgements")
- [Sources](#sources "Sources")
- [Media](#media "Media")

</details>

------------------------------------------------------------------------------------------------------------

## **UX**

### **User Demographic**

This application has been designed for pets of all kinds and ages who want to share content and make some new friends!
Make your pet a profile, add a post and start interacting with fellow pets! 

### **Site Goals**

The goal for this site has been to build a content sharing platform to allow users to make social media profiles for their pets, add posts, follow and unfollow other users, vote or downvote for posts, as well as save them, and reply to other users' posts too! You can also use the provided search bar to search through the posts with a keyword or a user's name. 


### **Audience**

For your pets! Especially those looking to make new friends. For users who just want to see photos of pets!


### **User Stories**
User Stories and Backend Tasks can be found in this GitHub repository project Kanban board, and for this project, all user stories can be found [here](https://github.com/users/JodyMurray/projects/11)

## **Design**

### **Colour Scheme**
The colour scheme was chosen from researching trending colour schemes on this website:
[coolers](https://coolors.co/palettes/trending).
- The background colour for the app is  *rgb(249, 251, 251)*
- The background colour for the content boxes is *rgb(246, 239, 245)*
- The background colour for the NavBar is a linear-gradient *(to right, rgba(241, 231, 254), rgba(213, 184, 255))*
- The background colour for the downVotes and saved icons in posts is *rgb(7, 108, 108)*
- The background colour for headings in the signup/in page is *rgb(122,	33,	178)*
- The background colour for the "light" buttons is *rgb(122, 33, 178), rgb(221, 198, 236)*
- The background colour for the unfollow button is *rgb(139, 227, 218), rgb(46, 205, 189)*

The colour palette in order as mentioned above.
The source to put this palette together was [here](https://colorhunt.co/)

![screenshot](documentation/test_screenshots/colourScheme1.png)
![screenshot](documentation/test_screenshots/colourScheme2.png)



### **Typography**

All fonts are from the Google Fonts library. The following fonts were chosen for the page:
- 'Hanken Grotesk', sans-serif for the headers in the SignInUpForms.
- 'Raleway', sans-serif for the rest of the font on the page.

### **Iconography**

The logo used for this project was made using [Looka](https://looka.com/explore).

![screenshot](documentation/features/LogoShot.png)

- Other icons were taken from [Font Awesome](https://fontawesome.com/)

### **Wireframes**

Wireframe for home page/feed:

![screenshot](documentation/wireframes/wireframes1.png)
<br>
<br>

Wireframe for post page:

![screenshot](documentation/wireframes/wireframes2.png)
<br>
<br>

Wireframe for profile page:

![screenshot](documentation/wireframes/wireframes3.png)
<br>
<br>

Wireframe for the page to create a form:

![screenshot](documentation/wireframes/wireframes4.png)
<br>
<br>

### **Images**

All images for the website's pages were sourced through google and stored on Cloudinary.

The images used for the posts and pet profiles were sourced from google, but mostly from pets I live with (Yoda) and my friend's pets. 

## **Features**

### **NavBar**
NavBar, the user is not logged in.

![screenshot](documentation/features/NavBar2.png)

NavBar, the user is logged in.

![screenshot](documentation/features/NavBar.png)

### **Home Landing Page**

The home screen and landing page, with the "recommended users to follow" sidebar.

![screenshot](documentation/features/HomePage.png)

### **Post Page**

- The post's page, with the recommended user to follow sidebar.
- Thumbs up and thumbs down buttons to upvote or downvote any post to your desire. Each icon goes a solid colour once a user has clicked on it, these icons will also undo the action if clicked on again.
- On the top right of the post beside the date posted, you have a bookmark icon to save this post, which later you can view in the "Saved" section from the NavBar. If you save a post, it will be indicated by the "bookmark" icon, which goes a solid colour once it's clicked, if clicked again, this will undo the action of saving the post.
- The three dots on the side of the post image is the button to edit or delete your post.
- And the comment section, create, edit, and delete your comments!

![screenshot](documentation/features/PostPage1.png)
![screenshot](documentation/features/PostPage2.png)


### **About Page**

Just a little paragraph about the site! This page will only appear in the NavBar if you are not signed in.

![screenshot](documentation/features/About.png)

### **PawFeed**

The PawFeed consists of posts from users that you follow.

![screenshot](documentation/features/PawFeed.png)

### **Saved**

The Saved page consists of posts the user has specifically saved for future viewing.

![screenshot](documentation/features/Saved.png)

### **Profile Page**

- Your profile page, or another user's, along with the sidebar of recommended profiles to follow. 
- The profile page contains a bio section, the bars in the corner to edit your profile and change your username or password.
- The page also holds all of the posts that the owner of the page has added.

![screenshot](documentation/features/ProfilePage.png)

### **Sign-in**

Sign-in page, along with a link to sign up for an account if you haven't already!

![screenshot](documentation/features/SignIn.png)

### **Sign-up**

Sign-up page, along with a link to sign in if you have an account already!


![screenshot](documentation/features/SignUp.png)

### **No results found**
#### The "No results image" will appear when:

* The search bar entry does not exist:

![screenshot](documentation/test_screenshots/NoResults2.png)

* An invalid HTTP request is made:

![screenshot](documentation/test_screenshots/NoResults1.png)

* On the user's profile page, if no posts have been added yet:

![screenshot](documentation/test_screenshots/NoResults3.png)

### **CRUD**
The CRUD functionality for this project is as follows:

* The user can, once signed up to an account, update their profile with a profile picture/bio. They can also update their username and password from the profile page.
* The user can also, once a post has been created, update or delete their post. The three dots on the right of the post's image will either delete the post (and bring you back to the home page once this is done) or edit your post, bringing you to an edit post form.
* Users can also, once they've created a comment on a post, delete or edit their comments. If chosen, editing a comment will bring up a small form to retype your comment and then you can either save or close if you change your mind.
* Users can also upvote, downvote and/or save posts, and you can also undo all of these actions if they changed their minds.
* Users can also follow other users' accounts and unfollow them if they desire.

### **Defensive Design**

* When making a new account, the following message will appear if any of the inputs are left blank:

![screenshot](documentation/test_screenshots/signupDefensive.png)

* Login attempts with the wrong credentials, will show the following message: 

![screenshot](documentation/test_screenshots/loginDefensive.png)

* Login attempts leaving any input blank, will show the following message: 

![screenshot](documentation/test_screenshots/loginDefensive2.png)

* Attempts to save or vote for your posts will show the following messages: 

![screenshot](documentation/test_screenshots/savedDefensive.png)
![screenshot](documentation/test_screenshots/votePostDefensive.png)

* If you choose to edit or delete your post, clicking the three dots on the right side of the post's image on the post page, will show the following pop-up messages once you hover over each icon, to ensure you know what you're doing before you click:

![screenshot](documentation/test_screenshots/EditPostDefensive.png) 

![screenshot](documentation/test_screenshots/DeletePostDefensive.png)

* In the "Add post" section, leaving the title input blank will show the following message:

![screenshot](documentation/test_screenshots/addPostDefensive.png)

- Users who forget to add an image while creating a post will still see the post published, with a default image as shown below. Going back into the post page and editing the post will allow the user to rechoose an image:

![screenshot](documentation/test_screenshots/defaultImage.png)


### **Future Implementations**
Future plans for this project include:

- Add more fields for a user to add to their profile. Such as location, age, and/or email address and other social media platforms.
- Add a meow/bark feature, similar to "poke" on Facebook, as an alert or notification.
- Add votes and downvotes count to profile stats.
- Add a feature to allow users to see who voted for their posts.
- Allow users to delete their profile.

### **Components**
* Asset.js - component for the spinner seen while the page is loading, used in PostFeed.js, PostsFeed.js, PopularProfiles.js & ProfilePage.js files.

* Avatar.js - component used for displaying the profile image. Used in NavBar.js, Post.js, Profile.js, ProfilePage.js, Reply.js, and ReplyCreateForm.js files.

* MoreDropdown.js - component used for the functionality and display of the icons to edit/delete posts, comments, and profiles. Only shown to the owner of such posts and their profiles.

* NavBar.js - component used for the display of the NavBar, added into the main app.js file to display at the top of the page.

* NotFound.js - component used for displaying an error image and message if an invalid page has been typed in.

## **Technologies Used**
### **Languages Used**
- HTML
- CSS
- Javascript
- React


### **Frameworks, Libraries, and Programs Used**
- [Axios](https://axios-http.com/): a promised-based HTTP client for JavaScript. It has the ability to make HTTP requests from the browser and handle the transformation of request and response data.
- [Favicon](https://favicon.io/): Used to generate the favicon image from a logo generated.
- [jwt-decode](https://jwt.io/): is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.
- [React-Bootstrap](https://react-bootstrap.github.io/): a component-based library that provides native Bootstrap components as pure React components.
- [react-router-dom](https://www.npmjs.com/package/react-router-dom): enables you to implement dynamic routing in a web app. 
- [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component): a technique that automatically adds the next page as the user scrolls down through content, more content is loaded.
- [Font Awesome](https://fontawesome.com/): a widely-used icon set that gives you scalable vector images that can be customized with CSS.
- [Google Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/): an open-source tool for running technical website audits.
- [Am I Responsive?](https://ui.dev/amiresponsive): to ensure the project looked good across all devices.
- [HTML Markup Validation](https://validator.w3.org/): used to validate HTML code syntax.
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/): used to validate CSS code syntax.
- [Balsamiq](https://balsamiq.com/): used to create mockups/wireframes of the project prior to starting.
- [Google Fonts](https://fonts.google.com/): a computer font and web font service owned by Google. This includes free and open source font families.
- [GitHub](https://github.com/): an Internet hosting service for software development and version control using Git.
- [Heroku](https://heroku.com/): a cloud platform as a service (PaaS) supporting several programming languages. Used to 
deploy and store for final deployment.

### **Databases platform and cloud storage**

- ElephantSQL Postgres: database service provided by ElephantSQL for data storage.
- Heroku Postgres: SQL database service provided directly by Heroku for storing data.
- Cloudinary: to store images and static files in production.
- Heroku: to deploy and run the application in production.

## **Testing**
### **Introduction**
This project has been continuously tested throughout the development stages using the following features:
- Python terminal for backend functionalities
- Google Developer Tools
- Manual Testing

### **Validator Testing**
- All HTML files passed through the HTML checker with no errors.

![screenshot](documentation/test_screenshots/HTML_validator.png)


- CSS files pass through the Jigsaw validator without error.

![screenshot](documentation/test_screenshots/CSS_validator.png)

- All JSX code was validated and corrected throughout the development of the project.

![screenshot](documentation/test_screenshots/EsLint.png)


#### **LightHouse testing**

* **For Desktop:**

    | Section | Performance | Accessibility | Best Practices | SEO |
    | --- | --- | --- | --- | --- |
    | Home | 73 | 100 | 92 | 100 |
    | Post Page | 81 | 100 | 92 | 100 |
    | PawFeed | 73 | 100 | 92 | 100 |
    | Saved | 73 | 100 | 92 | 100 |
    | Sign Up | 87 | 100 | 75 | 100 |
    | Sign in | 87 | 100 | 75 | 100 |
    | Profile | 83 | 100 | 92 | 100 |

* **For Mobile devices:**

    | Section | Performance | Accessibility | Best Practices | SEO |
    | --- | --- | --- | --- | --- |
    | Home | 51 | 100 | 92 | 100 |
    | Post Page | 50 | 100 | 92 | 100 |
    | PawFeed | 53 | 100 | 92 | 100 |
    | Saved | 51 | 100 | 92 | 100 |
    | Sign Up | 53 | 100 | 83 | 100 |
    | Sign in | 53 | 100 | 83 | 100 |
    | Profile | 51 | 100 | 92 | 100 |


### **Manual Testing**
Manual testing for this project was carried out as follows: 
- Users can see sign-in, sign-up, and about pages only when not logged in.
- Users can create a new account.
- Users can then, sign in to their account and then be redirected to the home page.
- Users can log out.
- Once signed in, users can create, vote, save, and reply to posts. They can edit and delete their posts and replies. 
- Users can edit and update their profiles, which include a profile picture, bio entry, and a separate username and password edit feature.
- All NavLinks and buttons go to their destination.
- Clicking on the post image brings you to the post's page.
- You can vote, downvote and save and also undo all of these actions if you change your mind.
- Once you hover over the votes/replies/save icons, they let you know if you need to sign-in to use this feature, and once clicked on if the user is signed out, you will be redirected to the sign-in page.
- The user is notified of what each icon represents. In each post page, if the user is the owner, the three dots to the right side of the post image will bring up the edit and delete feature, both icons have an overlay trigger to indicate which one does what feature.
- The site was continuously built on google chrome, and once built, it was successfully tested on firefox browser, and safari browser. The only issue found on safari was the inability to sign-in properly, which was resolved after some research on Slack. (mentioned and detailed in the fixed bugs section below) 


### **User story testing**
**User story:**

1: User: Navigation - *"As a user I can view a NavBar from every page so that I can navigate easily between pages."* ✅

2: User: Routing - *"As a user I can navigate through pages quickly and easily so that I can view content without page refresh."* ✅

3: User: Authentication - Sign up - *"As a user I can create a new account so that I can access all the features for signed up users."*
✅

4: User: Authentication - Sign in - *"As a user I can sign in to the app so that I can access functionality and features for logged in users."* ✅

5: User: Authentication - Logged in Status - *"As a user I can always tell if I am logged in or not so that I can log in to use features."* ✅

6: User: Authentication - Refreshing access tokens - *"As a user I can maintain my logged-in status (for 24hrs) until I choose to log out so that my user experience is not compromised."* ✅

7: User: Navigation: Conditional rendering - *"As a logged out user I can see sign in/sign up options so that I can sign in/sign up."* ✅

8: User: Avatar - *"As a user I can view other user's avatars so that I can easily identify users of the application."* ✅

9: User: Create posts - *"As a logged in user I can create posts so that I can share my images and image content with my followers."* ✅

10: User: View a post - *"As a user I can view the details of a single post so that I can read more."* ✅

11: User: Like/save a post - *"As a logged in user I can like/save a post so that I can show and see which are my favourite posts."* ✅

12: User: View most recent posts in order - *"As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the most recent content."* ✅

13: User: Searchbar filter - *"As a user, I can search for posts with keywords, so that I can find the posts and user profiles that I prefer to see."* ✅

14: User: View liked/saved posts - *"As a logged in user I can view the posts I liked/saved so that I can find the posts that I love."* ✅

15: User: View posts of followed users - *"As a logged in user I can view content filtered by users I follow so that I can keep up to date with them specifically."* ✅

16: User: Infinite scroll - *"As a user I can keep scrolling through the images on the site, which are loaded automatically so that there is no need for a "next page/previous page" option."* ✅

17: User: Post page - *"As a user I can view the single post page so that I can read the comments specifically about that post."* ✅

18: User: Edit/delete post - *"As a post owner I can edit/delete my post title, description and image so that I can make corrections or update my post after it was created."* ✅

19: User: Create a comment - *"As a logged in user I can add comments to a post so that I can share my opinions about the post and start/have a conversation."* ✅

20: User: View comment date - *"As a user I can see how long ago a comment was made so that I know how old or new a comment is."* ✅

21: User: View comments - *"As a user I can read comments on posts so that I can read what other users think about the posts and reply to them accordingly."* ✅

22: User: Edit/delete a comment - *"As an owner of a comment I can edit and/or delete my comment so that I can edit/remove my comment from the application."* ✅

23: User: View profile page - *"As a user I can view other user's profiles so that I can see their posts and bio and read more about them."* ✅

24: User: Most popular profiles - *"As a user I can see a list of the most followed profiles so that I can see which profiles are popular and see their posts."* ✅

25: User: User profile - view user stats - *"As a user I can view statistics about a specific user: bio, number of posts, followers and users followed so that I can read more about them."* ✅

26: User: Follow/Unfollow a user - *"As a logged in user I can follow and unfollow users so that I can see and remove posts by specific users in my posts feed."* ✅

27: User: View/filter all posts by a specific user - *"As a user I can view all the posts by a specific user by filtering so that I can catch up on their latest posts, or decide to follow them."* ✅

28: User: Edit profile - *"As a logged in user I can edit my profile so that I can change my profile picture, name and bio to keep my followers updated."* ✅

29: User: Delete profile - *"As a logged in user I can delete my profile in case I decide to leave this social media."* - Future implementation.

30: Update username and password - *"As a logged in user I can update my username and password so that I can change my display name and keep my profile more secure."* ✅

31: User: "Bark/Meow" at fellow user - *"As a user I can "bark/meow" so that I can get the attention of another user."* - Future implementation.

32: Admin: Complete README documentation - *"Complete README, fully documenting sources, and all about the frontend and frameworks used."* ✅

33: User: Unlike/unsave a post - *"As a user I can unlike/unsave a post so that I can change what I see in my liked/saved feed."* ✅

34: User: Toggle button - *"As a user I can toggle the post images so that I can see them in different formats."* ✅

The link To GitHub KanBan Project - [here](https://github.com/users/JodyMurray/projects/11)

### **Fixed bugs and solutions**

- TokenTimestamp wasn't functioning as it should.
    * Solution: A spelling error fix solved the issue.

- The reply count upon testing wasn't going up in count as a reply is added.
    * Solution: The variable was wrongly named "replies_count", resolved once renamed "reply_count".

- For smaller screen sizes, the nav link's text and icons are stacked on top of each other.
    * Solution: Reduce padding, and size of the font and reduce the margin on the logo as it was pushing everything to the right.

- An error logged to the console for the logo/favicon image. 
    * Solution: I deleted the original favicon.io 16x16 images when I first opened the project, once these were added, the error disappeared.

- Errors would show up in the console claiming that there were several icons with "class" instead of "className" from copying and pasting from font awesome.
    * Solution: Searching all icons in the sidebar on GitHub, this was quickly resolved.

- When the reply icon was clicked on, the page wasn't redirecting to the reply section on the post page.
    * Solution: There was an unnecessary space in the link - {posts/$id}.

- There was an issue with logging in through safari, once I added the credentials it would jump back to the sign-in page.
    * Solution: Upon researching in Slack, the issue was with the JWT json web token as a HTTP-only cookie in the browser,
    in the settings in Safari, enabling "Allow cross-website tracking" resolved the issue and it was possible to sign-in.


### **Unfixed bugs**
- No unfixed bugs to report during the production of this project.

- One thing to note is when doing the lighthouse report, best practices for the sign-in and sign-up page show a result of 75, the image shows up tagged as low resolution.
- There are errors in the console of these pages, that were also brought up during the walkthrough Moments. The errors are as follows:

*Failed to load resource: the server responded with a status of 401 (Unauthorized)*


## **Deployment**

### **GitHub**
The following bullet points detail the steps gone through to set up this project on GitHub:
- Create a Repository on GitHub (Not using any Code Institue Template).
- Create a new workspace. Once the workspace has started, run the following command in the terminal window:

    *npx create-react-app . --template git+https://github.com/Code-Institute-Org/cra-template-moments.git --use-npm*

- Enter "y" to confirm installing the create-react-app package.
- Once the packages have been installed, run *npm start* to check that react is working correctly.
- Once you can see it's running efficiently, go into the App.js file and remove the React Custom header and replace it with a test text "Hello, world!", and remove the logo import at the top of the page.
- In the preview window, you should see the test text show up now.
- Once you see this test text, add, commit, and push your changes.

### **Heroku**
The following bullet points detail the steps gone through to set up this project on Heroku:
- In Heroku: Click on the "new" button and follow the steps to create a new app, noting that a unique name is required.
- Once your unique name is chosen and you've selected your appropriate region, click "Create app".
- Once this app is created, in the "deploy" tab in Heroku, you can connect this to your GitHub repository.
- From the "Deployment method" section, choose GitHub, enter the name of the repo just created and use the search feature to find it, and then click "connect".
- When you've successfully connected your repo. Go to the 'Manual Deploy' section and click 'Deploy Branch'. Click on 'build logs' to monitor the build and ensure deployment is successful. The build is completed when the log says 'Build succeeded!'.
- Next step is to install Bootstrap 4, by typing the following command in the terminal window:

    *npm install react-bootstrap@1.6.3 bootstrap@4.6.0*


## **Credits**

### **Acknowledgements**

- The Moments walkthrough was used as a guide for this project, it served as a major help in creating this site.
- My mentor at Code Institute - Martina Terlevic.
- Keiron Chaudhry, a fellow student, and great support!

- Extra big thank you to Code Institute for this entire course, it's been a great journey so far, and the tools and support provided during this course were amazing!


### **Sources**

- The Moments walkthrough was the main source I used as a guide for this project.
- [YouTube](https://www.youtube.com/)
- [Stack Overflow](https://stackoverflow.com/)
- [GeeksForGeeks](https://www.geeksforgeeks.org/)
- [Slack](https://www.slack.com/) - for helpful tips from fellow students!
- [W3 Schools](https://www.w3schools.com/)
- Box shadow examples found - [here](https://getcssscan.com/css-box-shadow-examples)
- [Grammarly](https://app.grammarly.com/) - for spell checking the readme and about page.
- [Color hunt](https://colorhunt.co/) - for the colour palette in the design section.


### **Media**

- The media sourced for this website, were mostly found on Google.
- Other images were from friends and family, photos of their pets. And my own pet's images also.
- The logo was generated using a logo generator from this website - [Looka](https://looka.com/)
- The background remover tool was very useful to help with the logo and favicon - [here](https://www.remove.bg/)
- The image for favicon was generated through - [favicon.io](https://favicon.io/)
- The image for the responsive design at the top of the ReadMe was generated through - 
[am i responsive?](https://ui.dev/amiresponsive)


Thank you!

[Back to top](#petfriends)
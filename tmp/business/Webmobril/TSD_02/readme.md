# Webmobril 2 Proposal 

- This platform designed to engage users in completing social and environmental challenges.
- Employees can join platform, participate in challenges, and upload proof through images, videos, and text. 
- Completed challenges are verified by normal users, with points awarded for approvals. 
- Admins manage users, challenges, and content moderation. 
- Features include leaderboards, individual ratings, notifications, and QR code-based behavior assessments to foster a community-driven, gamified environment.

1. Authentication
- Registration Process (For Employees) :
- Option to select "Employee of a Company" during registration.
- Fill in additional details (e.g., company name, department, employee ID).
- Pending admin verification to associate the user with a company group.
- Registration Process (For Normal Users) :
- Basic registration with details such as name, email, and password.
- Login Options:
- Email and password-based login.
- Support for password reset.

2. Home Screen
- World Map Interface:
- Displays active and completed challenges across the globe.
- Interactive map with a toggle to switch between:
- View Active Challenges: Available challenges to participate in.
- View Completed Challenges: Challenges completed by employees and awaiting verification.
- Challenges categorized by:
- Environment: Nature care, animal care, people care.

3. Challenge Participation and Completion
- Taking Challenges:
- Employees can take up active challenges and complete them by uploading :
- Proof as images, videos, and a text description.

4. Verification Process:
- Normal users review the completed challenges and provide Approval or Rejection :
- 7 Consecutive Approvals: Automatic approval and content published.
- 7 Consecutive Rejections: Results in Zero Points
- 7 Consecutive Reports : Content moves to the Admin’s “Black Box” for further review and becomes invisible on the app.

5. Points System:
- Approved challenges award 1 point each to the employee and their company.

6. Leaderboard
- Company Rankings: Display a leaderboard ranking companies based on their employees’ approved challenges and activities.

7. Challenge Creation
- By Users
- Any user can propose a challenge with entering the details like Title, description, category, and associated media.
- Challenges created by users require admin approval before listing on the map.

8. Individual Characteristics and Ratings
- Character Points:
- Each user has a score calculated based on points awarded for behavior and challenge approvals.

9. Unique QR Code:
- Each user has a scannable QR code within the app.
- Scanning allows other users to rate characteristics, such as:
- Gardening qualities
- Civic responsibility
- Animal care, etc.

10. Ratings are averaged (avg. of all received rating)to form a user’s characteristic score.
- Notifications
- Push Notifications
- Alerts for:
- New challenges.
- Updates on challenge approval/rejection.
- Leaderboard rankings and announcements.

11. User Profile
- Manage personal information, update password, and access help & support.
- Logout option.

## Admin Panel 

1. Authentication
- Admin Login:
- Access through an Admin ID and password.
- Reset link for password recovery.

2. User Management
- Manages Normal and Employee Users.
- Perform actions like View, edit, deactivate, or delete users.
- Company Group Creation:
- Create and manage groups by uploading employee details.
- Associate employees with companies based on email and group ID.
- Challenge Management
- Manage and Upload Challenges:
- Create new challenges with title, category, description, and media.
- Review and approve/reject user-submitted challenges.

3. Characteristics Management
- Predefined Characteristics:
- Create and manage characteristic categories for user QR rating (e.g., civic traits, animal care).

4. Notifications Management
- Push Notifications: Create and send notifications to all users or specific groups.
- Black Box Review
- Pending Content:
- Review videos/images rejected by users.
- Approve or permanently remove content from the app.

5. Content Moderation
- Manage (Remove/Update) uploaded videos, images, and text content from challenges.
- Reports and Insights
- View activity summaries, including:
- Total challenges completed.
- Top-performing companies and users.
- Rejected challenges for admin attention

6. Admin Profile
- Admin Profile
- Update Password
- Manage Privacy Policy
- Logout

**Server Cost shall be bared by the client itself.**


--- 

1. Look like they continue persisting with the NodeJS solution, but ignoring that I ask them to use Firebase. 
2. This proposal is more align with what is described in the several pages that describe this challenge. 
3. (once again, the price of the server is ommited) but this proposal don't include one page of the last (first proposal), that express that they will support bugs and updates.



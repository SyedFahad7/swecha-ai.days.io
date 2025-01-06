# Simple Git Feature Branch Development Guidelines

## **1. Initial Setup**

- Configure your local Git (only once):
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

## **2. Branch Naming**

- Use simple and clear names:
  - Format: `feature/<short-description>` or `fix/<short-description>`
  - Examples:
    - `feature/add-speaker-section`
    - `fix/header-alignment`

## **3. Start From `dev`**

- Make sure your `dev` branch is up-to-date:
  ```bash
  git checkout dev
  git pull origin dev
  ```

## **4. Create a New Branch**

- Create your feature or fix branch:
  ```bash
  git checkout -b feature/<short-description>
  ```

## **5. Commit Changes**

- Keep commits small and descriptive:
  ```bash
  git add .
  git commit -m "Add speaker section to homepage"
  ```

## **6. Push Your Branch**

- Push your branch to the remote repository:
  ```bash
  git push origin feature/<short-description>
  ```

---

# Creating a Merge Request (MR)

## **1. Open a Merge Request**

- Go to your Git hosting platform.
- Create a Merge Request:
  - **Source branch**: Your feature branch.
  - **Target branch**: `dev`.
  - Add a brief **title** and **description**.

## **2. Add Reviewers**

- Assign team members to review your changes.

## **3. Respond to Feedback**

- Make updates if needed and push them:
  ```bash
  git add .
  git commit -m "Fix feedback: Adjust speaker card layout"
  git push
  ```

## **4. Merge Your Branch**

- Once approved, merge your branch on the Git platform.
- Delete the branch after merging.

---

## **Quick Tips**

1. **Pull Regularly**: Keep your branch updated with `dev`.
2. **Keep It Simple**: Avoid unnecessary commits or changes.
3. **Ask for Help**: Don’t hesitate to reach out for support.
